class PhoneDetailController {
	constructor($scope, $routeParams, Phone) {
		this.$scope = $scope;
		this.$scope.setImage = this.setImage.bind(this);
		this.$scope.phone = Phone.get({
			phoneId: $routeParams.phoneId
		}, (phone) => {
      this.$scope.mainImageUrl = phone.images[0];
    });
	}
	setImage(imageUrl) {
		this.$scope.mainImageUrl = imageUrl;
	}
}

PhoneDetailController.$inject = ['$scope', '$routeParams', 'Phone'];

export default PhoneDetailController;