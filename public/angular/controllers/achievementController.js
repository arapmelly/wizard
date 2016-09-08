angular.module('achievementCtrl', [])

.controller('achievementController', function($scope, $http, $uibModal, $routeParams, Achievement){

	$scope.achievementData = {};

    


    $scope.achievementData.achievements = [];

	$scope.achievement = {};
	$scope.loading = true;
	$scope.animationsEnabled = true;
	$scope.successTextAlert = "Some content";
	$scope.showSuccessAlert = false;

	$scope.errorTextAlert = {};
	$scope.showErrorAlert = false;



    $scope.resumeid = $routeParams.resumeId;


	//get all 
	Achievement.get().success(function(data){
		$scope.achievements = data;
		$scope.loading = false;
	});


	$scope.switchBool = function(value) {
   $scope[value] = !$scope[value];
};


$scope.addSample = function(sample){





    $scope.achievementData.achievements.push({
        sample:sample,
        resumeid:$scope.resumeid,
        content:sample.content
    });





};

$scope.removeSample = function(item) { 
  var index = $scope.achievementData.achievements.indexOf(item);
  
  $scope.achievementData.achievements.splice(index, 1);     
}


$scope.fetchSamples = function(){

    Achievement.samples($scope.resumeid).success(function(getData) {
                        $scope.samples = getData;
                        $scope.loading = false;
                       
                    });

};


	$scope.updateAchievement = function() {
      
      	$scope.loading = true;
        // use the function we created in our service
        Achievement.update($scope.achievement).success(function(data) {

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
                Achievement.get().success(function(getData) {
                        $scope.achievements = getData;
                        $scope.loading = false;
                       
                    });

               

            })
            .error(function(data) {
                console.log(data);
            });
    };


    $scope.submitAchievement = function() {
      	 
      	$scope.loading = true;
        
        

            Achievement.save($scope.achievementData).success(function(data){



                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    $scope.objectiveData = {};

                    Achievement.show($scope.resume.id).success(function(data){
                        $scope.achievementsData = data;
                        
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


    $scope.deleteAchievement = function(id) {
        $scope.loading = true; 

        $scope.id = id;
        
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'deleteConfirm.html',
            scope: $scope
        });

       
    };



     $scope.deleteConfirmOk = function(id) {
        

        // use the function we created in our service
        Achievement.destroy(id).success(function(data) {

                if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    
                }
                // if successful, we'll need to refresh the comment list
                Achievement.show($scope.resume.id).success(function(data){
                        $scope.achievementsData = data;
                        
                        $scope.loading = false;
                        $scope.modalInstance.dismiss();
                        
                    });

            });
    };
	



	$scope.editAchievement = function (achievement) {
		$scope.loading = true; 

    	
		$scope.achievement = achievement;

    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'editAchievement.html',
    		scope: $scope,
            size: 'lg'
		});

		
	};






	$scope.createAchievement = function () {
		$scope.loading = true; 

        Achievement.samples($scope.resumeid).success(function(getData) {
                        $scope.samples = getData;
                        $scope.loading = false;
                       
                    });
		
    	$scope.modalInstance = $uibModal.open({
    		templateUrl: 'createAchievement.html',
    		scope: $scope,
            size: 'lg'
		});

		
	};


	$scope.cancel = function () {
		$scope.loading = false;
    	$scope.modalInstance.dismiss();
  	};

})