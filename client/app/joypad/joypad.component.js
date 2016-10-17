import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './joypad.routes';

export class JoypadController {
  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    var self =  this;
  

    // $scope.$on('$destroy', function() {
    //   socket.unsyncUpdates('thing');
    // });

    this.socket.socket.on('joypad',function(obj){
      console.log(obj);
    });

    document.addEventListener('click', function(e) {
      console.log('emitting');
      self.socket.socket.emit('joypad', {
        message : "ehy"
      });
      console.log('emitted');
    });

  }

  $onInit() {
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    
      var touch = e.touches[0];
      var obj = {
        x : touch.pageX,
        y : touch.pageY
      }
      
      this.socket.syncUpdates('joypad', obj);
    
    }, false);
  }

  // addThing() {
  //   if(this.newThing) {
  //     this.$http.post('/api/things', {
  //       name: this.newThing
  //     });
  //     this.newThing = '';
  //   }
  // }

  // deleteThing(thing) {
  //   this.$http.delete(`/api/things/${thing._id}`);
  // }
}

export default angular.module('conhouApp.joypad', [ngRoute])
  .config(routing)
  .component('joypad', {
    template: require('./joypad.html'),
    controller: JoypadController
  })
  .name;
