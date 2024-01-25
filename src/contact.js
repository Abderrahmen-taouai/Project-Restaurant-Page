export const contacts= function () {
    const content=document.getElementById('content');
    const contact= document.createElement('div');
   
    contact.classList.add("contact");
    const head=document.createElement('h1');
    head.textContent="Please feel free to contact us!";
    contact.appendChild(head);
    const para=  document.createElement('p');
    para.classList.add("text");
    para.innerHTML="We are located at  St 415 Med Ali  Gabes Tunisia";
    contact.appendChild(para);
    const head2=document.createElement('h1');
    head2.textContent="Phone Number";
    contact.appendChild(head2);
    const para2=  document.createElement('p');
    para2.classList.add("text");
    para2.innerHTML="+216 999 999";
    contact.appendChild(para2);
     content.appendChild(contact);

 
    
}