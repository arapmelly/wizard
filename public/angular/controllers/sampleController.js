angular.module('sampleCtrl', [])

.controller('sampleController', function($scope, $http, $uibModal, Sample, Level, Career){

	$scope.sampleData = {};

	$scope.sample = {};
	$scope.loading = true;
	$scope.animationsEnabled = true;
	$scope.successTextAlert = "Some content";
	$scope.showSuccessAlert = false;

	$scope.errorTextAlert = {};
	$scope.showErrorAlert = false;

   



	//get all 
	Sample.get().success(function(data){
		$scope.samples = data;
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


	$scope.switchBool = function(value) {
   $scope[value] = !$scope[value];
};


	$scope.updateSample = function() {
      
      	$scope.loading = true;
        // use the function we created in our service
        Sample.update($scope.sample).success(function(data) {

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
                Sample.get().success(function(getData) {
                        $scope.samples = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.submitSample = function() {
      	 
      	$scope.loading = true;
      
        // use the function we created in our service
        Sample.save($scope.sampleData).success(function(data) {
        			
        		if(data.success == true){
        			$scope.successTextAlert = data.notice;
					$scope.showSuccessAlert = true;
					$scope.modalInstance.dismiss();
					$scope.sampleData = {};
        		}

        		if(data.success == false){
        			$scope.errorTextAlert = data.error;
					$scope.showErrorAlert = true;
					
        		}
                // if successful, we'll need to refresh the comment list
                Sample.get().success(function(getData) {
                        $scope.samples = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.deleteSample = function(id) {
        $scope.loading = true; 

        $scope.id = id;
        
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'deleteConfirm.html',
            scope: $scope
        });

       
    };



     $scope.deleteSampleOk = function(id) {
        

        // use the function we created in our service
        Sample.destroy(id).success(function(data) {

                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    
                }
                // if successful, we'll need to refresh the comment list
                Sample.get()
                    .success(function(getData) {

                      
                        $scope.modalInstance.dismiss();
   

                        $scope.samples = getData;
                        $scope.loading = false;  
                    });

            });
    };
	



	$scope.editSample = function (sample) {
		$scope.loading = true; 

    	
		$scope.sample = sample;

    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'editSample.html',
    		scope: $scope
		});

		
	};



	$scope.createSample = function () {
		$scope.loading = true; 

		
    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'createSample.html',
    		scope: $scope
		});

		
	};


	$scope.cancel = function () {
		$scope.loading = false;
    	$scope.modalInstance.dismiss();
  	};

})