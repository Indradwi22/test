var app = angular.module("myapp", []);
var maincon = function($scope, $http){

    var usercomplete = function(response){
        $scope.user = response.data;
    };

    var usererror = function(reason){
        $scope.error = "Could not get data";
    };
    
    $http.get("https://api.github.com/users/robconery")
        .then(usercomplete, usererror);
    
};

app.controller("maincon", ["$scope", "$http", maincon]);