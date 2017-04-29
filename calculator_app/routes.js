angular.module('routes', ['ui.router'])
	.config(function($urlRouterProvider, $stateProvider) 
{
		$stateProvider
            .state('calculator', {
                url: '/',
                templateUrl: '/Calculator/calculator.html',
                controller: 'cal'
            })
           .state('about', {
                url: '/about',
                templateUrl: '/About/about.html'
            })
            $urlRouterProvider.otherwise('/');

});        