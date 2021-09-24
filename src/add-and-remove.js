import { indexOf } from "lodash"; // eslint-disable-line

export function removeItem(obj){
    obj.remove();
    let existingEntries = JSON.parse(localStorage.getItem('todos'));
      let deletedItem = obj.id;
      let entry = existingEntries.find(obj => obj.index == deletedItem);
      existingEntries.splice(existingEntries.indexOf(entry), 1);
      localStorage.setItem('todos', JSON.stringify(existingEntries));
}

export let deleteCompleted = () => {
  console.log('deleteCompleted called...')
  let completedTasks = document.querySelectorAll('.completed');
  let existingEntries = JSON.parse(localStorage.getItem('todos'));
  let deletedItems = existingEntries.filter(obj => obj.completed !== true);
  localStorage.setItem('todos', JSON.stringify(deletedItems));
  for (let i = 0; i < completedTasks.length; i++){
  completedTasks[i].parentElement.remove();

   }
}

export function showTrashBin(){
    let trashCan = this;
  if (trashCan.textContent == '\u22ee'){
    trashCan.innerHTML = '&#128465;';
    setTimeout(function(){
      console.log('timing...');
      trashCan.innerHTML = '\u22ee';
    }, 3000);
  } else {
    removeItem(this.parentElement);
  }
}