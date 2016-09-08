angular.module('levelCtrl', [])

.controller('levelController', function($scope, $http, $uibModal, Level){

	$scope.levelData = {};

	$scope.level = {};
	$scope.loading = true;
	$scope.animationsEnabled = true;
	$scope.successTextAlert = "Some content";
	$scope.showSuccessAlert = false;

	$scope.errorTextAlert = {};
	$scope.showErrorAlert = false;



	//get all 
	Level.get().success(function(data){
		$scope.levels = data;
		$scope.loading = false;
	});


	$scope.switchBool = function(value) {
   $scope[value] = !$scope[value];
};


	$scope.updateLevel = function() {
      
      	$scope.loading = true;
        // use the function we created in our service
        Level.update($scope.level).success(function(data) {
            
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
                Level.get().success(function(getData) {
                        $scope.levels = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.submitLevel = function() {
      	 
      	$scope.loading = true;
      
        // use the function we created in our service
        Level.save($scope.levelData).success(function(data) {
        			
        		if(data.success == 'true'){
        			$scope.successTextAlert = data.notice;
					$scope.showSuccessAlert = true;
					$scope.modalInstance.dismiss();
					$scope.levelData = {};
        		}

        		if(data.success == 'false'){
        			$scope.errorTextAlert = data.error;
					$scope.showErrorAlert = true;
					
        		}
                // if successful, we'll need to refresh the comment list
                Level.get().success(function(getData) {
                        $scope.levels = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.deleteLevel = function(id) {
        $scope.loading = true; 

        $scope.id = id;
        
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'deleteConfirm.html',
            scope: $scope
        });

       
    };



     $scope.deleteLevelOk = function(id) {
        

        // use the function we created in our service
        Level.destroy(id).success(function(data) {

                if(data.success == 'true'){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    
                }
                // if successful, we'll need to refresh the comment list
                Level.get()
                    .success(function(getData) {

                      
                        $scope.modalInstance.dismiss();
   

                        $scope.levels = getData;
                        $scope.loading = false;  
                    });

            });
    };
	



	$scope.editLevel = function (level) {
		$scope.loading = true; 

    	
		$scope.level = level;

    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'editLevel.html',
    		scope: $scope
		});

		
	};



	$scope.createLevel = function () {
		$scope.loading = true; 

		
    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'createLevel.html',
    		scope: $scope
		});

		
	};


	$scope.cancel = function () {
		$scope.loading = false;
    	$scope.modalInstance.dismiss();
  	};

})