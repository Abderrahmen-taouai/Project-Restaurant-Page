 export const menus= function () {
    const content=document.getElementById('content');
    const container= document.createElement('div');
    container.classList.add("imenu");
    content.appendChild(container);
    
    
   
   const div1 = document.createElement('div');
    div1.setAttribute('id', "d1");    
    div1.classList.add('items');
    const div11 = document.createElement('div');
    div11.setAttribute('id', "d11");  
    const h11 =document.createElement('h2');
    h11.textContent="Fries Bowl";
    const img11 = document.createElement("img");
    img11.src = "/home/abdu/Project-Restaurant-Page/src/assets/friesbowl.png";
   const p11 =document.createElement('p');
    p11.textContent="590 - 1140 CAL"
    div11.appendChild(h11); 
    div11.appendChild(p11);
     div11.appendChild(img11)
    div1.appendChild(div11); 

    container.appendChild(div1); 
 
    //ITEM 2
    const div2 = document.createElement('div')
    div2.setAttribute('id', "d2");    
    div2.classList.add('items');
    const div22 = document.createElement('div');
    div22.setAttribute('id', "d22");  
    const h22 =document.createElement('h2');
    h22.textContent="Zoodles Bowl";
    const img22 = document.createElement("img");
    img22.src = "/home/abdu/Project-Restaurant-Page/src/assets/ZoodlesBowl.png";
   const p22 =document.createElement('p');
    p22.textContent="590 - 1140 CAL"
    div22.appendChild(h22); 
    div22.appendChild(p22);
     div22.appendChild(img22)
    div2.appendChild(div22); 

    container.appendChild(div2); 
   
    //ITEM 3
    const div3 = document.createElement('div')
    div3.setAttribute('id', "d3");    
    div3.classList.add('items');
    const div33 = document.createElement('div');
    div33.setAttribute('id', "d33");  
    const h33 =document.createElement('h2');
    h33.textContent="Naanarito";
    const img33 = document.createElement("img");
    img33.src = "/home/abdu/Project-Restaurant-Page/src/assets/naanarito.png";
   const p33 =document.createElement('p');
    p33.textContent="590 - 1140 CAL"
    div33.appendChild(h33); 
    div33.appendChild(p33);
     div33.appendChild(img33)
    div3.appendChild(div33); 

    container.appendChild(div3); 


    
   
}