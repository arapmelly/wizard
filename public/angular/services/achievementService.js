angular.module('achievementService', [])
.factory('Achievement', function($http, ENDPOINT_URI){

	var base_url = ENDPOINT_URI+'/achievements';

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

        update : function(achievement) {
            return $http({
                method: 'POST',
                url: base_url+'/update',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(achievement)
            });
        },

        save : function(achievementData) {
            return $http({
                method: 'POST',
                url: base_url,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(achievementData)
            });
        }


	}

});