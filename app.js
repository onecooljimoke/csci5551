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
                },
                {
                  name: 'Project',
                  link: '#/project'
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
        .controller('presentationController', [function(){
            var vm = this;
            vm.slides = {
                research: {
                    name: 'Research Presentation',
                    slideLink: 'Jeff Flower Presentation.pptx',
                },
              implementation: {
                name: 'Implementation Presentation',
                slideLink: 'Jeff Flower Implementation.pptx'
              },
              project: {
                name: 'Project Files',
                slideLink: 'JeffFlowerGraphColoring.zip'
              }
            };
        }])
        .config(function($routeProvider) {
            $routeProvider
                .when('/litreport', {
                    templateUrl: 'litreport.html',
                    controller: 'hwController',
                    controllerAs: 'hw',
                })
                .when('/project',{
                  templateUrl: 'presentation.html',
                  controller: 'presentationController',
                  controllerAs: 'p',
                });
        });

})();
