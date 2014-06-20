//Event Data Service 
//Note that service name does not use  a $ prefix, this is only for Angular provided services. 

eventsApp.factory('eventData', function($resource) { 
	var resource = $resource('data/:id', {id:'@id'});
	return { 
		getEvent: function () { 
			
			return resource.get({id:1});

		},
			save: function(event) { 
				event.id = 1;
				return resource.save(event)
			}
			
		

		//To use resource to just grab some data. 
			//Resource params : URL, Default Values. Get, and we supply the ID here. 
			//return $resource('data/:id', {id:'@id'}).get({id:1});



		//with $http: 
		// getEvent: function(successcb) { 
		// 	var deffered = $q.defer();

		// 	$http({
		// 		method:'GET', 
		// 		url: 'data/1'
		// 	}).
		// 	success(function (data, status, headers, config){
		// 		deffered.resolve(data);
		// 	}).
		// 	error (function (data, status, headers, config){
		// 		deffered.reject(status);
		// 	});

		// 	return deffered.promise;
		// }//event close
	};//return close


}); //Factory close