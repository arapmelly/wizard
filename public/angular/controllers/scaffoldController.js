angular.module('scaffoldCtrl', [])
.controller('scaffoldController', function($scope, Scaffold){

	$scope.scaffold = {};
	$scope.scaffold.inputs =[];

	$scope.message = 'this is the scaffolding page';

    $scope.loading = false;

	$scope.scaff = function(){
        $scope.loading = true;
		Scaffold.scaffold($scope.scaffold).success(function(data){

			$scope.message = 'Model has been successfully scafolded';
			$scope.scaffold = {};
            $scope.loading = false;

		});

	};


	$scope.addInput = function() {


           $scope.scaffold.inputs.push(
            	{ 
            		title:$scope.scaffold.title,
            		type:$scope.scaffold.type,
            		field:$scope.scaffold.field,
            		
            		
            	});

           

            console.log($scope.scaffold.inputs);
    };


     $scope.removeInput = function(input) {
            var index = $scope.scaffold.inputs.indexOf(input);
           
            $scope.scaffold.inputs.splice(index, 1);
            

            
        };


})