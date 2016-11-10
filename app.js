var app = angular.module('flapperNews', ['ui.router']);

// service (factory) for posts
app.factory('posts', [function(){
	// exposes object o (defined as posts) to any other Angular module that cares to inject it
	var o = {
		posts: []
	};
	return o;
}]);
app.controller('MainCtrl', [
	'$scope',
	// injects posts service into MainCtrl
	'posts',
	function($scope, posts){
		// Binds the $scope.posts variable to the posts array in service
		$scope.posts = posts.posts;
		// Create a $scope function that will add an object into the posts array		
		$scope.addPost = function(){
			// prevents a user from submitting a post with a blank title
			if(!$scope.title || $scope.title === '') { return; }
			// addPost function retrieves the title and link entered into the form, which is bound to the $scope variable title
			$scope.posts.push({
				title: $scope.title,
				link: $scope.link,
				upvotes: 0
			});
			// sets title and link to blank once it has been added to the posts array
			$scope.title = '';
			$scope.link = '';
		};
		// Defines the incrementUpvotes() function in controller
		$scope.incrementUpvotes = function(post) {
			post.upvotes += 1;
		};
		// defines a list of post titles
		$scope.posts = [
			{title: 'post 1', upvotes: 5},
			{title: 'post 2', upvotes: 2},
			{title: 'post 3', upvotes: 15},
			{title: 'post 4', upvotes: 9},
			{title: 'post 5', upvotes: 4}
		];
	}
]);
