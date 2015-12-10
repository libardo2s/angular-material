angular.module('StarterApp')
.controller('ProfesorController',function($scope,$window,DocenteService,CursoService,$mdDialog,$mdMedia,$rootScope,localStorageService){
    
    if(localStorageService.get("logueado")){
        
        var get = DocenteService.getAll();
        var getCursos = CursoService.getAll();
        var listaCursos = [];
        
        var colegio = localStorageService.get("usuarioLogueado");
    
        $scope.listaProfesores = {};
        $scope.docente = {
            tipo_documento: null,
            documento: null,
            primer_nombre: null,
            segundo_nombre: null,
            primer_apellido: null,
            segundo_apellido: null,
            sexo:null,
            fecha_nacimiento: null
        };
        
        getCursos.then(function(respuesta){
            angular.forEach(respuesta.data,function(value,key){
                if(value.colegio === colegio.codigo){
                    listaCursos.push(value);
                }
            });

            },function(error){
                console.log(error);
        }); 
    
        get.then(function(respuesta){
            $scope.listaProfesores = respuesta.data;
        },function(error){
            console.log(error);
        });
        
        $scope.ShowAgregar = function(ev) {
        $mdDialog.show({
            controller: 'DialogDocenteController',
            templateUrl: 'views/dialog-docente.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $mdMedia('sm') && $scope.customFullscreen
        })
    };
    
    $scope.showEliminar = function(ev,obj) {
        $rootScope.objeto = obj;
        $mdDialog.show({
            controller: 'DialogDocenteController',
            templateUrl: 'views/dialog-eliminar-docente.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $mdMedia('sm') && $scope.customFullscreen

        }) 
    };
    
    $scope.showModificar = function(ev,obj) {
        $rootScope.objeto = obj;
        $mdDialog.show({
            controller: 'DialogDocenteController',
            templateUrl: 'views/dialog-modificar-docente.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $mdMedia('sm') && $scope.customFullscreen

        }) 
    };
        
    }else{
        $window.location.href = "#/";
    }
});