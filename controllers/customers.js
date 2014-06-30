'use strict';

/**
 use to handle customer
*/

		var beginnerApp = angular.module('beginnerApp', ['ngRoute']);

		beginnerApp.config(function ($routeProvider){
		//	HateoasInterceptorProvider.transformAllResponses();

			$routeProvider
			.when('/customers',
				{
					controller: 'SimpleController',
					templateUrl: 'partials/customers.html'
				})
			.when('/addIndClient', 
				{	
					controller: 'SimpleController',
					templateUrl: 'partials/newIndClient.html'
				})
			.when('/addBizClient', 
				{	
					controller: 'SimpleController',
					templateUrl: 'partials/newBizClient.html'
				})
			.when('/customer/:id',
				{	
					controller: 'SimpleController',
					templateUrl: 'partials/editBizClient.html'
				}
				)
			.otherwise({ redirectTo: '/customers'});
		});

		beginnerApp.factory('simpleFactory', function(){
			var customers = [
				{ firstName: 'John', lastName: 'Smith', city: 'Phoneix',
				clientType: 'Individual'}, 
				{ firstName: 'John', lastName: 'Doe', city: 'New York',
				clientType: 'Individual'}, 
				{ firstName: 'Jane', lastName: 'Doe', city: 'San Fransico',
				clientType: 'Individual'},
				{ firstName: 'Walter', lastName: 'Sams', city: 'Altanta',
				clientType: 'Business' }
			];

			var factory = {};
			factory.getCustomers = function(){
				return customers;
			};

			return factory;
		});

		beginnerApp.controller('SimpleController', function ($scope, simpleFactory){
			$scope.customers= [];

			init();

			function init(){
				$scope.customers = simpleFactory.getCustomers();
			}

			$scope.addBizClient = function(){
				$scope.customers.push({firstName: $scope.newCustomer.firstName, 
					lastName: $scope.newCustomer.lastName,
					city: $scope.newCustomer.city, clientType: 'Business'});
			}

			$scope.addIndClient = function(){
				$scope.customers.push({firstName: $scope.newCustomer.firstName, 
					lastName: $scope.newCustomer.lastName, city: $scope.newCustomer.city, clientType: 'Individual'});
				redirectTo: '/customers'
			}

			$scope.removeCustomer = function(customer){
				var i = $scope.customers.indexOf(customer);
				$scope.customers.splice(i, 1);
			}
		});