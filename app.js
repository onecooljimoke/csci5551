(function (){
    angular.module('StarterApp', ['ngMaterial', 'ngRoute'])
        .controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
            $scope.toggleSidenav = function(menuId) {
                $mdSidenav(menuId).toggle();
            };

            $scope.navitems = [
                {
                    name: 'Homework',
                    link: '#/homework',
                },
                {
                  name: 'Project',
                  link: '#/project'
                }
            ];

        }])
        .controller('hwController', [function(){
            var vm = this;
            vm.hw = [
              {
                hw: 'HW1',
                name: 'KLA: A New Algorithmic Paradigm for Parallel Graph Computations',
                reviewLink: 'KLA review.pdf',
                paperLink: 'KLA parallel graph computations.pdf'
              },
              {
                hw: 'HW2',
                name: 'Parallel Prefix Applications: Bin Packing',
                reviewLink: 'Bin Packing Summary.docx',
                paperLink: 'bin-packing.pdf'
              }
            ];
        }])
        .controller('presentationController', [function(){
            var vm = this;
            vm.slides = [
                {
                    name: 'Research Presentation',
                    slideLink: 'Jeff Flower Presentation.pptx',
                },
                {
                name: 'Implementation Presentation',
                slideLink: 'Jeff Flower Implementation.pptx'
                },
              {
                name: 'Project Files',
                slideLink: 'JeffFlowerGraphColoring.zip'
              }
            ];
        }])
        .config(function($routeProvider) {
            $routeProvider
                .when('/homework', {
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
