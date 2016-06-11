var app = angular.module('risApp');

app.controller('HomeController', ['$scope', function($scope) {

   }]);

app.controller('ContactController', ['$scope', function($scope) {
     $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                 var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
                 $scope.channels = channels;
     $scope.invalidChannelSelection = false;
   }]);

app.controller('FeedbackController', ['$scope', function($scope) {
                 $scope.sendFeedback = function() {
                         console.log($scope.feedback);
                         if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {
             $scope.invalidChannelSelection = true;
             console.log('incorrect');
         }
         else {
             $scope.invalidChannelSelection = false;
             $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                                agree:false, email:"" };
             $scope.feedback.mychannel="";

             $scope.feedbackForm.$setPristine();
             console.log($scope.feedback);
         }
     };
 }]);



// Important Line - $scope is passed to the anonymous function
app.controller('BrowseController',['$scope','projectFactory',function($scope,projectFactory) {

    $scope.categories = ["Vehicle","Facility"];
    $scope.statuses = ["Normal","Urgent"];
    $scope.tab = 1;
    $scope.filtText = '';

    $scope.select = function(setTab) {

          $scope.tab = setTab;

          if (setTab === 2)
              $scope.filtText = "Vehicle";
          else if (setTab === 3)
              $scope.filtText = "Facility";
          else
              $scope.filtText = "";
      }

    $scope.isSelected = function (checkTab) {
            return ($scope.tab === checkTab);
        }


  //$scope.projects = projectFactory.getProjects();


  $scope.showProjects = false;
  $scope.message = "Loading....";

  $scope.projects = [];
  projectFactory.getProjects()
  .then (
        function(response){
          $scope.projects = response.data;
          $scope.showProjects = true;
        },
        function(response) {
          $scope.message = "Error: "+response.status + " " + response.statusText;
        }
  );

    var newProject = function(){

      //var newID = Math.floor((Math.random() * 10000) + 1);

      //console.log(Object.keys($scope.projects).length);

      //newID = Object.keys($scope.projects).length;
      return {
      id:0,
      name:'',
      image: '',
      category: 'Vehicle',
      status:'Normal',
      grantamount:'',
      description:'',
      notes: []};
    };

    $scope.newProject=newProject();



    //$scope.projects = projects;
    $scope.submitProject = function () {

      //Generate newProject.id
      var d = new Date();
      var n = d.getTime();

      console.log('submitProject()');
      //console.log($scope.newProject.name);
      //console.log(Object.keys($scope.projects).length);
      //$scope.newProject.id = Object.keys($scope.projects).length;
      $scope.newProject.id = n;

      console.log($scope.newProject.id);
      //Step 2: This is how you record the date
      //$scope.comment.date = new Date().toISOString();

      // Step 3: Push your comment into the dish's comment array
      //$scope.projects.push($scope.newProject);
      $scope.showProjects = false;
      $scope.message = "Loading....";
      projectFactory.postProject($scope.newProject)
      .then (
            function(response){
              $scope.projects = response.data;
              $scope.showProjects = true;
            },
            function(response) {
              $scope.message = "Error: "+response.status + " " + response.statusText;
            }
      );
      //Step 4: reset your form to pristine
      //$scope.commentForm.$setPristine();

      //Step 5: reset your JavaScript object that holds your comment
      $scope.newProject = newProject();
      $scope.showProjects = false;
      $scope.message = "Loading....";

      $scope.projects = [];
      projectFactory.getProjects()
      .then (
            function(response){
              $scope.projects = response.data;
              $scope.showProjects = true;
            },
            function(response) {
              $scope.message = "Error: "+response.status + " " + response.statusText;
            }
      );
};

}]);

app.controller('DetailController',['$scope','$stateParams','projectFactory', function($scope,$stateParams,projectFactory) {

  var newComment = function(){



    //var newID = Math.floor((Math.random() * 10000) + 1);

    //console.log(Object.keys($scope.projects).length);

    //newID = Object.keys($scope.projects).length;
    return {
    rating:1,
    note:'',
    author: ''};
    };

    $scope.newComment=newComment();

    $scope.sortBy = "date";

    //console.log("DetailController");

    console.log($stateParams);

    //console.log("DetailController -- Post");

    //$scope.project=projectFactory.getProject(parseInt($stateParams.id,10));
    $scope.showProject = false;
    $scope.message = "Loading....";

    $scope.project = {};


    projectFactory.getProject(parseInt($stateParams.id,10))
    .then (
          function(response){
            $scope.project = response.data;
            $scope.showProject = true;
            //console.log($scope.project);
            //console.log($scope.project.notes);
          },
          function(response) {
               $scope.message = "Error: "+response.status + " " + response.statusText;
           }
    );
    //$scope.projects = projects;
    $scope.submitNote = function () {

      //Generate newProject.id
      //var d = new Date();
      //var n = d.getTime();

      console.log('submitNote()');
      //console.log($scope.newProject.name);
      //console.log(Object.keys($scope.projects).length);
      //$scope.newProject.id = Object.keys($scope.projects).length;
      //$scope.newProject.id = n;

      //console.log($scope.newProject.id);
      //Step 2: This is how you record the date
      $scope.newComment.date = new Date().toISOString();

      // Step 3: Push your comment into the dish's comment array
      console.log($scope.newComment);
      console.log($scope.project.notes);
      $scope.project.notes.push($scope.newComment);
      console.log($scope.project.notes);
      console.log($scope.project.id);

      $scope.showProject = false;
      $scope.message = "Loading....";
      //$scope.project = {};


      projectFactory.putProject($scope.project)
      .then (
              function(response){
                $scope.project = response.data;
                $scope.showProject = true;
                //console.log($scope.project);
                //console.log($scope.project.notes);
              },
              function(response) {
                $scope.message = "Error: "+response.status + " " + response.statusText;
               }
      );
      //Step 4: reset your form to pristine
      //$scope.commentForm.$setPristine();

      //Step 5: reset your JavaScript object that holds your comment
      //$scope.newProject = newProject();
      //$scope.showProjects = false;
      //$scope.message = "Loading....";

      //$scope.projects = [];
      //projectFactory.getProjects()
      //.then (
      //      function(response){
      //        $scope.projects = response.data;
      //        $scope.showProjects = true;
      //      },
      //      function(response) {
      //        $scope.message = "Error: "+response.status + " " + response.statusText;
      //      }
      //);
};


}]);
