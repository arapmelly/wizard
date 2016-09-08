angular.module('templateCtrl', [])

.controller('templateController', function($scope, $http, $uibModal, Template){

	$scope.templateData = {};

	$scope.template = {};
	$scope.loading = true;
	$scope.animationsEnabled = true;
	$scope.successTextAlert = "Some content";
	$scope.showSuccessAlert = false;

	$scope.errorTextAlert = {};
	$scope.showErrorAlert = false;



	//get all 
	Template.get().success(function(data){
		$scope.templates = data;
		$scope.loading = false;
	});


	$scope.switchBool = function(value) {
   $scope[value] = !$scope[value];
};


	$scope.updateTemplate = function() {
      
      	$scope.loading = true;
        // use the function we created in our service
        Template.update($scope.template).success(function(data) {

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
                Template.get().success(function(getData) {
                        $scope.templates = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.submitTemplate = function() {
      	 
      	$scope.loading = true;
      
        // use the function we created in our service
        Template.save($scope.templateData).success(function(data) {
        			
        		if(data.success == true){
        			$scope.successTextAlert = data.notice;
					$scope.showSuccessAlert = true;
					$scope.modalInstance.dismiss();
					$scope.templateData = {};
        		}

        		if(data.success == false){
        			$scope.errorTextAlert = data.error;
					$scope.showErrorAlert = true;
					
        		}
                // if successful, we'll need to refresh the comment list
                Template.get().success(function(getData) {
                        $scope.templates = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.deleteTemplate = function(id) {
        $scope.loading = true; 

        $scope.id = id;
        
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'deleteConfirm.html',
            scope: $scope
        });

       
    };



     $scope.deleteTemplateOk = function(id) {
        

        // use the function we created in our service
        Template.destroy(id).success(function(data) {

                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    
                }
                // if successful, we'll need to refresh the comment list
                Template.get()
                    .success(function(getData) {

                      
                        $scope.modalInstance.dismiss();
   

                        $scope.templates = getData;
                        $scope.loading = false;  
                    });

            });
    };
	



	$scope.editTemplate = function (template) {
		$scope.loading = true; 

    	
		$scope.template = template;

    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'editTemplate.html',
    		scope: $scope
		});

		
	};



	$scope.createTemplate = function () {
		$scope.loading = true; 

		
    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'createTemplate.html',
    		scope: $scope
		});

		
	};


	$scope.cancel = function () {
		$scope.loading = false;
    	$scope.modalInstance.dismiss();
  	};

})