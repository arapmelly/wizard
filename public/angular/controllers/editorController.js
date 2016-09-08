angular.module('editorCtrl', [])

.controller('editorController', function($scope, $http, $uibModal, $routeParams, $window, Resume, Template, Level, Career, Objective, Experience, Skill, Achievement, Award, Publication, Reference, Education, Certification){

	

	$scope.resume = {};
	$scope.loading = true;
	$scope.animationsEnabled = true;
	$scope.successTextAlert = "Some content";
	$scope.showSuccessAlert = false;

	$scope.errorTextAlert = {};
	$scope.showErrorAlert = false;

    $scope.objectiveData = {};


                    Level.get().success(function(data){
                        $scope.levels    = data;
                        $scope.loading = false;
                        
                    });


                    Career.get().success(function(data){
                        $scope.careers    = data;
                        $scope.loading = false;
                        
                    });

                    Template.get().success(function(data){
                        $scope.templates    = data;
                        $scope.loading = false;
                        
                    });


	
                    Resume.fetch($routeParams.resumeId).success(function(data){
                        $scope.resume = data;
                        $scope.loading = false;
                        
                    });

     $scope.viewmode = 'views/partials/resumedata/personal.html';
   
Template.get().success(function(data){
                        $scope.templates = data;
                        
                    
                        
                    });


$scope.objective = function(){
    $scope.loading = true;
    
    Objective.show($scope.resume.id).success(function(data){
                        $scope.objectivesData = data;
                        
                        $scope.loading = false;
                        
                    });

    $scope.viewmode = 'views/partials/resumedata/object.html';
};



$scope.award = function(){
    $scope.loading = true;
    
    Award.show($scope.resume.id).success(function(data){
                        $scope.awardsData = data;
                        
                        $scope.loading = false;
                        
                    });

    $scope.viewmode = 'views/partials/resumedata/award.html';
};


$scope.achievement = function(){
    $scope.loading = true;
    
    Achievement.show($scope.resume.id).success(function(data){
                        $scope.achievementsData = data;
                        
                        $scope.loading = false;
                        
                    });

    $scope.viewmode = 'views/partials/resumedata/achievement.html';
};


$scope.publication = function(){
    $scope.loading = true;
    
    Publication.show($scope.resume.id).success(function(data){
                        $scope.publicationsData = data;
                        
                        $scope.loading = false;
                        
                    });

    $scope.viewmode = 'views/partials/resumedata/publication.html';
};

$scope.certification = function(){
    $scope.loading = true;
    
    Certification.show($scope.resume.id).success(function(data){
                        $scope.certificationsData = data;
                        
                        $scope.loading = false;
                        
                    });

    $scope.viewmode = 'views/partials/resumedata/certification.html';
};

$scope.skill = function(){
    $scope.loading = true;
    
    Skill.show($scope.resume.id).success(function(data){
                        $scope.skillsData = data;
                        
                        $scope.loading = false;
                        
                    });

    $scope.viewmode = 'views/partials/resumedata/skill.html';
};


$scope.education = function(){
    $scope.loading = true;
    
    Education.show($scope.resume.id).success(function(data){
                        $scope.educationsData = data;
                        
                        $scope.loading = false;
                        
                    });

    $scope.viewmode = 'views/partials/resumedata/education.html';
};



$scope.reference = function(){
    $scope.loading = true;
    
    Reference.show($scope.resume.id).success(function(data){
                        $scope.referencesData = data;
                        
                        $scope.loading = false;
                        
                    });

    $scope.viewmode = 'views/partials/resumedata/reference.html';
};


$scope.experience = function(){
    $scope.loading = true;
    
    Experience.show($scope.resume.id).success(function(data){
                        $scope.experiencesData = data;
                        
                        $scope.loading = false;
                        
                    });

    $scope.viewmode = 'views/partials/resumedata/experience.html';
};


// personal info functions

$scope.personal = function(){
    $scope.loading = true;
    $scope.viewmode = 'views/partials/resumedata/personal.html';
};

$scope.updatePersonal = function () {
        $scope.loading = true; 

        
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'updatePersonal.html',
            scope: $scope,
            size: 'lg'
        });

        
    };

    $scope.submitPersonal = function() {
         
        $scope.loading = true;
      
        // use the function we created in our service
        Resume.update($scope.resume).success(function(data) {
                    
               
               if(data.success == true){
                    $scope.successTextAlert = data.notice;
                    $scope.showSuccessAlert = true;
                    $scope.modalInstance.dismiss();

                     Resume.fetch($routeParams.resumeId).success(function(data){
                        $scope.resume = data;
                        $scope.loading = false;
                        
                    });

                }

                if(data.success == false){
                    $scope.errorTextAlert = data.error;
                    $scope.showErrorAlert = true;
                }

               

            })
            .error(function(data) {
                console.log(data);
            });
    };










// miscelleneous
$scope.switchBool = function(value) {
   $scope[value] = !$scope[value];
};



$scope.cancel = function () {
        $scope.loading = false;
        $scope.modalInstance.dismiss();
    };


$scope.preview = function (theme) {
        $scope.loading = true; 

    Resume.show($scope.resume.id).success(function(data){
                        $scope.resumeData = data;
    });

    Award.show($scope.resume.id).success(function(data){
                        $scope.awardsData = data;
    });

    Certification.show($scope.resume.id).success(function(data){
                        $scope.certificationsData = data;
    });

    Skill.show($scope.resume.id).success(function(data){
                        $scope.skillsData = data;
    });

    Publication.show($scope.resume.id).success(function(data){
                        $scope.publicationsData = data;
    });

    Objective.show($scope.resume.id).success(function(data){
                        $scope.objectivesData = data;
    });

    Experience.show($scope.resume.id).success(function(data){
                        $scope.experiencesData = data;
    });

    Education.show($scope.resume.id).success(function(data){
                        $scope.educationsData = data;
    });
    
    Achievement.show($scope.resume.id).success(function(data){
                        $scope.achievementsData = data;
    });

    Reference.show($scope.resume.id).success(function(data){
                        $scope.referencesData = data;
    });

    $scope.thememode = 'views/themes/'+theme+'.html';

        $scope.modalInstance = $uibModal.open({
            templateUrl: 'preview.html',
            scope: $scope,
            size: 'lg'
        });

        
    };




$scope.download = function (id) {
        
        

        $window.open('resumes/download/'+id, '_self');
        $scope.modalInstance.dismiss();
    };

 // ######################################################## //


$scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };


    $scope.dateOptions = {
    dateDisabled: disabled,
    datepickerMode: 'month',
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };



function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }

	

})