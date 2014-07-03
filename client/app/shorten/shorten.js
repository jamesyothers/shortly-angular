angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(){
    $scope.loading = true;
    Links.postLinks($location).then(function() {
      $scope.loading = false;
    });
  };
});
