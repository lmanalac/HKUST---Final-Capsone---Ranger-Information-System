'use strict';

var app=angular.module('risApp');

//app.constant("baseURL","http://localhost:4000/");
app.constant("baseURL","");
app.factory('projectFactory',['$http', 'baseURL', function($http,baseURL) {

var projectfac = {};

projectfac.getProjects = function(){
  return $http.get(baseURL+"projects");
}

projectfac.getProject = function(index){
  return $http.get(baseURL+"projects/"+index);
}

projectfac.postProject = function(data){
  return $http.post(baseURL+"projects",data);
}

projectfac.putProject = function(data){
  console.log('putProject()');
  console.log(data);
  console.log("projects/"+data.id);
  return $http.put(baseURL+"projects/"+data.id,data);
}

return projectfac;

}]);
