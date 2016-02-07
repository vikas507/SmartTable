var app = angular.module('app',[]);

app.controller('mainController', ['$scope', function ($scope) {

    $scope.rowCollection = [
        {Name: 'Arun',Designation:'tl',Email: 'varun@gmail.com'},
        {Name: 'Krishna vikas',	Designation:'developer',Email: 'vikas@gmail.com'},
        {Name: 'Rama krishna',	Designation:'tester',Email: 'ram@gmail.com'},
        {Name: 'Swetha',Designation:'developer',Email: 'swe@gmail.com'},
        {Name: 'Rajitha',Designation:'developer',Email: 'rajji@gmail.com'}
    ];

 $scope.exportData = function(){
 alasql('SELECT * INTO CSV("test.csv",{headers:true}) FROM ?', [$scope.rowCollection]);

    };

}]);




