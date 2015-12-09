angular.module('StarterApp')
.controller('CursoController',function($scope,$window,CursoService,$mdDialog,$mdMedia,localStorageService,$rootScope){
    var get = CursoService.getAll();
    
    $scope.colegio = localStorageService.get("usuarioLogueado");
    
    $scope.curso = {};
    $scope.listaCursos = [];
    $scope.curso = {
        id: null,
        grado: null,
        salon: null,
        colegio: $scope.colegio
    };
    $scope.selected = [];
    
    get.then(function(respuesta){
        angular.forEach(respuesta.data,function(value,key){
            if(value.colegio === $scope.colegio.codigo){
                $scope.listaCursos.push(value);
            }
        });

        },function(error){
            console.log(error);
    }); 
    
    
    $scope.ShowAgregar = function(ev) {
        $mdDialog.show({
            controller: 'DialogCursoController',
            templateUrl: 'views/dialog-curso.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $mdMedia('sm') && $scope.customFullscreen
        })
    };
    
    $scope.showEliminar = function(ev,id) {
        $rootScope.cod = id;
        $mdDialog.show({
            controller: 'DialogCursoController',
            templateUrl: 'views/dialog-eliminar-curso.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $mdMedia('sm') && $scope.customFullscreen

        }) 
    };
    
    $scope.showModificar = function(ev,obj) {
        $rootScope.objeto = obj;
        $mdDialog.show({
            controller: 'DialogCursoController',
            templateUrl: 'views/dialog-modificar-curso.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $mdMedia('sm') && $scope.customFullscreen

        }) 
    }; 
});