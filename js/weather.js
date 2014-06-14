var gitApp = angular.module('gitApp', []);

var onSuccess = function(resopnse){
  $scope.user = response.data;
};

gitApp.controller('MainCtrl', function($scope, $http) {
  $http.get('https://api.github.com/users/kevinsawicki')
    .then(function(response){
      $scope.user = response.data;
    });
});