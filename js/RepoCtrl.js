(function(){
	var gitApp = angular.module('gitApp');

	gitApp.controller('RepoCtrl', function($scope, github, $routeParams, $location) {
		$scope.user_name = $routeParams.name;
		$scope.id = $routeParams.id;
		$scope.repo_name = $routeParams.repo_name;
		$scope.login = $routeParams.login;

		// var onHelpSuccess = function(data) {
		// 	console.log(data);
		// 	$scope.helpers = data;
		// 	console.log($scope.helpers.avatar_url);
		// };
		var onSuccess = function(data) {
			$scope.repository = data;
			// github.getHelpers($scope.user_name, $scope.repo_name)
			// .then(onHelpSuccess, errorMsg);
		};

		var errorMsg = function(error) {
			$scope.error = error;
		};

		github.getUserRepo($scope.user_name, $scope.repo_name)
			.then(onSuccess, errorMsg);

		// var onSuccess = function(user_info) {

		// 	alert('hey');
		// };
		// var errorMsg = function(error) {
		// 	$scope.error = "Something bad happened...no data..."
		// };

		// getGitUser.getGitUser($scope.name).then(onSuccess, errorMsg);



		
	});

}());