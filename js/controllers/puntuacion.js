angular.module('StarterApp')
.controller('PuntuacionController',function($scope,$window,PuntajeService,EstudianteService,CursoService,$mdDialog,$mdMedia,$rootScope,localStorageService){
    
    var colegio = localStorageService.get("usuarioLogueado");
    
    var get = EstudianteService.getAll();
    var getCursos = CursoService.getAll();
    var getPuntuaciones = PuntajeService.getAll();
    var listaCursos = [];
    var listaProfesores = [];
    
    $scope.listaPuntuaciones = [];
    
    var estudiante = {
        documento: null,
        nombre: null,
        puntaje: null,
    };
       
    getPuntuaciones.then(function(respuesta){
        $scope.listaPuntuaciones = respuesta.data;
    }, function(error){
        
    });
});