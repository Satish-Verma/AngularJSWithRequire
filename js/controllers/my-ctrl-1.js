define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl1', ['$scope','shareData', function ($scope, shareData) {
    	
    	$scope.item={};
    	$scope.item.firstCtrlData = shareData;
    }]);
});
