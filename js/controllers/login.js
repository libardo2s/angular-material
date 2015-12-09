angular.module('StarterApp')
.controller('LoginController', function ($scope,$window,ColegioService,localStorageService) {
    
    var servicio = ColegioService.getAll();
    var listaColegios;
    
    $scope.User = {
        username: null,
        password: null
    };
    
    $scope.Colegio = {};
    
    $scope.Login= function(){
        servicio.then(function(respuesta){
            listaColegios = respuesta.data;
            angular.forEach(listaColegios,function(value,key){
                if(value.usuario.username === $scope.User.username && value.usuario.password === $scope.User.password){
                    localStorageService.set("usuarioLogueado", value);
                    localStorageService.set("logueado", false);
                    $window.location.href = "#/opciones";
                }
            });
        },function(error){
            console.log(error);
        });
    }
});
