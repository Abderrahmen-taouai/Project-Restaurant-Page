 export const menus= function () {
    const content=document.getElementById('content');
    const container= document.createElement('div');
    content.appendChild(container);
    const veget= document.createElement('div');
    veget.classList.add("vegt");
    veget.innerHTML=`VEGETEIESSSSSSSSSSS`
    container.appendChild(veget);
    const nonvegt= document.createElement('div');
    nonvegt.classList.add("nonvegt");
    nonvegt.innerHTML=`NOOOOOOOOOOOOOOOOOON VEGETEIESSSSSSSSSSS`
    container.appendChild(nonvegt);
}