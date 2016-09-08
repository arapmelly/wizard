angular.module('objectiveService', [])
.factory('Objective', function($http, ENDPOINT_URI){

	var base_url = ENDPOINT_URI+'/objectives';

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

        update : function(objective) {
            return $http({
                method: 'POST',
                url: base_url+'/update',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(objective)
            });
        },

        save : function(objectiveData) {
            return $http({
                method: 'POST',
                url: base_url,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(objectiveData)
            });
        }


	}

});