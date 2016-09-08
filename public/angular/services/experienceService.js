angular.module('experienceService', [])
.factory('Experience', function($http, ENDPOINT_URI){

	var base_url = ENDPOINT_URI+'/experiences';

	return {

		
		get : function(){
			return $http.get(base_url);
		},

		
		show : function(id) {
            return $http.get(base_url+'/show/' + id);
        },

        samples : function(id) {
            return $http.get(base_url+'/samples/' + id);
        },
    
        destroy : function(id) {
            return $http.get(base_url+'/delete/' + id);
        },

        update : function(experience) {
            return $http({
                method: 'POST',
                url: base_url+'/update',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(experience)
            });
        },

        save : function(experienceData) {
            return $http({
                method: 'POST',
                url: base_url,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(experienceData)
            });
        }


	}

});