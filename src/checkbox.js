import {renderList} from './index.js';

export function checkboxFunctions(){
    let existingEntries = JSON.parse(localStorage.getItem('todos'));
    let entry = existingEntries[this.parentNode.parentNode.id]


    if (this.checked == true){
        this.parentNode.parentNode.className = 'completed task';
        entry.completed = true;
    }else {
        this.parentNode.parentNode.className = 'task';
        console.log('unchecked');
        entry.completed = false;
    }
    localStorage.setItem('todos', JSON.stringify(existingEntries));
}        

export function retrieveLocalStorage() {
    if (localStorage.getItem('todos') == null){
        console.log('No saved entries found...');
    }else {
        console.log('Saved entries found...');
        let existingEntries = JSON.parse(localStorage.getItem('todos'));
        for (let i = 0; i < existingEntries.length; i++ ){
            console.log('Rendering ' + i);
            console.log(existingEntries[i]);
            let indexing = (existingEntries[i].index);
            renderList(existingEntries[i], indexing);
        }
    }
}

export function saveToLocalStorage(obj){
    console.log ('saveToLocalStorage called...');
    if (localStorage.getItem('todos') !== null){
      console.log(' if is ture');
      let existingEntries = JSON.parse(localStorage.getItem('todos'));
      console.log(existingEntries);
      existingEntries.push(obj);
      localStorage.setItem('todos', JSON.stringify(existingEntries));
      console.log('Saved to the existing entries...'); 
    }else {
        console.log('else is true');
      let a = [];
      a.push(obj);
      localStorage.setItem('todos', JSON.stringify(a));
      console.log('Saved the first entry');

    }    
}