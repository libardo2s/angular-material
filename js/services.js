app.service("enviarMailPost",function($http){
    var url = "http://127.0.0.1:8000/api/mail";
    this.post = function(mail){
        return $http.post(url+mail);
    }
});