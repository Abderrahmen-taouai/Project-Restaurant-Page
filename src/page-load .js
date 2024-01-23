export const pageload= function() {
    const contents= document.getElementById('content');
    const onload=document.createElement('div');
    onload.classList.add('onload');
    contents.appendChild(onload);
    const header=document.createElement('header');
    onload.appendChild(header);
    const navb=document.createElement('nav');
    onload.appendChild(navb);
    const head=document.createElement('h1');
    head.textContent="Sweet or Spiced";
    head.classList.add("homeH1");
    navb.appendChild(head);

    //create nav bar
 

///
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
///
    

    const p1=document.createElement('p');
    p1.innerHTML=`All Halal & Only Halal & Always Halal<br>Makes Everything Nice!<br>`;
    p1.classList.add("headertext");
    navb.appendChild(p1);

    //Home image
    const homeimg= document.createElement("img");
    homeimg.src="../src/assets/main.jpg";
    homeimg.alt="Home image halal restaurant";
    homeimg.classList.add("homeimg");
    
    navb.appendChild(homeimg);
}
