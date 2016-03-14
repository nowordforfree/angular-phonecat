var moduleName = 'phonecatApp.filters';

function PhonecatAppFilters() {
	return (input) => {
		return input ? '\u2713' : '\u2718';
	}
}

angular.module(moduleName, [])
	.filter('checkmark', PhonecatAppFilters);

export default moduleName;
