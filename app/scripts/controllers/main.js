'use strict';

angular.module('ngDay2App')
  .controller('BlogCtrl', function ($scope, $location, BlogSvc) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    

    $scope.createPost = function() {
    	$location.path('/new');
    };
    $scope.newPost = function(post) {
    	BlogSvc.create(post)
    	$location.path('/blog');
    };
    $scope.posts = BlogSvc.query();
  });
