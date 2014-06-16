(function() {

	var gitApp = angular.module('gitApp', ['ngRoute']);

	// define routes here
	gitApp.config(function($routeProvider) {
		$routeProvider
			.when("/main", {
				templateUrl: "main.html",
				controller: "MainCtrl"
			})
			.when("/user/:name", {
				templateUrl: "user.html",
				controller: "UserCtrl"
			})
			.when("/repository_info/:name/:repo_name/:id/:login", {
				templateUrl: "repository_info.html",
				controller: "RepoCtrl"
			})
			.otherwise({redirectTo: "/main"});
	});

}());