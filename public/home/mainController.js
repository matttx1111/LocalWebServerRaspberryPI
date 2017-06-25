hostApp.controller('mainController', function ($scope,$http,$q) {
    $scope.message = 'Welcome to our home web server';

    this.GetNextScheduledBusByNr = function(number) {
        var deferred = $q.defer();


        $http({
            url: '/api/getNextScheduledBus',
            method: "GET",
            params: { BusNr: number }
        }).success(function(data){
            deferred.resolve(data.message);
        });

        return deferred.promise;
    }    

 
    
   this.GetNextScheduledBusByNr(14).then(function(data) {
        $scope.bus14Departure = data;
   })

   this.GetNextScheduledBusByNr(15).then(function(data) {
        $scope.bus15Departure = data;
   })

});