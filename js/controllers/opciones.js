angular.module('StarterApp')
.controller('OpcionesController',function($scope,$window,localStorageService){
   if(!localStorageService.get("logueado"))
       $window.location.href = "#/";
});