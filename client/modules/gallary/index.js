angular.module('appGallary',['appGallaryCtrl'])

.config(function($stateProvider) {
    $stateProvider

        .state('app.gallary', {
            url: "/gallary",
            controller: 'gallaryCtrl',
            templateUrl: "modules/gallary/template/gallary.html"
        })
});
