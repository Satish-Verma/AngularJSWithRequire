define(['services/services'], function(services){
	services.service('dataSource',  [ "$http", "$q", "app.config", "$upload", function($http, $q, config, $upload)
	{
		function webRoot(url){
			return config.basePath+url;
		}
	                                  
	     return {
	    	 reject : function(errMsg){
	    		 return $q.reject(errMsg);
	    	 },
	    	 getItems: function(url, p){
	    		 return $http.get(webRoot(url), 
	    				 {
	    			 		params : p,
	    			 		headers: { "xxxxxxx" : "xxxxxxx"}
	    			 
	    				 });
	    	 },
	    	 postItem: function(url, p){
	    		 return $http.post(webRoot(url), 
	    				 {
	    			 		params : p,
	    			 		headers: { 'Content-Type' : "application/json"}
	    			 
	    				 });
	    	 },
	    	 addItem: function(url, item){
	    		 return $http({
	    			 url : webRoot(url),
	    			 method : 'post',
	    			 data : item,
	    			 headers: { "xxxxxxx" : "xxxxxxx"}
	    		 });
	    	 },
	    	 deleteItem: function(url, item){
	    		 return $http({
	    			 url : webRoot(url) + (item=undefined?'':"/"+item.id),
	    			 method : 'DELETE',
	    			 headers: { "xxxxxxx" : "xxxxxxx"}
	    		 });
	    	 },
	    	 //when item doesnot have 'id' field we can pass name, etc as id field.
	    	 deleteById: function(url, item){
	    		 return $http({
	    			 url : webRoot(url) + "/"+id,
	    			 method : 'DELETE',
	    			 headers: { "xxxxxxx" : "xxxxxxx"}
	    		 });
	    	 },
	    	 //delete selected Items
	    	 deleteChecked: function(url, items){
	    		 return $http( 
	    				 {
	    			 		url : webRoot(url),
	    			 		method : 'DELETE',
	    			 		data : items,
	    			 		headers: { 'Content-Type' : "application/json"}
	    			 
	    				 });
	    	 },
	    	 updateItem: function(url, item){
	    		 return $http( 
	    				 {
	    			 		url : webRoot(url),
	    			 		method : 'PUT',
	    			 		data : item,
	    			 		headers: { 'Content-Type' : "application/json"}
	    			 
	    				 });
	    	 },
	    	 //process checked
	    	 processChecked: function(url, items){
	    		 return $http( 
	    				 {
	    			 		url : webRoot(url),
	    			 		method : 'POST',
	    			 		data : items,
	    			 		headers: { 'Content-Type' : "application/json"}
	    			 
	    				 });
	    	 },
	    	 //file upload
	    	 uploadFileFD : function(url, formData){
	    	 return $http( 
    				 {
    			 		url : webRoot(url),
    			 		method : 'POST',
    			 		data : formData,
    			 		headers: { 'Content-Type' : undefined},
    				 	transformRequest : angular.identity
    				 });
    	 	},
    	 	//file Upload
    	 	uploadFile : function(url, file, p){
    	 		return $upload.upload({
    	 			url : webRoot(url),
			 		method : 'POST',
			 		file : file,
			 		fields : p
    	 		});
    	 	},
    	 	invokeOperation : function(url, params, item){
    	 		return $upload.upload({
    	 			url : webRoot(url),
			 		method : 'POST',
			 		params : params,
			 		data : item,
			 		headers: { "xxxxxxx" : "xxxxxxx"}
    	 		}); 
    	 	}
	     }                             
	                                  
	}]);
			
});
