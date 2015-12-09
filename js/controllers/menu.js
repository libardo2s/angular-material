angular.module('StarterApp')
.controller('AppCtrl',function($scope,$mdSidenav,$mdToast,$window){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav('left').toggle();
    };
    
    $scope.Siguiente = function(ventana){
        if(ventana === 'profesores')
            $window.location.href = "#/profesores";
        if(ventana === 'estudiante')
            $window.location.href = "#/estudiante";
        if(ventana === 'cursos')
            $window.location.href = "#/curso";
        if(ventana === 'puntaje')
            $window.location.href = "#/puntuacion";
    };
});