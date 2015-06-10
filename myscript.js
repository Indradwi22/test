(function () {
    'use strict';

var app = angular.module("myapp", []);
var maincon = function ($scope, $http) {

    var usercomplete = function (response) {
        $scope.user = response.data;
    };

    var usererror = function (reason) {
        $scope.error = "Could not get data";
    };
    
    $http.get("https://api.github.com/users/robconery")
        .then(usercomplete, usererror);
    
};

app.controller("maincon", ["$scope", "$http", maincon]);
app.directive('contohDirective', function() {
                    return {
                        restrict : 'E',
                        template : "<h2>AngularJS : Belajar Directive</h2>",
                    };
});

app.directive('myDirective', function() {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      myUrl: '@',
      myLinkText: '@',
      myAltText:'@',
      myTitle:'@'
    },
    template: '<a href="{{myUrl}}" alt="{{myAltText}}" title="{{myTitle}}">{{myLinkText}}</a>'
  };
});
    
     angular.module("validapp", []).controller("FormCtrl", ["$scope",function($scope){
     this.submit = function(formData, validity){
        if(validity){
            alert("submitting: "+ JSON.stringify(formData));
        }
     }
     }]);
    
    
})();