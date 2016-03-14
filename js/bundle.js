/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _phonecatApp = __webpack_require__(1);

	var _phonecatApp2 = _interopRequireDefault(_phonecatApp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	angular.bootstrap(document.body, [_phonecatApp2.default]);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _phonecatApp = __webpack_require__(2);

	var _phonecatApp2 = _interopRequireDefault(_phonecatApp);

	var _phonecatApp3 = __webpack_require__(5);

	var _phonecatApp4 = _interopRequireDefault(_phonecatApp3);

	var _phonecatApp5 = __webpack_require__(6);

	var _phonecatApp6 = _interopRequireDefault(_phonecatApp5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var moduleName = 'phonecatApp';

	function config($routeProvider) {
	  $routeProvider.when('/phones', {
	    templateUrl: 'partials/phone-list.html',
	    controller: 'PhoneListCtrl'
	  }).when('/phones/:phoneId', {
	    templateUrl: 'partials/phone-detail.html',
	    controller: 'PhoneDetailCtrl'
	  }).otherwise({
	    redirectTo: '/phones'
	  });
	}

	config.$inject = ['$routeProvider'];

	angular.module(moduleName, ['ngRoute', _phonecatApp2.default, _phonecatApp4.default, _phonecatApp6.default]).config(config).filter(_phonecatApp6.default);

	exports.default = moduleName;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _PhoneListController = __webpack_require__(3);

	var _PhoneListController2 = _interopRequireDefault(_PhoneListController);

	var _PhoneDetailController = __webpack_require__(4);

	var _PhoneDetailController2 = _interopRequireDefault(_PhoneDetailController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var moduleName = 'phonecatApp.controllers';

	angular.module(moduleName, []).controller('PhoneListCtrl', _PhoneListController2.default).controller('PhoneDetailCtrl', _PhoneDetailController2.default);

	exports.default = moduleName;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PhoneListController = function PhoneListController($scope, Phone) {
		_classCallCheck(this, PhoneListController);

		$scope.phones = Phone.query();
		$scope.orderProp = 'age';
	};

	PhoneListController.$inject = ['$scope', 'Phone'];

	exports.default = PhoneListController;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// const SCOPE = new WeakMap();

	var PhoneDetailController = function () {
		function PhoneDetailController($scope, $routeParams, Phone) {
			var _this = this;

			_classCallCheck(this, PhoneDetailController);

			this.$scope = $scope;
			this.$scope.setImage = this.setImage.bind(this);
			this.$scope.phone = Phone.get({
				phoneId: $routeParams.phoneId
			}, function (phone) {
				_this.$scope.mainImageUrl = phone.images[0];
			});
		}

		_createClass(PhoneDetailController, [{
			key: 'setImage',
			value: function setImage(imageUrl) {
				debugger;
				this.$scope.mainImageUrl = imageUrl;
			}
		}]);

		return PhoneDetailController;
	}();

	PhoneDetailController.$inject = ['$scope', '$routeParams', 'Phone'];

	exports.default = PhoneDetailController;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var moduleName = 'phonecatApp.services';

	var PhonecatAppService = function PhonecatAppService($resource) {
		_classCallCheck(this, PhonecatAppService);

		return $resource('phones/:phoneId.json', {}, { query: {
				method: 'GET',
				params: { phoneId: 'phones' },
				isArray: true
			} });
	};

	PhonecatAppService.$inject = ['$resource'];

	angular.module(moduleName, ['ngResource']).service('Phone', PhonecatAppService);

	exports.default = moduleName;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var moduleName = 'phonecatApp.filters';

	function PhonecatAppFilters() {
		return function (input) {
			return input ? '✓' : '✘';
		};
	}

	angular.module(moduleName, []).filter('checkmark', PhonecatAppFilters);

	exports.default = moduleName;

/***/ }
/******/ ]);