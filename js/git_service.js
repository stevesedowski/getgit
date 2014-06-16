(function() {

var github = function($http) {

	var getGitUser = function(name) {
		/*What happens here is when the $http.get service is called, it's given a promise
		and when that promise  is fulfilled (.i.e. when the http calll iscomplete), the .then statement executes a function that returns
		a response that contains data that is then returnedl. It's important to note that
		when something is returned by .then, and this somethign can be a number or string or an object, it is wrapped 
		into another promise that delivers the value that represents the promise of http and the .then function that 
		digs out the data. */
		return  $http.get('https://api.github.com/users/' + name)
					.then(function(response){
						return response.data;
					});
	};

	var getGitRepository = function(user) {
		 return $http.get(user.repos_url)
		 			.then(function(response) {
		 				return response.data;
		 			});
	};

	var getUserRepo = function(user_name, repo_name) {
		var repo_info = {};
		var url = 'https://api.github.com/repos/' + user_name + '/' + repo_name;
		return $http.get(url).then(function(response) {
						repo_info = response.data;
						return $http.get(url + '/collaborators').then(function(response) {
							repo_info.collaborators = response.data;
							return repo_info;
						});
		});
	};

	// var getHelpers = function(user_name, repo_name) {
	// 	return $http.get('https://api.github.com/repos/' + user_name + '/' + repo_name + '/collaborators')
	// 				.then(function(response){
	// 					return response.data;
	// 				});
	// };

	return {
		getGitUser: getGitUser,
		getGitRepository: getGitRepository,
		getUserRepo: getUserRepo,
		// getHelpers: getHelpers
	};

};

	var module = angular.module('gitApp');
	module.factory('github', github);

}());