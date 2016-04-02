manageMe.service('taskStorage', [function() {

  var self = this;

  self.tasks = [
    {
      description: 'Finish tech test',
      date: '2016-04-04',
      humanizedDate: moment(new Date("2016-04-04")).fromNow()
    },
    {
      description: 'Frolic',
      date: '2016-04-10',
      humanizedDate: moment(new Date('2016-04-10')).fromNow()
    }
  ];

  self.getTasks = function() {
    return this.tasks;
  };

  self.addTask = function(params) {
    var newTask = {};
    newTask.description = params.description;
    newTask.date = params.date;
    newTask.humanizedDate = self.humanize(params.date);
    self.tasks.push(newTask);
  };

  self.deleteTask = function(task) {
    var index = this.tasks.indexOf(task);
    if (index > -1) { this.tasks.splice(index, 1); }
  };

  self.humanize = function(date) {
    return moment(new Date(date)).fromNow();
  };

}]);
