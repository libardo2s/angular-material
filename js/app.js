angular.module('StarterApp', ['ngMaterial','ngMdIcons','ngRoute','md.data.table','LocalStorageModule'])

.run(function($rootScope){
    $rootScope.logueado = false;
    $rootScope.usuarioLogueado = {};
    $rootScope.objeto = {};
})

.config(function($mdThemingProvider,$routeProvider,localStorageServiceProvider) {
    
    localStorageServiceProvider.setPrefix('ls');
    
    $mdThemingProvider.theme('default')
        .primaryPalette('green', {
            'default': '700', // by default use shade 400 from the pink palette for primary intentions
            'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        })
            // If you specify less than all of the keys, it will inherit from the
            // default shades
        .accentPalette('purple', {
            'default': '400' // use shade 200 for default, and keep all other shades the same
        });
        
    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'LoginController',
            controllerAs: 'login'
        })
        .when('/opciones', {
            templateUrl: 'views/opciones.html',
            controller: 'OpcionesController',
            controllerAs: 'opciones'
        })
        .when('/profesores',{
            templateUrl: 'views/profesor.html',
            controller: 'ProfesorController',
            controllerAs: 'profesor'
        })
        .when('/estudiante',{
            templateUrl: 'views/estudiante.html',
            controller: 'EstudianteController',
            controllerAs: 'estudiante'
        })
        .when('/puntuacion',{
            templateUrl: 'views/puntaje.html',
            controller: 'PuntuacionController',
            controllerAs: 'puntuacion'
        })
        .when('/curso',{
            templateUrl: 'views/curso.html',
            controller: 'CursoController',
            controllerAs: 'curso'
        })
        .otherwise({ redirectTo: '/'});
})

.filter('capitalize', function() {
    return function(input, all) {
        var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
        return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
})

;