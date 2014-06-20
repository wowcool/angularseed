
//Create a Controller
//moduleName.controller('controllerName')
//$scope IS an angular service. 

eventsApp.controller('eventController', 
	function eventController($scope, eventData) { 
		'use strict';
		//Define the scope
		$scope.sortorder = 'name';
		$scope.welcomeSnippet = "Welcome, next event : ";
		$scope.boolValue = false;
		$scope.titleStyle = "red";
		$scope.toggleOnOff = true;
		$scope.event = eventData.getEvent()
			.$promise.then(
					function (event) { $scope.event = event; console.log(event);},
					function (event) { console.log(response);}
					);


		//For $http:
		// eventData.getEvent().then(
		// 	function(event){$scope.event = event;},
		// 	function (statusCode) {console.log("oops! I got a : " + statusCode);}
		// 	);
	

		$scope.upVoteSession = function (session) { 

			session.upVoteCount++;

		}
		$scope.downVoteSession = function (session) { 

			session.upVoteCount--;

		}


	}//eventController Close	 

);