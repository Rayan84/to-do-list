import {renderList} from './index.js';
export function checkboxFunctions(){
   // let checkboxes = document.querySelectorAll('.checkbox');

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
            renderList(existingEntries[i]);
            //return (true);
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