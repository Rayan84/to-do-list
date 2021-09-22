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
      "index": 1
    },
    {
      "description": "Wash the dishes",
      "completed": false,
      "index": 1
    },
    {
      "description": "Cook rice",
      "completed": false,
      "index": 1
    },
  ]

let renderList = () => {
    const listContainer = document.getElementById('list-container');
    for (let i = 0; i < list.length; i++){
      let task = document.createElement('LI');
      let textNode = document.createTextNode(list[i].description);
      task.appendChild(textNode);
      listContainer.appendChild(task);
    }
}

window.addEventListener('load', renderList);
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
}


