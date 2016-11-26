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
            ele.keyup(function() {
                const val = /^[A-Z].*/;
                if(!val.test(ele.val()) && ele.val() !== "") {
                    alert("Need to use capitalize word");
                    ele.val("");
                }
            })
        }
    }
})

// .directive("myInput", () => {
//     return {
//         restrict: "E",
//         template: "<div><input></div>",
//         link: (scope, element, attr) => {

//         }
//     }
// })
