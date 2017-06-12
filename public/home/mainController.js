hostApp.controller('mainController', function ($scope,$http) {
    $scope.message = 'Welcome to our home web server';


    $http.get('/api/getNextScheduledBus')
        .success(function(data) {
            $scope.BusData = data;
        });



});