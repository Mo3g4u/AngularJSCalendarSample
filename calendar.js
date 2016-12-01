/**
 * Created by takeuchi on 2016/12/01.
 */

var MyController = function($scope, $http){

    var $uri = './backendPHP/index.php';

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
    };

    $scope.setCalendarData = function(){
        $http({
            method : 'GET',
            url : $uri + '?year=' + $scope.targetYear + '&month=' + $scope.targetMonth
        }).success(function(data, status, headers, config) {
            $scope.calendarData = data;
        }).error(function(data, status, headers, config) {
        });
    };

    $scope.classSelect = function(dow){
        if(dow == 0){
            return 'danger';
        }else if(dow == 6){
            return 'info';
        }
    };

    $scope.setCalendarData();
};

var appModule = angular.module('calendarDemo', []);
appModule.controller('calendarCtrl', MyController);
