manageMe.controller('taskController', ['taskFetcher', '$scope', function(taskFetcher, $scope) {

  // Validation should be used to ensure the task has a description and is not in the past.
// The application should be styled in a nice format, of course feel free to use any css frameworks you feel are appropriate.
// A grunt task should be used to build the applications source code and concatenate and minify them into the following files: application.min.js and application.min.css.
// The application should either be packaged as a git repository or in a zip file with a description on how to build the application to run, and emailed to g reg@appointedd.com

  var self = this;

  $scope.tasks = [];

  self.idCounter = 1;

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

  self.resetValidation = function () {
    $scope.invalidDateFormatting = false;
    $scope.pastDate = false;
  }

  self.addTask = function(params) {
    self.resetValidation();
    if ( self.dateInvalid(params.date) ) { return }
    var newTask = {};
    newTask.description = params.description;
    newTask.date = params.date;
    newTask.humanizedDate = self.humanize(params.date);
    self.idCounter += 1;
    newTask.id = self.idCounter;
    $scope.tasks.push(newTask);
  };

  self.dateInvalid = function(date) {
    if ( !moment(new Date(date)).isValid() ) {
      $scope.invalidDateFormatting = true;
      return true;
    }
    if ( new Date() > new Date(date) ) { 
      $scope.pastDate = true;
      return true; 
    }
  };

  self.deleteTask = function(task) {
    var index = $scope.tasks.indexOf(task);
    if (index > -1) { $scope.tasks.splice(index, 1); }
  };

  self.humanize = function(date) {
    return moment(new Date(date)).fromNow();
  };

}]);
