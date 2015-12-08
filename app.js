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
                  name: 'Team Assignments',
                  link: '#/teamassignments'
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
        .controller('teamCtrl', [function(){
          var vm = this;
          vm.hw = [
            {
              hwnum: "2",
              description: "Parallel Algorithm Impressions",
              by: "Grant Myers",
              reviewlink: "hw2-impressions.docx",
              paperlink: ""
            },
            {
              hwnum: "2",
              description: "Prefix Application - Quicksort",
              by: "Sushma Murthy",
              reviewlink: "parallel-quicksort.docx",
              paperlink: "https://www.cs.cmu.edu/~guyb/papers/Ble93.pdf"
            },
            {
              hwnum: "2",
              description: "Prefix Application - Bin Packing",
              by: "Jeff Flower",
              reviewlink: 'Bin Packing Summary.docx',
              paperlink: 'bin-packing.pdf'
            },
            {
              hwnum: "3",
              description: "Architecture Example - EMM",
              by: "Jeff Flower",
              reviewLink: 'em2-review.odt',
              paperLink: 'em2-detailed.pdf'
            },
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
                })
               .when('/teamassignments',{
                 templateUrl: 'teamassignments.html',
                 controller: 'teamCtrl',
                 controllerAs: 'team',
               });
        });

})();
