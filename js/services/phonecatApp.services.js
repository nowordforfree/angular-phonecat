var moduleName = 'phonecatApp.services';

class PhonecatAppService {
  constructor($resource) {
    return $resource(
      'phones/:phoneId.json'
      , {}
      , { query: {
        method:'GET'
        , params: {phoneId:'phones'}
        , isArray: true
      } }
    );
  }
}

PhonecatAppService.$inject = ['$resource'];

angular.module(moduleName, ['ngResource'])
  .service('Phone', PhonecatAppService);

export default moduleName;