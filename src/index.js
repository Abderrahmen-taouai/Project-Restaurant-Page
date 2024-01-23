import * as module from '/home/abdu/Project-Restaurant-Page/src/page-load .js';
import * as Menus from '/home/abdu/Project-Restaurant-Page/src/menu.js';


console.log("Salem from src index.js watch mode");
module.pageload();
document.getElementById('e2').addEventListener('click',(e) => {
    e.preventDefault();
    Menus.menus();
   
  },{once : true}); //We can pass an object as an argument to the addEventListener method and specify that the event is only handled once. This is achieved by passing the property once to the object. If we set once to true, the event will only be fired once.


