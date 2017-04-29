(function() {
    angular.module('projectHeader', [])
    .directive('projectHeader', function ()
    {
		

        return {
            templateUrl: 'Header/header.html',
            restrict: 'E',

        }

     });


  })();