angular.module('StarterApp')
.service("EstudianteService",function($http){
    //var urlPeticion = "https://appreinar.herokuapp.com/api/docente/";
    var urlPeticion = "http://127.0.0.1:8000/api/estudiante/";
    
    this.getAll = function(){
        return $http.get(urlPeticion);
    }
    
    this.getById = function(id){
        return $http.get(urlPeticion+id+"/");
    }
    
    this.guardar = function(objeto){
        return $http.post(urlPeticion,objeto);
    }
    
    this.eliminarId = function(id){
        return $http.delete(urlPeticion+id+"/");
    }
    
    this.actualizarId = function(id,objeto){
        return $http.put(urlPeticion+id+"/",objeto);
    }
});