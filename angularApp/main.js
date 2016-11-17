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
