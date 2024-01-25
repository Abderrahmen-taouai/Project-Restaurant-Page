import { createTabs } from "/home/abdu/Project-Restaurant-Page/src/tabs";
import Home from  './assets/main.jpg';

export const pageload = function () {
  const contents = document.getElementById("content");

  const navb = document.createElement("nav");
  contents.appendChild(navb);
  const head = document.createElement("h1");
  head.textContent = "Sweet or Spiced";
  head.classList.add("homeH1");
  navb.appendChild(head);

  const p1 = document.createElement("p");
  p1.innerHTML = `All Halal & Only Halal & Always Halal<br>Makes Everything Nice!<br>`;
  p1.classList.add("headertext");
  navb.appendChild(p1);

  //Home image
  const homeimg = document.createElement("img");
  homeimg.src = Home;
  homeimg.alt = "Home image halal restaurant";
  homeimg.classList.add("homeimg");

  navb.appendChild(homeimg);
};
