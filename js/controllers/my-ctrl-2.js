define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl2', ['$scope', 'shareData', function ($scope, shareData) {
    	
    	$scope.item={};
    	$scope.item.secondCtrlData = shareData;
    }]);
});
