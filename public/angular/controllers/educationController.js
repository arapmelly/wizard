angular.module('educationCtrl', [])

.controller('educationController', function($scope, $http, $uibModal, $routeParams, Education){

	$scope.educationData = {};

    


    $scope.educationData.educations = [];

	$scope.education = {};
	$scope.loading = true;
	$scope.animationsEnabled = true;
	$scope.successTextAlert = "Some content";
	$scope.showSuccessAlert = false;

	$scope.errorTextAlert = {};
	$scope.showErrorAlert = false;



    $scope.resumeid = $routeParams.resumeId;


	//get all 
	Education.get().success(function(data){
		$scope.educations = data;
		$scope.loading = false;
	});


	$scope.switchBool = function(value) {
   $scope[value] = !$scope[value];
};


$scope.addEducation = function(education){





    $scope.educationData.educations.push({
        education:education,
        resumeid:$scope.resumeid,
        institution:education.institution,
        course:education.course,
        start_period:education.start_period,
        end_period:education.end_period,
        remarks:education.remarks
    });





};

$scope.removeEducation = function(item) { 
  var index = $scope.educationData.educations.indexOf(item);
  
  $scope.educationData.educations.splice(index, 1);     
}


    


	$scope.updateEducation = function() {
      
      	$scope.loading = true;
        // use the function we created in our service
        Education.update($scope.education).success(function(data) {

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
                Education.get().success(function(getData) {
                        $scope.educations = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.submitEducation = function() {
      	 
      	$scope.loading = true;
        
        

            Education.save($scope.educationData).success(function(data){



                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    $scope.objectiveData = {};

                    Education.show($scope.resume.id).success(function(data){
                        $scope.educationsData = data;
                        
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


    $scope.deleteEducation = function(id) {
        $scope.loading = true; 

        $scope.id = id;
        
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'deleteConfirm.html',
            scope: $scope
        });

       
    };



     $scope.deleteConfirmOk = function(id) {
        

        // use the function we created in our service
        Education.destroy(id).success(function(data) {

                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    
                }
                // if successful, we'll need to refresh the comment list
                Education.show($scope.resume.id).success(function(data){
                        $scope.educationsData = data;
                        
                        $scope.loading = false;
                        $scope.modalInstance.dismiss();
                        
                    });

            });
    };
	



	$scope.editEducation = function (education) {
		$scope.loading = true; 

    	
		$scope.education = education;

    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'editEducation.html',
    		scope: $scope
		});

		
	};






	$scope.createEducation = function () {
		$scope.loading = true; 

        
		
    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'createEducation.html',
    		scope: $scope,
            size: 'lg'
		});

		
	};


	$scope.cancel = function () {
		$scope.loading = false;
    	$scope.modalInstance.dismiss();
  	};

})