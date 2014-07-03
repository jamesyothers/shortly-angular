angular.module('shortly.links', [])

// .controller('LinksController', function ($scope, Links) {
//   // Your code here
// });

.controller('LinksController', function ($scope, Links, LinksFactory) {
  // Your code here
  console.log('mockLinks: ', LinksFactory.getLinks());
  $scope.test = 'hey';
  $scope.getLinks = LinksFactory.getLinks;
  $scope.data = {links: ($scope.getLinks())};
  // console.log('$scope: ', $scope);
  // console.log('links: ', Links);
  // console.log('linksfactory: ', LinksFactory);

})

.factory('LinksFactory', function($http) {
  var getLinks = function() {
    $http({
      method: 'GET',
      url: '/api/links',
    })
    .then(function(response) {
      console.log('response: ', response);
      return response;
    });
  };

  return {
    getLinks: getLinks
  };

});
