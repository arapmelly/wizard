angular.module('scaffoldService', [])
.factory('Scaffold', function($http, ENDPOINT_URI){

	var base_url = ENDPOINT_URI+'/scaffold';

	return {

		scaffold : function(scaffold) {
            return $http({
                method: 'POST',
                url: base_url,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(scaffold)
            });
        }
        

	}

})