angular.module('awardCtrl', [])

.controller('awardController', function($scope, $http, $uibModal, $routeParams, Award){

	$scope.awardData = {};

    


    $scope.awardData.awards = [];

	$scope.award = {};
	$scope.loading = true;
	$scope.animationsEnabled = true;
	$scope.successTextAlert = "Some content";
	$scope.showSuccessAlert = false;

	$scope.errorTextAlert = {};
	$scope.showErrorAlert = false;



    $scope.resumeid = $routeParams.resumeId;


	//get all 
	Award.get().success(function(data){
		$scope.awards = data;
		$scope.loading = false;
	});


	$scope.switchBool = function(value) {
   $scope[value] = !$scope[value];
};


$scope.addSample = function(sample){





    $scope.awardData.awards.push({
        sample:sample,
        resumeid:$scope.resumeid,
        content:sample.content
    });





};

$scope.removeSample = function(item) { 
  var index = $scope.awardData.awards.indexOf(item);
  
  $scope.awardData.awards.splice(index, 1);     
}


$scope.fetchSamples = function(){

    Award.samples($scope.resumeid).success(function(getData) {
                        $scope.samples = getData;
                        $scope.loading = false;
                       
                    });

};


	$scope.updateAward = function() {
      
      	$scope.loading = true;
        // use the function we created in our service
        Award.update($scope.award).success(function(data) {

        		if(data.success == true){
        			$scope.successTextAlert = data.notice;
					$scope.showSuccessAlert = true;
					$scope.modalInstance.dismiss();
        		}

        		if(data.success == false){
        			$scope.errorTextAlert = data.error;
					$scope.showErrorAlert = true;
        		}
                // if successful, we'll need to refresh the comment list
                Award.get().success(function(getData) {
                        $scope.awards = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.submitAward = function() {
      	 
      	$scope.loading = true;
        
        

            Award.save($scope.awardData).success(function(data){



                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    $scope.objectiveData = {};

                    Award.show($scope.resume.id).success(function(data){
                        $scope.awardsData = data;
                        
                        $scope.loading = false;
                        
                    });

                    $scope.modalInstance.dismiss();
                    

                }

                if(data.success == false){
                    $scope.errorTextAlert = data.error;
                    $scope.showErrorAlert = true;
                    
                }

                

            });



       


        

        

    };


    $scope.deleteAward = function(id) {
        $scope.loading = true; 

        $scope.id = id;
        
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'deleteConfirm.html',
            scope: $scope
        });

       
    };



     $scope.deleteConfirmOk = function(id) {
        

        // use the function we created in our service
        Award.destroy(id).success(function(data) {

                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    
                }
                // if successful, we'll need to refresh the comment list
                Award.show($scope.resume.id).success(function(data){
                        $scope.awardsData = data;
                        
                        $scope.loading = false;
                        $scope.modalInstance.dismiss();
                        
                    });

            });
    };
	



	$scope.editAward = function (award) {
		$scope.loading = true; 

    	
		$scope.award = award;

    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'editAward.html',
    		scope: $scope,
            size: 'lg'
		});

		
	};






	$scope.createAward = function () {
		$scope.loading = true; 

        Award.samples($scope.resumeid).success(function(getData) {
                        $scope.samples = getData;
                        $scope.loading = false;
                       
                    });
		
    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'createAward.html',
    		scope: $scope,
            size: 'lg'
		});

		
	};


	$scope.cancel = function () {
		$scope.loading = false;
    	$scope.modalInstance.dismiss();
  	};

})