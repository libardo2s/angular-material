app.controller('AppCtrl', ['$scope', '$mdSidenav','$mdToast','enviarMailPost', function($scope, $mdSidenav,$mdToast,enviarMailPost){
    $scope.mail = null;
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
    
    $scope.enviarMail = function($event) {
        if(!$scope.mail){
            $mdToast.show($mdToast.simple().content('Existen campos vacios'));
        }else{
            var enviando = enviarMailPost.post($scope.mail);
            enviando.then(
                function(resultado){$mdToast.show($mdToast.simple().content('Mensaje Enviado'));},
                function(error){$mdToast.show($mdToast.simple().content('Error enviando el Mensaje'));}
            );
        }
    };
}]);
