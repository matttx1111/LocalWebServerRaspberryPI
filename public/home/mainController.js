hostApp.controller('mainController', function ($scope,$http) {
    $scope.message = 'Welcome to our home web server';

    this.GetNextScheduledBusByNr = function(number) {
        $http({
            url: '/api/getNextScheduledBus',
            method: "GET",
            params: { BusNr: number }
        }).success(function(data) {
            $scope.BusData = data;
        });
    }    

    this.GetNextScheduledBusByNr(14);
   



});