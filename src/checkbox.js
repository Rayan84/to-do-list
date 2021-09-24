import {renderList} from './index.js';
import _ from 'lodash'; // eslint-disable-line
export function checkboxFunctions(){
    let checkedItme = this.parentNode.parentNode.id;
    let existingEntries = JSON.parse(localStorage.getItem('todos'));
    console.log(this.parentNode.parentNode.id);

     console.log(existingEntries);
     let entry = existingEntries.find(obj => obj.index == checkedItme)
     //console.log(existingEntries.find(obj => obj.index == checkedItme));

   // existingEntries.find(index =)[this.parentNode.parentNode.id]
//     let entry = existingEntries[this.parentNode.parentNode.id]
//   //  console.log(this.parentNode.parentNode.id);

    if (this.checked == true){
        this.parentNode.nextSibling.className = 'completed description';
       entry.completed = true;
    }else {
        this.parentNode.nextSibling.className = 'description';
        entry.completed = false;
    }
    localStorage.setItem('todos', JSON.stringify(existingEntries));
 }        

export function retrieveLocalStorage() {
    if (localStorage.getItem('todos') == null){
      //  localStorage.setItem('count', 0);
    }else {
        let existingEntries = JSON.parse(localStorage.getItem('todos'));
        for (let i = 0; i < existingEntries.length; i++ ){
            let indexing = (existingEntries[i].index);
            renderList(existingEntries[i], indexing);
        }
    }
}

export function saveToLocalStorage(obj){
    console.log ('saveToLocalStorage called...');
    if (localStorage.getItem('todos') !== null){
      let existingEntries = JSON.parse(localStorage.getItem('todos'));
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
  //  localStorage.setItem('count', localStorage.getItem(count)+1);    
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