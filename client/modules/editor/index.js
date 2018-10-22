angular.module('appEditor',['appEditorCtrl'])
.config(function($stateProvider) {
    $stateProvider

        .state('app.editor', {
            url: "/editor",
            controller: 'editorCtrl',
            templateUrl: "modules/editor/template/editor.html"
        })

});