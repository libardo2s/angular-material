var app = angular.module('StarterApp', ['ngMaterial','ngMdIcons']);

app.config( function($mdThemingProvider){
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('blue')
  });