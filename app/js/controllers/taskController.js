manageMe.controller('taskController', ['taskStorage', function(taskStorage) {

  var self = this;

  self.taskStorage = taskStorage;

  self.tasks = taskStorage.getTasks();
  //import from taskFetcher



}]);
