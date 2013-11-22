// EditCtrl
app.controller("EditCtrl", [ "$scope", "$location", "$routeParams", "LocalStorageFactory", "$filter", function ($scope, $location, $routeParams, db, $filter){

    var item = db.readItem("events", $routeParams.id);

    // in order for input type="date" to work, date must be a STRING & ISO format
    // code below is not required any more as the conversion is done on addEvent in NewCtrl
    // item.dateAsString = $filter('date')(item.date, "yyyy-MM-dd");

    // create a copy for before save comparesment
    var original = item;

	// bind
	$scope.event = angular.copy(item);

	// check if no changes
	$scope.isClean = function() {
		return angular.equals(original, $scope.event);
	}

	// remove
	$scope.removeEvent = function() {
		db.removeItem("events", $routeParams.id);
		$location.path('/');
	};

	// save after changes
	$scope.saveEvent = function() {

		db.updateItem("events", $scope.event);	
		$location.path('/');

	};

	// on input type="date" change - convert string date to internal format
	$scope.dateUpdate = function() {
		$scope.event.date = new Date($scope.event.dateAsString).getTime();
	};

}]);
