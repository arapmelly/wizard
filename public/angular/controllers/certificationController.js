angular.module('certificationCtrl', [])

.controller('certificationController', function($scope, $http, $uibModal, $routeParams, Certification){

	$scope.certificationData = {};

    


    $scope.certificationData.certifications = [];

	$scope.certification = {};
	$scope.loading = true;
	$scope.animationsEnabled = true;
	$scope.successTextAlert = "Some content";
	$scope.showSuccessAlert = false;

	$scope.errorTextAlert = {};
	$scope.showErrorAlert = false;



    $scope.resumeid = $routeParams.resumeId;


	//get all 
	Certification.get().success(function(data){
		$scope.certifications = data;
		$scope.loading = false;
	});


	$scope.switchBool = function(value) {
   $scope[value] = !$scope[value];
};


$scope.addSample = function(sample){





    $scope.certificationData.certifications.push({
        sample:sample,
        resumeid:$scope.resumeid,
        content:sample.content
    });





};

$scope.removeSample = function(item) { 
  var index = $scope.certificationData.certifications.indexOf(item);
  
  $scope.certificationData.certifications.splice(index, 1);     
}


$scope.fetchSamples = function(){

    Certification.samples($scope.resumeid).success(function(getData) {
                        $scope.samples = getData;
                        $scope.loading = false;
                       
                    });

};


	$scope.updateCertification = function() {
      
      	$scope.loading = true;
        // use the function we created in our service
        Certification.update($scope.certification).success(function(data) {

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
                Certification.get().success(function(getData) {
                        $scope.certifications = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.submitCertification = function() {
      	 
      	$scope.loading = true;
        
        

            Certification.save($scope.certificationData).success(function(data){



                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    $scope.objectiveData = {};

                    Certification.show($scope.resume.id).success(function(data){
                        $scope.certificationsData = data;
                        
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


    $scope.deleteCertification = function(id) {
        $scope.loading = true; 

        $scope.id = id;
        
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'deleteConfirm.html',
            scope: $scope
        });

       
    };



     $scope.deleteConfirmOk = function(id) {
        

        // use the function we created in our service
        Certification.destroy(id).success(function(data) {

                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    
                }
                // if successful, we'll need to refresh the comment list
                Certification.show($scope.resume.id).success(function(data){
                        $scope.certificationsData = data;
                        
                        $scope.loading = false;
                        $scope.modalInstance.dismiss();
                        
                    });

            });
    };
	



	$scope.editCertification = function (certification) {
		$scope.loading = true; 

    	
		$scope.certification = certification;

    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'editCertification.html',
    		scope: $scope,
            size: 'lg'
		});

		
	};






	$scope.createCertification = function () {
		$scope.loading = true; 

        Certification.samples($scope.resumeid).success(function(getData) {
                        $scope.samples = getData;
                        $scope.loading = false;
                       
                    });
		
    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'createCertification.html',
    		scope: $scope,
            size: 'lg'
		});

		
	};


	$scope.cancel = function () {
		$scope.loading = false;
    	$scope.modalInstance.dismiss();
  	};

})