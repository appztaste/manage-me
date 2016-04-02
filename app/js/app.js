var manageMe = angular.module('manageMe', []);



// Create a basic Angular application for task management. The app should have a text input (task description), a datepicker (task due date), a submit button and a list of created “tasks”. Validation should be used to ensure the task has a description and is not in the past.
// Submitting a task should append it to the list, with the task description and the date displayed. The due date should be in a “humanised” format. For example, “Due in 2 weeks / Due in 1 month”. By default, the list should be ordered by date, ascending.
// Each task in the list should be it’s own directive named “ap­task­item”, and include a “remove” button which will delete the task from the list.
// Some pre­existing tasks should be retrieved from a JSON endpoint on application load. Don’t worry, any user added tasks don’t need to be posted to an endpoint!
