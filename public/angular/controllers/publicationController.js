angular.module('publicationCtrl', [])

.controller('publicationController', function($scope, $http, $uibModal, $routeParams, Publication){

	$scope.publicationData = {};

    


    $scope.publicationData.publications = [];

	$scope.publication = {};
	$scope.loading = true;
	$scope.animationsEnabled = true;
	$scope.successTextAlert = "Some content";
	$scope.showSuccessAlert = false;

	$scope.errorTextAlert = {};
	$scope.showErrorAlert = false;



    $scope.resumeid = $routeParams.resumeId;


	//get all 
	Publication.get().success(function(data){
		$scope.publications = data;
		$scope.loading = false;
	});


	$scope.switchBool = function(value) {
   $scope[value] = !$scope[value];
};


$scope.addSample = function(sample){





    $scope.publicationData.publications.push({
        sample:sample,
        resumeid:$scope.resumeid,
        content:sample.content
    });





};

$scope.removeSample = function(item) { 
  var index = $scope.publicationData.publications.indexOf(item);
  
  $scope.publicationData.publications.splice(index, 1);     
}


$scope.fetchSamples = function(){

    Publication.samples($scope.resumeid).success(function(getData) {
                        $scope.samples = getData;
                        $scope.loading = false;
                       
                    });

};


	$scope.updatePublication = function() {
      
      	$scope.loading = true;
        // use the function we created in our service
        Publication.update($scope.publication).success(function(data) {

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
                Publication.get().success(function(getData) {
                        $scope.publications = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.submitPublication = function() {
      	 
      	$scope.loading = true;
        
        

            Publication.save($scope.publicationData).success(function(data){



                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    $scope.objectiveData = {};

                    Publication.show($scope.resume.id).success(function(data){
                        $scope.publicationsData = data;
                        
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


    $scope.deletePublication = function(id) {
        $scope.loading = true; 

        $scope.id = id;
        
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'deleteConfirm.html',
            scope: $scope
        });

       
    };



     $scope.deleteConfirmOk = function(id) {
        

        // use the function we created in our service
        Publication.destroy(id).success(function(data) {

                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    
                }
                // if successful, we'll need to refresh the comment list
                Publication.show($scope.resume.id).success(function(data){
                        $scope.publicationsData = data;
                        
                        $scope.loading = false;
                        $scope.modalInstance.dismiss();
                        
                    });

            });
    };
	



	$scope.editPublication = function (publication) {
		$scope.loading = true; 

    	
		$scope.publication = publication;

    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'editPublication.html',
    		scope: $scope,
            size: 'lg'
		});

		
	};






	$scope.createPublication = function () {
		$scope.loading = true; 

        Publication.samples($scope.resumeid).success(function(getData) {
                        $scope.samples = getData;
                        $scope.loading = false;
                       
                    });
		
    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'createPublication.html',
    		scope: $scope,
            size: 'lg'
		});

		
	};


	$scope.cancel = function () {
		$scope.loading = false;
    	$scope.modalInstance.dismiss();
  	};

})