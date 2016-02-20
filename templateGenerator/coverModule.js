Array.prototype.findApp = function(appName){
  var appIndex = -1;
  this.forEach(function(appObject, index){
    if(appObject.name === appName){
      appIndex = index;
    }
  });
  return appIndex;
};

angular.module('coverTemplate', ['ngMaterial', 'xeditable'])
  .run(function(editableOptions) {
    editableOptions.theme = 'bs3';
  })
  .controller('updateForm', function($scope, $mdDialog, $http){
    var ingifyString = function(string){
      stringArr = string.split(' ');
      stringArr[0] = stringArr[0].slice(0, stringArr[0].length-2).concat('ing');
      return stringArr.join(' ');
    };

    var capFirstLetter = function(string){
      if(string[0] === string[0].toUpperCase()){
        return string;
      }
      stringArr = string.split(' ');
      stringArr[0] = "I " + stringArr[0].slice(0, stringArr[0].length - 3).concat('ed');
      return stringArr.join(' ');
    };

    var currentDay = new Date();
    var featureWithIng;
    var date = months[currentDay.getMonth()-1] + " " + currentDay.getDate() + "," + currentDay.getFullYear();
    $scope.date = date;
    $scope.applications = apps;
    $scope.hasPoster = 'yes';
    $scope.type = 'software';
    $scope.company = "Company";
    $scope.stack = "full stack";
    $scope.stackTwo = 'full stack';
    $scope.fullName = 'Poster name';
    $scope.formalName = 'Mr. name';
    $scope.title = 'title';
    $scope.address = 'address';
    $scope.cityState = 'cityState';
    $scope.firstFramework = 'insert first framework here';
    $scope.firstAppDescription = 'describe what exactly it did that was so cool';
    $scope.descriptionOfWorkOnAppOne = 'description of work on first app';
    $scope.descriptionOfWorkOnAppTwo = 'description of work on second app';
    $scope.secondAppDescription = 'describe what exactly it did that was so cool';
    $scope.secondApp = 'Tolo';
    $scope.appOneFeature = '';
    $scope.appTwoFeature = '';
    $scope.firstApp = 'Tolo';
    $scope.reasonToWork = 'I am thrilled to use my software engineering experience to solve challenging problems for a product that is being used by millions of people';
    var fullStack = $('#paragraphTwo');
    var frontEnd = $('#paragraphTwoFront');
    var backEnd = $('#paragraphTwoBack');

    $scope.$watch('hasPoster', function(value) {
      var posterInfo = $('.posterInfo');
      var noInfo = $('.noPosterInfo');
      if($scope.hasPoster === 'yes'){
        posterInfo.show();
        noInfo.hide();
      } else {
        posterInfo.hide();
        noInfo.show();
      }
     });
    $scope.$watch('stack', function(value) {
      $scope.appOneFeature = ingifyString(apps[apps.findApp($scope.firstApp)].appDescription[$scope.stack].feature);
      $scope.descriptionOfWorkOnAppOne = capFirstLetter(apps[apps.findApp($scope.firstApp)].appDescription[$scope.stack].action);
     });

    $scope.$watch('stackTwo', function(value) {
      $scope.appTwoFeature = apps[apps.findApp($scope.secondApp)].appDescription[$scope.stackTwo].feature;
      $scope.descriptionOfWorkOnAppTwo = apps[apps.findApp($scope.secondApp)].appDescription[$scope.stackTwo].action;
     });

     $scope.$watch('firstApp', function(value) {
      $scope.appOneFeature = ingifyString(apps[apps.findApp($scope.firstApp)].appDescription[$scope.stack].feature);
      $scope.firstAppDescription = apps[apps.findApp($scope.firstApp)].appDescription.description;
      $scope.descriptionOfWorkOnAppOne = capFirstLetter(apps[apps.findApp($scope.firstApp)].appDescription[$scope.stack].action);
     });

    $scope.$watch('secondApp', function(value) {
      $scope.appTwoFeature = apps[apps.findApp($scope.secondApp)].appDescription[$scope.stack].feature;
      $scope.secondAppDescription = apps[apps.findApp($scope.secondApp)].appDescription.description;
      $scope.descriptionOfWorkOnAppTwo = apps[apps.findApp($scope.secondApp)].appDescription[$scope.stack].action;
     });

    $scope.submitCoverLetter = function(ev){

      var data = {
        name : $('#name').text(),
        city : $('#city').text(),
        jobPosterInfo : $('#companyHeader').text(),
        phoneNumber : $('#phoneNumber').text(),
        email : $('#email').text(),
        date : $('#date').text(),
        paragraphOne : $('#paragraphOne').text(),
        paragraphTwo : $('#paragraphTwo').text(),
        paragraphThree : $('#paragraphThree').text(),
        regards : $('#regards').text()
      };

      if($scope.hasPoster === 'yes'){
        data.fullName = $('#fullName').text();
        data.title = $('#title').text();
        data.address = $('#address').text();
        data.cityState = $('#cityState').text();
        data.intro = $('#posterIntro').text();
      } else {
        data.intro = $('#intro').text();
      }
      var req = {
       method: 'POST',
       url: 'http://localhost:3000/',
       headers: {
         'Content-Type': 'application/json'
       },
       data: {
        stack: $scope.type, 
        data : data,
        companyName : $scope.company
        }
      };
      $http(req)
        .then(function(err, res){
          $mdDialog.show({
                controller: "updateForm",
                templateUrl: 'alert.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true
              });
        });
    };

  })