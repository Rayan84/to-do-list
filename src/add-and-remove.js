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
  if (this.innerHTML == '\u22ee'){
    this.innerHTML = '&#128465;';
  } else {
    removeItem(this.parentElement);
  }
}
