import './style.css';
import _ from 'lodash';
import {saveToLocalStorage} from './checkbox.js';
import {retrieveLocalStorage} from './checkbox';

  let list = [
    {
      "description": "Finish To Do project",
      "completed": false,
      "index": 0
    },
    {
      "description": "Wash the dishes",
      "completed": true,
      "index": 1
    },
    {
      "description": "Cook rice",
      "completed": false,
      "index": 2
    },
  ]
 

export let renderList = (item) => {
  const listContainer = document.getElementById('list-container');
  let task = document.createElement('LI');
  let textNode = document.createTextNode(item.description);
  let span = document.createElement('SPAN');
  let checkbox = document.createElement('INPUT');
  let span2 = document.createElement('SPAN');
  let span2Text = document.createTextNode('\u22ee');
  checkbox.setAttribute('type','checkbox');
  checkbox.setAttribute('class', 'checkbox');
  
  task.setAttribute('class', 'task');
      if (item.completed == true){
        task.setAttribute('class', 'completed task');
        checkbox.checked = true;
      }
      span.appendChild(checkbox);
      task.appendChild(span);
      task.appendChild(textNode);
      span2.appendChild(span2Text);
      span2.setAttribute('class', 'ellipses');
      task.appendChild(span2);
      listContainer.appendChild(task);
}

const input = document.getElementById('input');
input.addEventListener('keypress', function (e){
  if (e.key === 'Enter') {
    addNewTask();
  }
})
let addNewTask = () => {
  let indexing;
  if(localStorage.getItem('todos') == null){
    indexing = 0;
   // let existing = JSON.parse(localStorage.getItem('todos'));
   // indexing = existing.length;
  // console.log(localStorage.getItem('todos').length;
   console.log('Storage is empty')
  }else {
    console.log('Storage is not empty');
    var arrayFromStroage = JSON.parse(localStorage.getItem("todos"));
    indexing = arrayFromStroage.length;
  }
  let newTask = {
  "index": indexing,
  "description": document.getElementById('input').value,
  "completed": false,
  }
  //console.lo('New task index is: ' + indexing);
  saveToLocalStorage(newTask);
}

let deleteCompleted = () => {
  console.log('deleteCompleted called...')
  let completedTasks = document.querySelectorAll('.completed');
  for (let i = 0; i < completedTasks.length; i++){
    completedTasks[i].remove();
  }
}
document.getElementById('delete-completed').addEventListener('click', deleteCompleted);

window.addEventListener('load', retrieveLocalStorage);