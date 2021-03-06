angular.module('publicationService', [])
.factory('Publication', function($http, ENDPOINT_URI){

	var base_url = ENDPOINT_URI+'/publications';

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

        update : function(publication) {
            return $http({
                method: 'POST',
                url: base_url+'/update',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(publication)
            });
        },

        save : function(publicationData) {
            return $http({
                method: 'POST',
                url: base_url,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(publicationData)
            });
        }


	}

});