/**
 * Created by takeuchi on 2016/11/30.
 */

var MyController = function($scope){

    var today = new Date();
    $scope.year = today.getFullYear();
    $scope.month = today.getMonth() + 1;
    $scope.day = today.getDate();

    $scope.targetYear = $scope.year;
    $scope.targetMonth = $scope.month;

    $scope.calendarData = [];

    $scope.now = function(){
        $scope.targetYear = $scope.year;
        $scope.targetMonth = $scope.month;
        $scope.setCalendarData();
    };

    $scope.prev = function(){
        var tmpDate = new Date($scope.targetYear + "/" + $scope.targetMonth + "/1");
        tmpDate.setMonth(tmpDate.getMonth() - 1);
        $scope.targetYear = tmpDate.getFullYear();
        $scope.targetMonth = tmpDate.getMonth() + 1;
        $scope.setCalendarData();
    };

    $scope.next = function(){
        var tmpDate = new Date($scope.targetYear + "/" + $scope.targetMonth + "/1");
        tmpDate.setMonth(tmpDate.getMonth() + 1);
        $scope.targetYear = tmpDate.getFullYear();
        $scope.targetMonth = tmpDate.getMonth() + 1;
        $scope.setCalendarData();
    }

    $scope.setCalendarData = function(){

    }


};

var appModule = angular.module('calendarDemo', ['ui.bootstrap']);
appModule.controller('calendarCtrl', MyController);
