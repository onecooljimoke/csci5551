(function (){
    angular.module('StarterApp', ['ngMaterial', 'ngRoute'])
        .controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
            $scope.toggleSidenav = function(menuId) {
                $mdSidenav(menuId).toggle();
            };

            $scope.navitems = [
                {
                    name: 'Literature Report',
                    link: '#/litreport',
                }
            ];

        }])
        .controller('hwController', [function(){
            var vm = this;
            vm.lit = {
                hw1: {
                    name: 'KLA: A New Algorithmic Paradigm for Parallel Graph Computations',
                    reviewLink: 'KLA review.pdf',
                    paperLink: 'KLA parallel graph computations.pdf'
                },
            };
        }])
        .config(function($routeProvider) {
            $routeProvider
                .when('/litreport', {
                    templateUrl: 'litreport.html',
                    controller: 'hwController',
                    controllerAs: 'hw',
                });
        });

})();
