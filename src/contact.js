export const contacts = function () {
  const content = document.getElementById("content");
  const contact = document.createElement("div");

  contact.classList.add("contact");
  const head = document.createElement("h1");
  head.textContent = "Please feel free to contact us!";
  contact.appendChild(head);
  const para = document.createElement("p");
  para.classList.add("text");
  para.innerHTML = "We are located at  St 415 Med Ali  Gabes Tunisia";
  contact.appendChild(para);
  const head2 = document.createElement("h1");
  head2.textContent = "Phone ";
  contact.appendChild(head2);
  const para2 = document.createElement("p");
  para2.classList.add("text");
  para2.innerHTML = "+216 99 999 999";
  contact.appendChild(para2);

  const para3 = document.createElement("p");
  const head3 = document.createElement("h1");
  head3.textContent = "Email ";
  contact.appendChild(head3);
  para3.classList.add("text");
  para3.innerHTML = `prepa.issat@gmail.com`;
  contact.appendChild(para3);
  content.appendChild(contact);
};
