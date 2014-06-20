//Edit Profile Controller
'use strict';

eventsApp.controller('editProfileController', 
	function editProfileController($scope, gravatarURLBuilder) { 
		$scope.user = {};
		$scope.getGravatarURL = function(email) {
          return gravatarURLBuilder.buildGravatarUrl(email);
       }
	}

);