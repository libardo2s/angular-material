angular.module('StarterApp')
.controller('EstudianteController',function($scope,$window,EstudianteService,CursoService,$mdDialog,$mdMedia,$rootScope,localStorageService){
    var get = EstudianteService.getAll();
    var getCursos = CursoService.getAll();
    var listaCursos = [];
    var colegio = localStorageService.get("usuarioLogueado");
    
    $scope.listaProfesores = [];
    
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
    
    //$scope.selected = [];
    
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
       if(listaCursos.length > 0){
           angular.forEach(listaCursos,function(curso,indice){
               angular.forEach(respuesta.data,function(estudiante,index){
                   if(estudiante.salon === curso.id){
                       $scope.listaProfesores.push(estudiante);
                   }
               });
           });
       }
   },function(error){
       console.log(error);
   });
    
    $scope.ShowAgregar = function(ev) {
        $mdDialog.show({
            controller: 'DialogEstudianteController',
            templateUrl: 'views/dialog-estudiante.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $mdMedia('sm') && $scope.customFullscreen
        })
    };
    
    $scope.showEliminar = function(ev,id) {
        $rootScope.id = id;
        $mdDialog.show({
            controller: 'DialogEstudianteController',
            templateUrl: 'views/dialog-eliminar.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $mdMedia('sm') && $scope.customFullscreen

        }) 
    };
    
    $scope.showModificar = function(ev,obj) {
        $rootScope.objeto = obj;
        $mdDialog.show({
            controller: 'DialogEstudianteController',
            templateUrl: 'views/dialog-modificar-estudiante.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $mdMedia('sm') && $scope.customFullscreen

        }) 
    }; 
});