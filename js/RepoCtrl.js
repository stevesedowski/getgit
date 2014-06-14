(function(){
	var gitApp = angular.module('gitApp');

	gitApp.controller('RepoCtrl', function($scope, github, $routeParams, $location) {
		$scope.user_name = $routeParams.name;
		$scope.id = $routeParams.id;
		$scope.repo_name = $routeParams.repo_name;
		alert($routeParams.name);
		// var onSuccess = function(user_info) {

		// 	alert('hey');
		// };
		// var errorMsg = function(error) {
		// 	$scope.error = "Something bad happened...no data..."
		// };

		// getGitUser.getGitUser($scope.name).then(onSuccess, errorMsg);



		
	});

}());