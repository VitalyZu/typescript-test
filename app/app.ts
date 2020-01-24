
interface myScope extends ng.IScope {
    greet:string
}

//1. The Angular module
var app = angular.module('myApp',[]);
 
 
//2. The TypeScript interface
interface IEmployee{
    header:string,
    Employees:any[]; 
}


 
class EmployeeCtrl implements IEmployee{
    header:string;
    Employees : any[];
    
    constructor($scope:myScope) {
        $scope.greet = 'greet'
         this.header = "Employee List";
         this.Employees=[
             {
                 "EmpNo":101,
                 "EmpName":"MS",
                 "Salary":20000
             },
              {
                 "EmpNo":102,
                 "EmpName":"LS",
                 "Salary":18000
             },
              {
                 "EmpNo":103,
                 "EmpName":"TS",
                 "Salary":16000
             }
              
         ];
         
    }
}
 
angular.module('myApp')
    .controller("EmployeeCtrl",EmployeeCtrl); 
