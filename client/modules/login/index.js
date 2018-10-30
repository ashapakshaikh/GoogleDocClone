angular.module('appLogin',['appLoginCtrl'])
.config(function($stateProvider) {
    $stateProvider

        .state('app.login', {
            url: "/login",
            controller: 'loginCtrl',
            templateUrl: "modules/login/template/login.html"
        })

});