'use strict';

export default function routes($routeProvider) {
  'ngInject';

  $routeProvider.when('/joypad', {
    template: '<joypad></joypad>',
    // template: require('./joypad.html'),
    // controller: 'JoypadController',
    // controllerAs: 'vm'
  })
}
