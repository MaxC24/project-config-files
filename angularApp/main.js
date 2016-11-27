angular.module('app', [])

.controller('myCtrl', ($scope) => {
    $scope.master = {};

    $scope.reset = () => {
        $scope.user = angular.copy($scope.master);
    }

    $scope.update = user => {
        $scope.master = angular.copy(user);
    }

    $scope.reset();
})

.directive("myInputField", () => {
    return {
        restrict: "A",
        link: function(scope, ele) {
            ele.keydown(function() {
                const val = /^[A-Z].*/;
                if(!val.test(ele.val()) && ele.val() !== "") {
                    //alert("Need to use capitalize word");
                    ele.val("");
                }
            })
        }
    }
})

.directive("myInput", () => {
    return {
        restrict: "E",
        template: "<input ng-model='inp'>",
        link: (scope, element, attr) => {
            const myInput = element.find('input');
            const val = /^[A-Z].*/;
            scope.inp = "";
            element.keydown(function(){
                if(!val.test(scope.inp) && scope.inp !== "") {
                   // alert("Need to use capitalize word");
                   myInput.addClass("redflag");
                   scope.$apply();
                } else {
                    myInput.removeClass("redflag");
                }
            })
        }
    }
})
