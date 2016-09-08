angular.module('resumeService', [])
.factory('Resume', function($http, ENDPOINT_URI){

	var base_url = ENDPOINT_URI+'/resumes';

	return {

		
		get : function(){
			return $http.get(base_url);
		},

		
		show : function(id) {
            return $http.get(base_url+'/show/' + id);
        },


        fetch : function(id) {
            return $http.get(base_url+'/fetch/' + id);
        },

        download : function(id) {
            return $http.get(base_url+'/download/' + id);
        },
    
        destroy : function(id) {
            return $http.get(base_url+'/delete/' + id);
        },

        update : function(resume) {
            return $http({
                method: 'POST',
                url: base_url+'/update',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(resume)
            });
        },

        save : function(resumeData) {
            return $http({
                method: 'POST',
                url: base_url,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(resumeData)
            });
        }


	}

});