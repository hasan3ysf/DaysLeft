// NewCtrl
app.controller("NewCtrl", [ "$scope", "$location", "LocalStorageFactory", function ($scope, $location, db){

	$scope.addEvent = function(){

		$scope.event.dateAsString = $scope.event.date
		$scope.event.date = Date.parse( $scope.event.date, "DD/MM/yyyy");

		db.addItem("events", $scope.event);
		$location.path('/list');

	}

}]);