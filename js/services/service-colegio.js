angular.module('StarterApp')
.service("ColegioService",function($http){
    //var urlPeticion = "https://appreinar.herokuapp.com/api/colegio/";
    var urlPeticion = "http://127.0.0.1:8000/api/colegio/";
    this.getAll = function(){
        return $http.get(urlPeticion);
    }
    
    this.getById = function(id){
        return $http.get(urlPeticion+id+"/");
    }
    
});