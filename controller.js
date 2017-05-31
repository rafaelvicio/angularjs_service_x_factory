(function() {
    'use strict';
 
    angular
        .module('meuApp')
        .controller('MeuController', MeuController);
 
    MeuController.$inject = ['MeuService', 'minhaFactory']; // Injetamos o service
 
    /* @ngInject */
    //Injetamos o service
    function MeuController(MeuServicem, minhaFactory) {
        var vm = this;
 
        MeuService.fazerAlgumaCoisa(); // Vai executar o console.log('Fiz Alguma coisa!') - Service
        minhaFactory.fazerAlgumaCoisa() // Vai executar o console.log('Fiz alguma coisa') - Factory
        
    }
})();