angular.module('StarterApp')
.controller('DialogCursoController',function($scope,localStorageService,CursoService,$mdToast,$window,$rootScope){
    
    var colegio = localStorageService.get("usuarioLogueado");
    
    $scope.curso = {
        grado: null,
        salon: null,
        colegio: colegio.codigo
    }
    
    $scope.id = $rootScope.cod;
    $scope.objModificar = $rootScope.objeto;
    
    if($scope.objModificar != null){
        $scope.curso.grado = $scope.objModificar.grado;
        $scope.curso.salon = $scope.objModificar.salon;
        $scope.curso.colegio = colegio.codigo;
    }
    
    
    $scope.add = function(){
        CursoService.guardar($scope.curso).then(
            function(respuesta){
                $window.location.reload();
            },function(error){
                console.log(error);
            });
    }
    
    $scope.delete = function(){
        CursoService.eliminarId($scope.id.id).then(
            function(respuesta){
                $window.location.reload();
            },function(error){
                console.log(error);
            });
    }
    
    $scope.update = function(){
        CursoService.actualizarId($scope.objModificar.id,$scope.curso).then(
            function(respuesta){
                $window.location.reload();
            },function(error){
                console.log(error);
            });
    }
    
});