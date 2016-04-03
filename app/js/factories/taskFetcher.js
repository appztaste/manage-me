
manageMe.factory('taskFetcher', ['$http', function($http) {

  return {
      fetchTasks : function(){
      var queryUrl = 'https://s3-eu-west-1.amazonaws.com/appointedd-assets/tasks.json';
      return $http.get(queryUrl);
      }
  };

}]);
