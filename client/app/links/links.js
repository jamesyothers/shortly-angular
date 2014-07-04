angular.module('shortly.links', [])

// pass in the Links controller to have post and get functions
.controller('LinksController', function ($scope, Links) {

  $scope.data = {};
  $scope.getLinks = function() {
    Links.getLinks()
      .then(function(links){
        $scope.data.links = links;
      })
      .catch(function(error) {
        console.error(error);
      });
  };
  $scope.getLinks();


});
