angular.module('experienceCtrl', [])

.controller('experienceController', function($scope, $http, $uibModal, $routeParams, Experience){

	$scope.experienceData = {};

    


    $scope.experienceData.experiences = [];

	$scope.experience = {};
	$scope.loading = true;
	$scope.animationsEnabled = true;
	$scope.successTextAlert = "Some content";
	$scope.showSuccessAlert = false;

	$scope.errorTextAlert = {};
	$scope.showErrorAlert = false;



    $scope.resumeid = $routeParams.resumeId;


	//get all 
	Experience.get().success(function(data){
		$scope.experiences = data;
		$scope.loading = false;
	});


	$scope.switchBool = function(value) {
   $scope[value] = !$scope[value];
};


$scope.addExperience = function(experience){





    $scope.experienceData.experiences.push({
        experience:experience,
        resumeid:$scope.resumeid,
        organization:experience.organization,
        title:experience.title,
        start_period:experience.start_period,
        end_period:experience.end_period,
        responsibilities:experience.responsibilities
    });





};

$scope.removeExperience = function(item) { 
  var index = $scope.experienceData.experiences.indexOf(item);
  
  $scope.experienceData.experiences.splice(index, 1);     
}





	$scope.updateExperience = function() {
      
      	$scope.loading = true;
        // use the function we created in our service
        Experience.update($scope.experience).success(function(data) {

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
                Experience.get().success(function(getData) {
                        $scope.experiences = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.submitExperience = function() {
      	 
      	$scope.loading = true;
        
        

            Experience.save($scope.experienceData).success(function(data){



                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    $scope.objectiveData = {};

                    Experience.show($scope.resume.id).success(function(data){
                        $scope.experiencesData = data;
                        
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


    $scope.deleteExperience = function(id) {
        $scope.loading = true; 

        $scope.id = id;
        
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'deleteConfirm.html',
            scope: $scope
        });

       
    };



     $scope.deleteConfirmOk = function(id) {
        

        // use the function we created in our service
        Experience.destroy(id).success(function(data) {

                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    
                }
                // if successful, we'll need to refresh the comment list
                Experience.show($scope.resume.id).success(function(data){
                        $scope.experiencesData = data;
                        
                        $scope.loading = false;
                        $scope.modalInstance.dismiss();
                        
                    });

            });
    };
	



	$scope.editExperience = function (experience) {
		$scope.loading = true; 

    	
		$scope.experience = experience;

    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'editExperience.html',
    		scope: $scope,
            size: 'lg'
		});

		
	};






	$scope.createExperience = function () {
		$scope.loading = true; 

        
		
    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'createExperience.html',
    		scope: $scope,
            size: 'lg'
		});

		
	};


	$scope.cancel = function () {
		$scope.loading = false;
    	$scope.modalInstance.dismiss();
  	};

})