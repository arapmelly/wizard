angular.module('resumeCtrl', [])

.controller('resumeController', function($scope, $http, $uibModal, $location, Resume, Template, Level, Career){

	$scope.resumeData = {};

	$scope.resume = {};
	$scope.loading = true;
	$scope.animationsEnabled = true;
	$scope.successTextAlert = "Some content";
	$scope.showSuccessAlert = false;

	$scope.errorTextAlert = {};
	$scope.showErrorAlert = false;



	//get all 
	Resume.get().success(function(data){
		$scope.resumes = data;
		$scope.loading = false;
	});

    //get all 
    Level.get().success(function(data){
        $scope.levels = data;
        $scope.loading = false;
    });

    //get all 
    Career.get().success(function(data){
        $scope.careers = data;
        $scope.loading = false;
    });

    //get all 
    Template.get().success(function(data){
        $scope.templates = data;
        $scope.loading = false;
    });




	$scope.switchBool = function(value) {
   $scope[value] = !$scope[value];
};


	$scope.updateResume = function() {
      
      	$scope.loading = true;
        // use the function we created in our service
        Resume.update($scope.resume).success(function(data) {

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
                Resume.get().success(function(getData) {
                        $scope.resumes = getData;
                        $scope.loading = false;
                       
                    });

                  

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.submitResume = function() {
      	 
      	$scope.loading = true;
      
        // use the function we created in our service
        Resume.save($scope.resumeData).success(function(data) {
        			
        	   
                $scope.modalInstance.dismiss();
                 
                 var id = data;

                

                $location.path('/resumeeditor/'+ id);

            
               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.deleteResume = function(id) {
        $scope.loading = true; 

        $scope.id = id;
        
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'deleteConfirm.html',
            scope: $scope
        });

       
    };



     $scope.deleteResumeOk = function(id) {
        

        // use the function we created in our service
        Resume.destroy(id).success(function(data) {

                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    
                }
                // if successful, we'll need to refresh the comment list
                Resume.get()
                    .success(function(getData) {

                      
                        $scope.modalInstance.dismiss();
   

                        $scope.resumes = getData;
                        $scope.loading = false;  
                    });

            });
    };
	



	$scope.editResume = function (resume) {
		$scope.loading = true; 

    	
		$scope.resume = resume;

    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'editResume.html',
    		scope: $scope
		});

		
	};



	$scope.createResume = function () {
		$scope.loading = true; 

		
    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'createResume.html',
    		scope: $scope,
            size: 'lg'
		});

		
	};


	$scope.cancel = function () {
		$scope.loading = false;
    	$scope.modalInstance.dismiss();
  	};




    $scope.download = function (id) {
        
        

        Resume.download(id).success(function(data){

            $scope.modalInstance.dismiss();

        });
    };



   

})