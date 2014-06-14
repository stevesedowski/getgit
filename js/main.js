(function() {
	var gitApp = angular.module('gitApp');

	gitApp.controller('MainCtrl', function(
		$scope, $interval, $location) {

		var timeLeft = function() {
			$scope.countDown -= 1;
			if ($scope.countDown < 1) {
				$scope.search($scope.timesUp);
			}
		};
		// create this variable to stop the automatic search from occuring
		countInfo = null; 

		var startCountDown = function() {
			// $interval returns an object but will continue to execute if 
			// this object is passed to the "countInfo" local variable. 
			// "countInfo" will then have a value that is true once an interval is set.
			countInfo = $interval(timeLeft, 1000, $scope.countDown);
		};

		$scope.search = function(name) {
			if(countInfo) {
				$interval.cancel(countInfo);
				$scope.countDown = null;
				$scope.timerMsg = 'The search is on!';
			}
			$scope.name = '';
			 $location.path("user/" + name);

		};

		// $scope.sortBy = '-stargazers_count';
		$scope.countDown = 9;
		// $scope.searchMessage = 'Search results for ';
		startCountDown();
		$scope.timesUp = 'Angular';
		$scope.timerMsg = 'Time left before the search is on!';
	});
	
}());