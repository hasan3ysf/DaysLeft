// TODO: SocialMedia login
// TODO: MongoDB backup/sync
// TODO: LocalStorage cookie fallback
// TODO: Error msg if LocalStorage is not supported
// TODO: Async LocalStorage/Cookie save & read

var app = angular.module("app", ["ngRoute"]);

// CONFIG
app.config( function ($routeProvider) {

	$routeProvider
	.when("/", {
		controller: "IndexCtrl",
		templateUrl: "views/index.html"
	})
	.when("/new", {
		controller: "NewCtrl",
		templateUrl: "views/new.html"
	})
	.when("/edit/:id", {
		controller: "EditCtrl",
		templateUrl:"views/edit.html",
	})
	.otherwise({redirectTo:"/"});

});

// making links work under chrome extension
app.config( function ($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist (/^\s*(https?|ftp|mailto|file|tel|chrome-extension):/);
});







