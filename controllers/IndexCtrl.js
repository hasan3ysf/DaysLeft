// IndexCtrl
app.controller("IndexCtrl", [ "$scope", "LocalStorageFactory", function ($scope, db){

	$scope.dateToday = Date.parse( new Date(), "DD/MM/yyyy");
	$scope.Math = window.Math;
	$scope.events = db.readCollection("events");
	
}]);