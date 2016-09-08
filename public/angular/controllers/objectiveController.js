angular.module('objectiveCtrl', [])

.controller('objectiveController', function($scope, $http, $uibModal, $routeParams, Objective){

	$scope.objectiveData = {};

    


    $scope.objectiveData.objectives = [];

	$scope.objective = {};
	$scope.loading = true;
	$scope.animationsEnabled = true;
	$scope.successTextAlert = "Some content";
	$scope.showSuccessAlert = false;

	$scope.errorTextAlert = {};
	$scope.showErrorAlert = false;



    $scope.resumeid = $routeParams.resumeId;


	//get all 
	Objective.get().success(function(data){
		$scope.objectives = data;
		$scope.loading = false;
	});


	$scope.switchBool = function(value) {
   $scope[value] = !$scope[value];
};


$scope.addSample = function(sample){





    $scope.objectiveData.objectives.push({
        sample:sample,
        resumeid:$scope.resumeid,
        content:sample.content
    });





};

$scope.removeSample = function(item) { 
  var index = $scope.objectiveData.objectives.indexOf(item);
  
  $scope.objectiveData.objectives.splice(index, 1);     
}


$scope.fetchSamples = function(){

    Objective.samples($scope.resumeid).success(function(getData) {
                        $scope.samples = getData;
                        $scope.loading = false;
                       
                    });

};


	$scope.updateObjective = function() {
      
      	$scope.loading = true;
        // use the function we created in our service
        Objective.update($scope.objective).success(function(data) {

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
                Objective.get().success(function(getData) {
                        $scope.objectives = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.submitObjective = function() {
      	 
      	$scope.loading = true;
        
        

            Objective.save($scope.objectiveData).success(function(data){



                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    $scope.objectiveData = {};

                    Objective.show($scope.resume.id).success(function(data){
                        $scope.objectivesData = data;
                        
                        $scope.loading = false;
                        
                    });

                    $scope.modalInstance.dismiss();
                    

                }

                if(data.success == false){
                    $scope.errorTextAlert = data.error;
                    $scope.showErrorAlert = true;
                    
                }

                

            });



       


        

        

        /*// use the function we created in our service
        Objective.save($scope.objectiveData).success(function(data) {
        			
        		if(data.success == true){
        			$scope.successTextAlert = data.notice;
					$scope.showSuccessAlert = true;
					$scope.modalInstance.dismiss();
					$scope.objectiveData = {};
        		}

        		if(data.success == false){
        			$scope.errorTextAlert = data.error;
					$scope.showErrorAlert = true;
					
        		}
                // if successful, we'll need to refresh the comment list
                Objective.get().success(function(getData) {
                        $scope.objectives = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });*/
    };


    $scope.deleteObjective = function(id) {
        $scope.loading = true; 

        $scope.id = id;
        
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'deleteConfirm.html',
            scope: $scope
        });

       
    };



     $scope.deleteConfirmOk = function(id) {
        

        // use the function we created in our service
        Objective.destroy(id).success(function(data) {

                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    
                }
                // if successful, we'll need to refresh the comment list
                Objective.show($scope.resume.id).success(function(data){
                        $scope.objectivesData = data;
                        
                        $scope.loading = false;
                        $scope.modalInstance.dismiss();
                        
                    });

            });
    };
	



	$scope.editObjective = function (objective) {
		$scope.loading = true; 

    	
		$scope.objective = objective;

    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'editObjective.html',
    		scope: $scope,
            size: 'lg'
		});

		
	};






	$scope.createObjective = function () {
		$scope.loading = true; 

        Objective.samples($scope.resumeid).success(function(getData) {
                        $scope.samples = getData;
                        $scope.loading = false;
                       
                    });
		
    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'createObjective.html',
    		scope: $scope,
            size: 'lg'
		});

		
	};


	$scope.cancel = function () {
		$scope.loading = false;
    	$scope.modalInstance.dismiss();
  	};

})