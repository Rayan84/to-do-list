import './style.css';
import {saveToLocalStorage} from './checkbox.js';
import {retrieveLocalStorage} from './checkbox.js';
import {checkboxFunctions} from './checkbox.js';
import {saveChanges} from './checkbox.js';

export let renderList = (item, num) => {
  const listContainer = document.getElementById('list-container');
  let task = document.createElement('LI');
  let descriptionSpan = document.createElement('SPAN');
  descriptionSpan.innerHTML = item.description;
  descriptionSpan.contentEditable = 'true';
  descriptionSpan.setAttribute('class', 'description');
  descriptionSpan.addEventListener('keyup', saveChanges);
  let span = document.createElement('SPAN');
  let checkbox = document.createElement('INPUT');
  let span2 = document.createElement('SPAN');
  let span2Text = document.createTextNode('\u22ee');
  checkbox.setAttribute('type','checkbox');
  checkbox.setAttribute('class', 'checkbox');
  task.setAttribute('class', 'task');
  task.setAttribute('id', num);
      if (item.completed == true){
        descriptionSpan.setAttribute('class', 'completed description');
        checkbox.checked = true;
      }
      checkbox.addEventListener('change', checkboxFunctions);  
      span.appendChild(checkbox);
      task.appendChild(span);
      task.appendChild(descriptionSpan);
      span2.appendChild(span2Text);
      span2.setAttribute('class', 'ellipses');
      task.appendChild(span2);
      task.draggable = 'true'
      listContainer.appendChild(task);
}

const input = document.getElementById('input');
input.addEventListener('keypress', function (e){
  if (e.key === 'Enter') {
    if (document.getElementById('input').value == ''){
      alert ("Please enter something");
      return false
    }
    addNewTask();
    document.getElementById('input').value = '';
  }
})

let addNewTask = () => {
  let indexing;
  if(localStorage.getItem('todos') == null){
    indexing = 0;
    //console.log('Storage is empty')
  }else {
   // console.log('Storage is not empty');
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
  renderList(newTask, indexing)
}

let deleteCompleted = () => {
  //console.log('deleteCompleted called...')
  let completedTasks = document.querySelectorAll('.completed');
  for (let i = 0; i < completedTasks.length; i++){
    completedTasks[i].remove();
  }
}
document.getElementById('delete-completed').addEventListener('click', deleteCompleted);

window.addEventListener('load', retrieveLocalStorage);

