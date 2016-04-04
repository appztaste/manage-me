manageMe.service('taskStorage', ['taskFetcher', function(taskFetcher) {

  var self = this;

  self.tasks = [];

  self.fetchTasks = function() {
      var fetchedTasks = taskFetcher.fetchTasks();
      fetchedTasks.then(function(response) {
        response.data.tasks.forEach(function(task) {
          var params = {
                          description: task.description,
                          date: task.due_date
                        };
          self.addTask(params);
        })
      });
    };

  self.fetchTasks();

  self.addTask = function(params) {
    var newTask = {};
    newTask.description = params.description;
    newTask.date = params.date;
    newTask.humanizedDate = self.humanize(params.date);
    self.idCounter += 1;
    newTask.id = self.idCounter;
    self.tasks.push(newTask);
  };

  self.deleteTask = function(task) {
    var index = self.tasks.indexOf(task);
    if (index > -1) { self.tasks.splice(index, 1); }
  };

  self.humanize = function(date) {
    return moment(new Date(date)).fromNow();
  };

}]);