'use strict';
//Create a Controller
eventsApp.controller('eventController', 
	function eventController($scope) { 
		//Define the scope
		$scope.welcomeSnippet = "Welcome, next event : ";
		$scope.boolValue = false;
		$scope.titleStyle = "red";
		$scope.event = { 
			name: "Angular Learning", 
			date: "1/1/2013", 
		    time: "10:30 am",
			//Object within the scope
			location:  {
				address: "Google Headquarters", 
				city: "Mountain View", 
				state: "CA", 
				zip: 91882, 
				map: "http://onetoshare.com/6JGD" 

			},
			imageURL: "img/angular-logo.png", 
			//Array or objects within the scope
			session: [
				{ 
					name: "Session 1",
					creatorName: "Jesse Seaver", 
					duration: "1 Hour", 
					level: "Advanced", 
					abstract: "In this session you will learn the ins and outs of directives",
					upVoteCount:0
				},
				{
					name: "Session 2",
					creatorName: "Jesse Seaver", 
					duration: "1 Hour", 
					level: "Advanced", 
					abstract: "In this session you will learn the ins and outs of directives",
					upVoteCount:0
				},
				{
					name: "Session 3",
					creatorName: "Jesse Seaver", 
					duration: "1 Hour", 
					level: "Advanced", 
					abstract: "In this session you will learn the ins and outs of directives",
					upVoteCount:0
				}

			]
		}//$scope.event Close
	

		$scope.upVoteSession = function (session) { 

			session.upVoteCount++;

		}
		$scope.downVoteSession = function (session) { 

			session.upVoteCount--;

		}


	}//eventController Close	 

);