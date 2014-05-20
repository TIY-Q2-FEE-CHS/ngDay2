'use strict';
angular.module('ngDay2App')
	.factory('BlogSvc', function($resource) {
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/ngBlog',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	});