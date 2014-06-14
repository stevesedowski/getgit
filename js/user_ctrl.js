(function() {
	var gitApp = angular.module('gitApp');

	gitApp.controller('UserCtrl', function($scope, github, $routeParams, $location) {

		var onSuccess = function(data){
		  $scope.user = data;

		  github.getGitRepository($scope.user).then(onRepos, errorMsg);
		  $scope.error = '';
		};

		var onRepos = function(data) {
			$scope.repos = data;
			console.log($location.path());
			//once information is retrieved, screen automatically scrolls to 
			// the start of the returned information. The "search-display" is
			// an id that is located in the div tag above where the informtion
			// starts to pour in.
			// $location.hash("search-display");
			// $anchorScroll();
		};

		var errorMsg = function(error) {
			$scope.error = "Something bad happened...no data..."
		};

		var timeLeft = function() {
			$scope.countDown -= 1;
			if ($scope.countDown < 1) {
				$scope.search($scope.timesUp);
			}
		};
		// create this variable to stop the automatic search from occuring
		countInfo = null; 


		$scope.sortBy = '-stargazers_count';
		$scope.searchMessage = 'Search results for ';
		$scope.timesUp = 'Angular';
		$scope.name = $routeParams.name;
		github.getGitUser($scope.name).then(onSuccess, errorMsg);
		$scope.timerMsg = 'Time left before the search is on!';

	});
	
}());