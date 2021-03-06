import addToDo from './add-todo.js';
import taskList from './todo-list.js';
import tasksApi from './todo-api.js';

const tasks = tasksApi.getAll();

taskList.init(tasks, function(task) {

    tasksApi.remove(task);
});


addToDo.init(function(task){

    tasksApi.add(task);
    taskList.add(task);

});



