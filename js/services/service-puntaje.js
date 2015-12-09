angular.module('StarterApp')
.service("PuntajeService",function($http){
    //var urlPeticion = "https://appreinar.herokuapp.com/api/docente/";
    var urlPeticion = "http://127.0.0.1:8000/api/puntuacion/";
    
    this.getAll = function(){
        return $http.get(urlPeticion);
    }
});