//Edit Event Controller
'use strict';

eventsApp.controller('editEventController',
    function editEventController($scope, eventData) {
        
        $scope.event = {};

        $scope.saveEvent = function(event, newEventForm) {
           if (newEventForm.$valid) { 
                eventData.save(event)
                    .$promise.then( 
                        function(response) { console.log('success', response)}, 
                        function(response) { console.log('failure', response)}
                    );
        	}
        };

        $scope.cancelEdit = function() {
            window.location = "eventDetails.html";
        }
    }
);