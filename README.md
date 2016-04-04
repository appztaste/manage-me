#Manage Me!
###A simple task manager, written in AngularJS by Rufus Raghunath

#####Task

Create a basic Angular application for task management. The app should have a text input (task description), a datepicker (task due date), a submit button and a list of created “tasks”. Validation should be used to ensure the task has a description and is not in the past.
Submitting a task should append it to the list, with the task description and the date displayed. The due date should be in a “humanised” format. For example, “Due in 2 weeks / Due in 1 month”. By default, the list should be ordered by date, ascending.Each task in the list should be its own directive and include a “remove” button which will delete the task from the list.
Some pre­existing tasks should be retrieved from a JSON endpoint on application load.
The application should be styled in a nice format, of course feel free to use any css frameworks you feel are appropriate.
A grunt task should be used to build the applications source code and concatenate and minify them into the following files: application.min.js and application.min.css.


#####Installation

- clone this repo
- in the repo root, run ```npm install``` and ```bower install```
- run ```npm start```
- visit ```localhost:8080``` in your browser
- enjoy!

#####Contact

rufusraghunath@gmail.com
