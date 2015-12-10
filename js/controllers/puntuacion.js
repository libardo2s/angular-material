angular.module('StarterApp')
.controller('PuntuacionController',function($scope,$window,PuntajeService,EstudianteService,CursoService,$mdDialog,$mdMedia,$rootScope,localStorageService){
    
    if(localStorageService.get("logueado")){
        var colegio = localStorageService.get("usuarioLogueado");
        var getPuntuaciones = PuntajeService.getByCol(colegio.codigo);
        $scope.listaPuntuaciones = [];

        var estudiante = {
            documento: null,
            nombre: null,
            puntaje: null,
        };

        getPuntuaciones.then(function(respuesta){
            $scope.listaPuntuaciones = respuesta.data;
            }, function(error){
            }
        );
        
    }else{
        $window.location.href = "#/";
    }
});