(function (){
    angular.module('StarterApp', ['ngMaterial', 'ngRoute'])
        .controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
            $scope.toggleSidenav = function(menuId) {
                $mdSidenav(menuId).toggle();
            };

            $scope.navitems = [
                {
                    name: 'hw1',
                    link: '#/hw1',
                }
            ];

        }])
        .controller('hwController', [function(){
            var vm = this;
            vm.hw = {
                hw1: {
                    name: 'hw1',
                },
            };
        }])
        .config(function($routeProvider) {
            $routeProvider
                .when('/hw1', {
                    templateUrl: 'hw.html',
                    controller: 'hwController',
                    controllerAs: 'hw',
                });
        });

})();
