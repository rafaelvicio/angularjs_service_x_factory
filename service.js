(function() {
 'use strict';
 
angular
       .module('meuApp') // Define a qual módulo seu .service pertence
       .service('MeuService', MeuService); //Define o nome a função do seu .service
 
       MeuService.$inject = ['$http']; //Lista de dependências
 
       function MeuService($http) {
 
         var vm = this;
 
         //
         vm.fazerAlgumaCoisa = fazerAlgumaCoisa;
 
         //Implementação das funções
         function fazerAlgumaCoisa() {
           console.log('Fiz alguma coisa');
         }
           
       }
})();