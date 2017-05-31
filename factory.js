(function() {
    'use strict';

    angular
        .module('meuApp')
        .factory('minhaFactory', minhaFactory);

    minhaFactory.$inject = ['$http'];

    /* @ngInject */
    function minhaFactory($http) {
        var service = {
            fazerAlgumaCoisa: fazerAlgumaCoisa
        };

        return service;

        function fazerAlgumaCoisa() {
          console.log('Fiz alguma coisa');
        }
    }
})();