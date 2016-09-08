angular.module('referenceCtrl', [])

.controller('referenceController', function($scope, $http, $uibModal, $routeParams, Reference){

	$scope.referenceData = {};

    


    $scope.referenceData.references = [];

	$scope.reference = {};
	$scope.loading = true;
	$scope.animationsEnabled = true;
	$scope.successTextAlert = "Some content";
	$scope.showSuccessAlert = false;

	$scope.errorTextAlert = {};
	$scope.showErrorAlert = false;



    $scope.resumeid = $routeParams.resumeId;


	//get all 
	Reference.get().success(function(data){
		$scope.references = data;
		$scope.loading = false;
	});


	$scope.switchBool = function(value) {
   $scope[value] = !$scope[value];
};


$scope.addReference= function(reference){





    $scope.referenceData.references.push({
        reference:reference,
        resumeid:$scope.resumeid,
        institution:reference.institution,
        name:reference.name,
        phone:reference.phone,
        email:reference.email,
        position:reference.position
    });





};

$scope.removeReference = function(item) { 
  var index = $scope.referenceData.references.indexOf(item);
  
  $scope.referenceData.references.splice(index, 1);     
}





	$scope.updateReference = function() {
      
      	$scope.loading = true;
        // use the function we created in our service
        Reference.update($scope.reference).success(function(data) {

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
                Reference.get().success(function(getData) {
                        $scope.references = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.submitReference = function() {
      	 
      	$scope.loading = true;
        
        

            Reference.save($scope.referenceData).success(function(data){



                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    $scope.objectiveData = {};

                    Reference.show($scope.resume.id).success(function(data){
                        $scope.referencesData = data;
                        
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


    $scope.deleteReference = function(id) {
        $scope.loading = true; 

        $scope.id = id;
        
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'deleteConfirm.html',
            scope: $scope
        });

       
    };



     $scope.deleteConfirmOk = function(id) {
        

        // use the function we created in our service
        Reference.destroy(id).success(function(data) {

                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    
                }
                // if successful, we'll need to refresh the comment list
                Reference.show($scope.resume.id).success(function(data){
                        $scope.referencesData = data;
                        
                        $scope.loading = false;
                        $scope.modalInstance.dismiss();
                        
                    });

            });
    };
	



	$scope.editReference = function (reference) {
		$scope.loading = true; 

    	
		$scope.reference = reference;

    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'editReference.html',
    		scope: $scope
		});

		
	};






	$scope.createReference = function () {
		$scope.loading = true; 

        
		
    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'createReference.html',
    		scope: $scope,
            size: 'lg'
		});

		
	};


	$scope.cancel = function () {
		$scope.loading = false;
    	$scope.modalInstance.dismiss();
  	};

})