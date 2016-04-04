manageMe.controller('taskController', ['taskStorage', '$scope', function(taskStorage, $scope) {

  var self = this;
  self.taskStorage = taskStorage;
  $scope.tasks = taskStorage.tasks;

  self.checkTask = function(params) {
    if ( self.dateInvalid(params.date) ) { return }
    self.resetValidation();
    taskStorage.addTask(params);
  };

  self.resetValidation = function () {
    $scope.invalidDateFormatting = false;
    $scope.pastDate = false;
  }

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

}]);
