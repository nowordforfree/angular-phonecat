class PhoneListController {
	constructor($scope, Phone) {
		$scope.phones = Phone.query();
		$scope.orderProp = 'age';
	}
}

PhoneListController.$inject = ['$scope', 'Phone'];

export default PhoneListController;