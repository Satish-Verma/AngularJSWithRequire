define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('loginController', ['$scope','$state',function ($scope, $state) {
    	$scope.items ={};
    	
    	$scope.login = function(){
    		if($scope.items.username==='satish' && $scope.items.password==="verma"){
    			$state.go('view1');
    		}
    		else if($scope.items.username==='satty' && $scope.items.password==="verma"){
    			$state.go('view2');
    		}
    		else
    			$state.go('widgetDemo');
    	}
    }]);
});
