angular.
module('controllers').
controller('indexCtrl', function ($scope) {
    $scope.menu = 1;

    $scope.setMenu = function (newmenu) {
        $scope.menu = newmenu;
    };

    $scope.isSetMenu = function (menuNum) {
        return $scope.menu === menuNum;
    };
});