angular.module('levelService', [])
.factory('Level', function($http, ENDPOINT_URI){

	var base_url = ENDPOINT_URI+'/levels';

	return {

		
		get : function(){
			return $http.get(base_url);
		},

		
		show : function(id) {
            return $http.get(base_url+'/show/' + id);
        },
    
        destroy : function(id) {
            return $http.get(base_url+'/delete/' + id);
        },

        update : function(level) {
            return $http({
                method: 'POST',
                url: base_url+'/update',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(level)
            });
        },

        save : function(levelData) {
            return $http({
                method: 'POST',
                url: base_url,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(levelData)
            });
        }


	}

});