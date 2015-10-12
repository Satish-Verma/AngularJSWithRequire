/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

/*define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'partials/partial1.html',
            controller: 'MyCtrl1'
        });

        $routeProvider.when('/view2', {
            templateUrl: 'partials/partial2.html',
            controller: 'MyCtrl2'
        });

        $routeProvider.otherwise({
            redirectTo: '/view1'
        });
    }]);
});*/
define(['./app'], function(app) {
    'use strict';
    return app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
        
    	$urlRouterProvider.otherwise(function($injector){
    		var $state = $injector.get('$state');
    		$state.go('login');
    	});
    	
    	$stateProvider.state('login',{
            url: '/login',
            templateUrl: 'views/login.html',
            controller:'loginController'
        }).state('view1',{
            url: '/view1',
            templateUrl: 'partials/partial1.html',
            controller:'MyCtrl1'
        }).state('widgetDemo',{
            url: '/widgetDemo',
            templateUrl: 'partials/allWidgets.html',
            controller:'MyWidgetCtrl'
        })
        .state('view2',{
            url: '/view2',
            templateUrl: 'partials/partial2.html',
            controller: 'MyCtrl2'
        });
    }]);
});