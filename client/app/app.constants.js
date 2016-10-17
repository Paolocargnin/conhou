'use strict';

import angular from 'angular';

export default angular.module('conhouApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
