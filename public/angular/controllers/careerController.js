angular.module('careerCtrl', [])

.controller('careerController', function($scope, $http, $uibModal, Career){

	$scope.careerData = {};

	$scope.career = {};
	$scope.loading = true;
	$scope.animationsEnabled = true;
	$scope.successTextAlert = "Some content";
	$scope.showSuccessAlert = false;

	$scope.errorTextAlert = {};
	$scope.showErrorAlert = false;



	//get all 
	Career.get().success(function(data){
		$scope.careers = data;
		$scope.loading = false;
	});


	$scope.switchBool = function(value) {
   $scope[value] = !$scope[value];
};


	$scope.updateCareer = function() {
      
      	$scope.loading = true;
        // use the function we created in our service
        Career.update($scope.career).success(function(data) {

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
                Career.get().success(function(getData) {
                        $scope.careers = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.submitCareer = function() {
      	 
      	$scope.loading = true;
      
        // use the function we created in our service
        Career.save($scope.careerData).success(function(data) {
        			
        		if(data.success == true){
        			$scope.successTextAlert = data.notice;
					$scope.showSuccessAlert = true;
					$scope.modalInstance.dismiss();
					$scope.careerData = {};
        		}

        		if(data.success == false){
        			$scope.errorTextAlert = data.error;
					$scope.showErrorAlert = true;
					
        		}
                // if successful, we'll need to refresh the comment list
                Career.get().success(function(getData) {
                        $scope.careers = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.deleteCareer = function(id) {
        $scope.loading = true; 

        $scope.id = id;
        
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'deleteConfirm.html',
            scope: $scope
        });

       
    };



     $scope.deleteCareerOk = function(id) {
        

        // use the function we created in our service
        Career.destroy(id).success(function(data) {

                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    
                }
                // if successful, we'll need to refresh the comment list
                Career.get()
                    .success(function(getData) {

                      
                        $scope.modalInstance.dismiss();
   

                        $scope.careers = getData;
                        $scope.loading = false;  
                    });

            });
    };
	



	$scope.editCareer = function (career) {
		$scope.loading = true; 

    	
		$scope.career = career;

    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'editCareer.html',
    		scope: $scope
		});

		
	};



	$scope.createCareer = function () {
		$scope.loading = true; 

		
    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'createCareer.html',
    		scope: $scope
		});

		
	};


	$scope.cancel = function () {
		$scope.loading = false;
    	$scope.modalInstance.dismiss();
  	};

})