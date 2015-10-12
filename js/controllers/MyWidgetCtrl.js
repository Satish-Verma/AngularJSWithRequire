define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MyWidgetCtrl', ['$scope','$http', 'fileUpload', function ($scope, $http, fileUpload) {
    	$scope.items ={};
    	$scope.employees ={};
    	$scope.loadEmpData = function(){
    		$http.get('./././data/employee_data.json').success(function(response) 
    				{
    					$scope.employees = response;
    				});
    		}
    	
    	$scope.uploadFileUsingJS = function(){
    		var file = document.getElementById('file').files[0];
    		console.log("file uploaded");
    		console.log(file);
    		var r = new FileReader();
    		r.onloadend = function(e){
    			var data = e.target.result;
    			console.log("from_Javascript*** "+ data);
    		};
    		r.readAsBinaryString(file);
    	}
    	
    	
    	$scope.uploadFileUsingAngularJS = function(){
    		 var file = $scope.myFile;
    	        console.log('file is ' );
    	        console.dir(file);
    	        var uploadUrl = "/fileUpload";
    	        fileUpload.uploadFileToUrl(file, uploadUrl);
    	        
    	        var r = new FileReader();
        		r.onloadend = function(e){
        			var data = e.target.result;
        			console.log("from_AngularJS*** "+ data);
        		};
        		r.readAsBinaryString(file);
    	}
    }]);
});

