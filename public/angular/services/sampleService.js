angular.module('sampleService', [])
.factory('Sample', function($http, ENDPOINT_URI){

	var base_url = ENDPOINT_URI+'/samples';

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

        update : function(sample) {
            return $http({
                method: 'POST',
                url: base_url+'/update',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(sample)
            });
        },

        save : function(sampleData) {
            return $http({
                method: 'POST',
                url: base_url,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(sampleData)
            });
        }


	}

});