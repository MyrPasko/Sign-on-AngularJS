;(function () {
    'use strict';

    angular
        .module("app", [
            'ui.router',
            'ngMaterial',
            'ngMessages',
            'ngAnimate',
            'base64'
        ])

        .run(block);

    function block() {
        console.log('App is running.');
    }

})();