"use strict";
//1. The Angular module
var app = angular.module('myApp', []);
var EmployeeCtrl = /** @class */ (function () {
    function EmployeeCtrl($scope) {
        $scope.greet = 'greet';
        this.header = "Employee List";
        this.Employees = [
            {
                "EmpNo": 101,
                "EmpName": "MS",
                "Salary": 20000
            },
            {
                "EmpNo": 102,
                "EmpName": "LS",
                "Salary": 18000
            },
            {
                "EmpNo": 103,
                "EmpName": "TS",
                "Salary": 16000
            }
        ];
    }
    return EmployeeCtrl;
}());
angular.module('myApp')
    .controller("EmployeeCtrl", EmployeeCtrl);
console.log('aa');
