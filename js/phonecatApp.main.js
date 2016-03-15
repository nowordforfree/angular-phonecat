import { default as phonecatControllers } from './controllers/phonecatApp.controllers';
import { default as phonecatServices } from './services/phonecatApp.services';
import { default as animations } from './animations/phonecatApp.animations';
import { default as filters } from './filters/phonecatApp.filters';

var moduleName = 'phonecatApp';

function config($routeProvider) {
  $routeProvider.
    when('/phones', {
      templateUrl: 'partials/phone-list.html'
      , controller: 'PhoneListCtrl'
    }).
    when('/phones/:phoneId', {
      templateUrl: 'partials/phone-detail.html'
      , controller: 'PhoneDetailCtrl'
    }).
    otherwise({
      redirectTo: '/phones'
    });
}

config.$inject = ['$routeProvider'];

angular
  .module(moduleName, [
    'ngRoute'
    , phonecatControllers
    , phonecatServices
    , animations
    , filters
  ])
  .config(config)
  .filter(filters);

export default moduleName;