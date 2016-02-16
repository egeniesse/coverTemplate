angular.module('coverTemplate', ['ngMaterial'])

  .controller('updateForm', function($scope, $mdDialog, $http){
    var currentDay = new Date();
    var date = currentDay.getMonth() + "/" + currentDay.getDate() + "/" + currentDay.getFullYear();
    $scope.date = date;
    $scope.company = "Company";
    $scope.stack = "full stack"
    $scope.firstFramework = 'insert first framework here';
    $scope.firstAppDescription = 'describe what exactly it did that was so cool';
    $scope.descriptionOfWorkOnAppOne = 'description of work on first app';
    $scope.descriptionOfWorkOnAppTwo = 'description of work on second app';
    $scope.secondAppDescription = 'describe what exactly it did that was so cool';
    $scope.secondApp = 'applicable technology';
    $scope.applicableFramework = 'insert applicable framework here';
    $scope.reasonToWork = 'help improve countless lives of potential users by growing your company and making it better'
    $scope.submitCoverLetter = function(ev){
      var name = $('#name').text();
      var city = $('#city').text();
      var phoneNumber = $('#phoneNumber').text();
      var email = $('#email').text();
      var date = $('#date').text();
      var intro = $('#intro').text();
      var paragraphOne = $('#paragraphOne').text();
      var paragraphTwo = $('#paragraphTwo').text();
      var paragraphThree = $('#paragraphThree').text();
      var regards = $('#regards').text();
      var req = {
       method: 'POST',
       url: 'http://localhost:3000/',
       headers: {
         'Content-Type': 'application/json'
       },
       data: { 
        data : {
          name: name,
          city: city,
          phoneNumber: phoneNumber,
          email: email,
          date: date,
          intro: intro,
          paragraphOne: paragraphOne,
          paragraphTwo: paragraphTwo,
          paragraphThree: paragraphThree,
          regards: regards
        },
        companyName : $scope.company
        }
      }
      $http(req)
        .then(function(err, res){
          $mdDialog.show({
                controller: "updateForm",
                templateUrl: 'alert.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true
              })
        })
    }

  })