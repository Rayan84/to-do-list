import {renderList} from './index.js';
import _ from 'lodash'; // eslint-disable-line
export function checkboxFunctions(){
    let existingEntries = JSON.parse(localStorage.getItem('todos'));
    let entry = existingEntries[this.parentNode.parentNode.id]

    if (this.checked == true){
        this.parentNode.nextSibling.className = 'completed description';
        entry.completed = true;
    }else {
        this.parentNode.nextSibling.className = 'description';
        //console.log('unchecked');
        entry.completed = false;
    }
    localStorage.setItem('todos', JSON.stringify(existingEntries));
}        

export function retrieveLocalStorage() {
    if (localStorage.getItem('todos') == null){
       // console.log('No saved entries found...');
    }else {
       // console.log('Saved entries found...');
        let existingEntries = JSON.parse(localStorage.getItem('todos'));
        for (let i = 0; i < existingEntries.length; i++ ){
       //     console.log('Rendering ' + i);
      //      console.log(existingEntries[i]);
            let indexing = (existingEntries[i].index);
            renderList(existingEntries[i], indexing);
        }
    }
}

export function saveToLocalStorage(obj){
    console.log ('saveToLocalStorage called...');
    if (localStorage.getItem('todos') !== null){
  //    console.log(' if is ture');
      let existingEntries = JSON.parse(localStorage.getItem('todos'));
   //   console.log(existingEntries);
      existingEntries.push(obj);
      localStorage.setItem('todos', JSON.stringify(existingEntries));
   //   console.log('Saved to the existing entries...'); 
    }else {
  //      console.log('else is true');
      let a = [];
      a.push(obj);
      localStorage.setItem('todos', JSON.stringify(a));
   //   console.log('Saved the first entry');

    }    
}


export function saveChanges () {
    console.log('change detected...');
    console.log(this);
   // console.log(this.textContent);
    let changedItem = this.parentNode.id;
    console.log(changedItem);

    let existingEntries = JSON.parse(localStorage.getItem('todos'));
    //   console.log(existingEntries);
       existingEntries[changedItem].description = this.textContent;
       localStorage.setItem('todos', JSON.stringify(existingEntries));
    //   console.log('Saved to the existing entries...'); 
}