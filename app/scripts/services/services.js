'use strict';
angular.module('ngDay2App')
	.factory('PostsSvc', function($resource) {
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/ngBlog',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('PostSvc', function($resource) {
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/ngBlog/:id',
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			}
			)
	});