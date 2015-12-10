angular.module('StarterApp')
.controller('DialogEstudianteController',function($scope,localStorageService,CursoService,EstudianteService,$mdToast,$window,$rootScope){
    
    var getCursos = CursoService.getAll();
    
    var colegio = localStorageService.get("usuarioLogueado");
    
    $scope.listaCursos = [];
    
    $scope.estudiante = {
        tipo_documento: null,
        documento: null,
        primer_nombre: null,
        segundo_nombre: null,
        primer_apellido: null,
        segundo_apellido: null,
        sexo: null,
        fecha_nacimiento: null,
        correo: null,
        salon: null
    };
    
    $scope.id = $rootScope.id;
     
    if($rootScope.objeto != null){
        $scope.estudiante = $rootScope.objeto;
    }
    
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
         EstudianteService.guardar($scope.estudiante).then(
             function(respuesta){
                 $window.location.reload();
             },function(error){
                 $mdToast.show($mdToast.simple().content("Error en el servidor"));
            });
    }
    
    $scope.delete = function(){
        EstudianteService.eliminarId($scope.id.documento).then(
            function(respuesta){
                $window.location.reload();
            },function(error){
                $mdToast.show($mdToast.simple().content("Error en el servidor"));
            });
    }
    
    $scope.update = function(){
        EstudianteService.actualizarId($scope.estudiante.documento,$scope.estudiante).then(
            function(respuesta){
                $window.location.reload();
            },function(error){
                $mdToast.show($mdToast.simple().content("Error en el servidor"));
            });
    }
    
});