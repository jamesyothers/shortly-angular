angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(){
    $scope.loading = true;
    console.log($scope.link);
    Links.postLinks($scope.link).then(function() {
      $scope.loading = false;
    });
  };
});
