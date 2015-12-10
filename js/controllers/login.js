angular.module('StarterApp')
.controller('LoginController', function ($scope,$window,ColegioService,localStorageService,$mdToast) {
    
    var servicio = ColegioService.getAll();
    var listaColegios;
    
    localStorageService.set("logueado", false);
    
    $scope.User = {
        username: null,
        password: null
    };
    
    $scope.Colegio = {};
    
    $scope.Login= function($event){
        
        servicio.then(function(respuesta){
            listaColegios = respuesta.data;
            angular.forEach(listaColegios,function(value,key){
                if(value.usuario.username === $scope.User.username && value.usuario.password === $scope.User.password){
                    localStorageService.set("usuarioLogueado", value);
                    localStorageService.set("logueado", true);
                    $window.location.href = "#/opciones";
                }
            });
            if(!localStorageService.get("logueado"))
                $mdToast.show($mdToast.simple().content("No registrado"));
        },function(error){
            $mdToast.show($mdToast.simple().content("Error a conectarse al servidor"));
        });
    }
});
