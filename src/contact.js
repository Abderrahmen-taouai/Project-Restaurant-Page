export const contacts= function () {
    const content=document.getElementById('content');
    const contact= document.createElement('div');
   
    contact.classList.add("contact");
    const head=document.createElement('h1');
    head.textContent="Please feel free to contact us!";
    contact.appendChild(head);
    const para=  document.createElement('p');
    para.textContent="We are located at  St 415 Med Ali  Gabes Tunisia";
    contact.appendChild(para);

     content.appendChild(contact);

 
    
}