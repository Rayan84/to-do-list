import _ from 'lodash';
import './style.css';
// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, now imported by this script
//    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//    // element.classList.add('hello');
  
//     return element;
//   }
  
  //document.body.appendChild(component());

  let list = [
    {
      "description": "Finish To Do project",
      "completed": false,
      "index": 0
    },
    {
      "description": "Wash the dishes",
      "completed": false,
      "index": 1
    },
    {
      "description": "Cook rice",
      "completed": false,
      "index": 2
    },
  ]
 

let renderList = (item) => {
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



let readSavedTasks = () => {
  for (let i = 0; i < list.length; i++){
    renderList(list[i]);
  } 
}

const input = document.getElementById('input');
input.addEventListener('keypress', function (e){
  if (e.key === 'Enter') {
    addNewTask();
  }
})
let addNewTask = () => {
  let newTask = {
  "description": document.getElementById('input').value,
  "completed": false,
  "index": list.length,
  };
  list.push(newTask);
  console.log(list);
  renderList(list[list.length-1]);
}
let deleteCompleted = () => {
  console.log('deleteCompleted called...')
  let completedTasks = document.querySelectorAll('.completed');
  for (let i = 0; i < completedTasks.length; i++){
    completedTasks[i].remove();
  }
}
document.getElementById('delete-completed').addEventListener('click', deleteCompleted);

window.addEventListener('load', readSavedTasks);