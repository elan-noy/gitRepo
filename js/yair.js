var app = angular.module('yairApp', ['ngRoute']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider',
function($routeProvider) {
	$routeProvider
	// Home
	.when("/", {
		templateUrl : "partials/home.html",
		controller : "PageCtrl"
	})
	// Pages
	.when("/about", {
		templateUrl : "partials/about.html",
		controller : "PageCtrl"
	}).when("/contact", {
		templateUrl : "partials/contact.html",
		controller : "PageCtrl"
	}).when("/home", {
		templateUrl : "partials/home.html",
		controller : "PageCtrl"
	}).when("/message", {
		templateUrl : "partials/message.html",
		controller : "PageCtrl"
	})
	// Blog
	.when("/blog", {
		templateUrl : "partials/blog.html",
		controller : "BlogCtrl"
	})
	// else 404
	.otherwise("/404", {
		templateUrl : "partials/404.html",
		controller : "PageCtrl"
	});
}]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function($scope, $http, $timeout, $location/* $scope, $location, $http */) {
	//console.log("Page Controller reporting for duty.");
	$scope.emailSent = false;
	// Activates the Carousel
	$('.carousel').carousel({
		interval : 5000
	});

	// Activates Tooltips for Social Links
	$('.tooltip-social').tooltip({
		selector : "a[data-toggle=tooltip]"
	});

	$timeout(function() {
		//$scope.openDialog();
	}, 6000);

	// function to submit the form after all validation has occurred
	$scope.submitForm = function(isValid) {
		// check to make sure the form is completely valid
		$scope.falseSubmit = false;
		if (isValid) {
			if (!angular.isDefined($scope.user.contact_message)) {
				$scope.user.contact_message = 'No Message Included';
			}
			$http.post("server.php", $scope.user).success(function(data, status, headers, config) {
				if (status == 200) {
					$scope.emailSent = true;
					//$scope.$apply();
				} else {
					$scope.emailError = true;
				}
			}).error(function(data, status, headers, config) {
				$scope.status = status;
			});

		} else {
			$scope.falseSubmit = true;
		}
	};
	(function init() {
		(function(i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] ||
			function() {
				(i[r].q = i[r].q || []).push(arguments);
			}, i[r].l = 1 * new Date();
			a = s.createElement(o), m = s.getElementsByTagName(o)[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m);
		})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

		ga('create', 'UA-99047122-1', 'auto');

	})();

	$scope.$watch('$location', function() {
		ga('set', 'page', $location.path());
		ga('send', 'pageview');
		console.log($location.path());
	});
});

//Finction to collapse the mobile nav after selection
$(document).ready(function() {
	$('body').on('click', '.navbar-collapse a', function(e) {
		if ($(window).width() < 800) {
			$('.navbar-collapse').collapse('toggle');
		}
	});
});
