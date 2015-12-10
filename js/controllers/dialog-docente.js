angular.module('StarterApp')
.controller('DialogDocenteController',function($scope,$window,$rootScope,CursoService,localStorageService,DocenteService,$filter){        
    var getCursos = CursoService.getAll(); 
    var colegio = localStorageService.get("usuarioLogueado");
    $scope.listaCursos = [];
    
    $scope.docente = {
        tipo_documento: null,
        documento: null,
        primer_nombre: null,
        segundo_nombre: null,
        primer_apellido: null,
        segundo_apellido: null,
        sexo: null,
        usuario: null,
        fecha_nacimiento: null,
        correo: null,
        salon: []
    };
    
    $scope.id = $rootScope.objeto;
    
    $scope.docente = $rootScope.objeto;
    
    console.log($scope.docente);
    
    getCursos.then(function(respuesta){
        angular.forEach(respuesta.data,function(value,key){
            if(value.colegio === colegio.codigo){
                $scope.listaCursos.push(value);
            }
        });

        },function(error){
            $mdToast.show($mdToast.simple().content("Error en el servidor"));
    });
    
    $scope.add = function(){
         DocenteService.guardar($scope.docente).then(
             function(respuesta){
                 $window.location.reload();
             },function(error){
                 $mdToast.show($mdToast.simple().content("Error en el servidor"));
            }
         );
        
    }
    
    $scope.delete = function(){
        DocenteService.eliminarId($scope.id.documento).then(
            function(respuesta){
                $window.location.reload();
            },function(error){
                $mdToast.show($mdToast.simple().content("Error en el servidor"));
            }
        );
    }
    
    $scope.update = function(){
        DocenteService.actualizarId($scope.docente.documento,$scope.docente).then(
            function(respuesta){
                $window.location.reload();
            },function(error){
                $mdToast.show($mdToast.simple().content("Error en el servidor"));
            }
        );
    }
    
});