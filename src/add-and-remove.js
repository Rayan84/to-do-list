
export function removeFromLocalStorage(obj){
    console.log ('removeFromLocalStorage called...');
    (localStorage.getItem('todos') !== null)
      console.log(' if is ture');
      let existingEntries = JSON.parse(localStorage.getItem('todos'));
      console.log(existingEntries);
      existingEntries.push(obj);
      localStorage.setItem('todos', JSON.stringify(existingEntries));
      console.log('Saved to the existing entries...'); 
    
}