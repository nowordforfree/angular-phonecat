import PhoneListCtrl from './PhoneListController';
import PhoneDetailCtrl from './PhoneDetailController';

var moduleName = 'phonecatApp.controllers';

angular.module(moduleName, [])
  .controller('PhoneListCtrl', PhoneListCtrl)
  .controller('PhoneDetailCtrl', PhoneDetailCtrl);

export default moduleName;