angular.module('skillCtrl', [])

.controller('skillController', function($scope, $http, $uibModal, $routeParams, Skill){

	$scope.skillData = {};

    


    $scope.skillData.skills = [];

	$scope.skill = {};
	$scope.loading = true;
	$scope.animationsEnabled = true;
	$scope.successTextAlert = "Some content";
	$scope.showSuccessAlert = false;

	$scope.errorTextAlert = {};
	$scope.showErrorAlert = false;



    $scope.resumeid = $routeParams.resumeId;


	//get all 
	Skill.get().success(function(data){
		$scope.skills = data;
		$scope.loading = false;
	});


	$scope.switchBool = function(value) {
   $scope[value] = !$scope[value];
};


$scope.addSample = function(sample){





    $scope.skillData.skills.push({
        sample:sample,
        resumeid:$scope.resumeid,
        content:sample.content
    });





};

$scope.removeSample = function(item) { 
  var index = $scope.skillData.skills.indexOf(item);
  
  $scope.skillData.skills.splice(index, 1);     
}


$scope.fetchSamples = function(){

    Skill.samples($scope.resumeid).success(function(getData) {
                        $scope.samples = getData;
                        $scope.loading = false;
                       
                    });

};


	$scope.updateSkill = function() {
      
      	$scope.loading = true;
        // use the function we created in our service
        Skill.update($scope.skill).success(function(data) {

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
                Skill.get().success(function(getData) {
                        $scope.skills = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.submitSkill = function() {
      	 
      	$scope.loading = true;
        
        

            Skill.save($scope.skillData).success(function(data){



                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    $scope.objectiveData = {};

                    Skill.show($scope.resume.id).success(function(data){
                        $scope.skillsData = data;
                        
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


    $scope.deleteSkill = function(id) {
        $scope.loading = true; 

        $scope.id = id;
        
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'deleteConfirm.html',
            scope: $scope
        });

       
    };



     $scope.deleteConfirmOk = function(id) {
        

        // use the function we created in our service
        Skill.destroy(id).success(function(data) {

                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    
                }
                // if successful, we'll need to refresh the comment list
                Skill.show($scope.resume.id).success(function(data){
                        $scope.skillsData = data;
                        
                        $scope.loading = false;
                        $scope.modalInstance.dismiss();
                        
                    });

            });
    };
	



	$scope.editSkill = function (skill) {
		$scope.loading = true; 

    	
		$scope.skill = skill;

    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'editSkill.html',
    		scope: $scope,
            size: 'lg'
		});

		
	};






	$scope.createSkill = function () {
		$scope.loading = true; 

        Skill.samples($scope.resumeid).success(function(getData) {
                        $scope.samples = getData;
                        $scope.loading = false;
                       
                    });
		
    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'createSkill.html',
    		scope: $scope,
            size: 'lg'
		});

		
	};


	$scope.cancel = function () {
		$scope.loading = false;
    	$scope.modalInstance.dismiss();
  	};

})