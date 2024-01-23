import { menus } from "./menu";

const createTabs= ()=>{

    const contents= document.getElementById('content');
    
    const header=document.createElement('header');
    contents.appendChild(header);
    
    const arr = ['Home', 'Menu', 'Contact'];


    // create ul element and set the attributes.
    const ul = document.createElement('ul');
    
    
    for (let i = 0; i <= arr.length - 1; i++) {
        var li = document.createElement('li');     // create li element.
        li.textContent = arr[i]; 
        li.setAttribute('id', `e${i+1}`);     // assigning Id from i+1  and text to li using array value.
        li.setAttribute('style', 'display: block;');    // remove the bullets.
    
        ul.appendChild(li);     // append li to ul.
    }
    

    header.appendChild(ul);       // add list to the container.
    
    /////Clear all the elements starting from 2dn using nextsibling of the dom except header
     function clearDom() {
        while (contents.firstChild.nextSibling) {
            contents.removeChild(contents.firstChild.nextSibling);
        }}
 
        const menu= document.getElementById('e1').addEventListener('click',()=>{
            clearDom();
            menus();

 })
};
export default createTabs;