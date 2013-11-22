// DB factory
app.factory("DbFactory", [ "LocalStorageFactory", function(LocalStorageFactory) {

	// deff
	var obj = {};

	// all
	obj.events = [
		{ "name": "Event name 1", "date": "29/12/2013"},
		{ "name": "Event name 2", "date": "12/03/2014"},
		{ "name": "Event name 3", "date": "03/05/20135"},
	];

	// add single

	// remove single

	// update single

	return obj;

}]);