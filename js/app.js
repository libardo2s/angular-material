var app = angular.module('StarterApp', ['ngMaterial','ngMdIcons']);

app.controller('AppCtrl', ['$scope', '$mdSidenav','$mdToast', function($scope, $mdSidenav,$mdToast){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
    
    $scope.openToast = function($event) {
        console.log('Funciona ????');
        $mdToast.show($mdToast.simple().content('Hello!'));
    };
}]);