(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Roboto:wght@400;500;700&display=swap);"]),i.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    background-color: whitesmoke;\n    font-family: 'Lato', 'Roboto', sans-serif;\n\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n\n}\n\n#content {\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n\n}\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 2rem;\n}\n\nnav {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.5rem;\n    flex-wrap: nowrap;\n    text-align: center;\n    margin-top: 2rem;\n\n\n\n}\n\n.homeH1 {\n    font-size: 5rem;\n    position: absolute;\n    background: transparent;\n    color: white;\n    top: 20%;\n}\n\n.headertext {\n    font-size: 3.2rem;\n    position: absolute;\n    top: 45%;\n    padding: 1rem 2rem;\n    color: white;\n    background: transparent;\n}\n\nheader {\n\n    position: fixed;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 1;\n    opacity: 0.9;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n\n}\n\nul {\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n    font-size: 1.5rem;\n    color: rgb(12, 15, 27);\n    font-weight: bolder;\n    width: 100%;\n\n}\n\nli {\n    background-color: rgb(239, 243, 245);\n    opacity: 0.9;\n    padding: 0.25rem 0.5rem;\n\n}\n\n.homeimg {\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    margin-top: 1rem;\n\n}\n\n\n.menu {\n    display: flex;\n    gap: 2rem;\n}\n\n.vegt {\n    display: flex;\n    flex-direction: column;\n}\n\n.vegtDish {\n    font-size: 1.2rem;\n    padding: 1rem;\n    border-radius: 2rem;\n\n    width: 35vw;\n\n    background-color: rgba(240, 248, 255, 0.87);\n}\n\n.contact {\n\n    margin-top: 15%;\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    background-color: rgba(255, 255, 255, 0.9);\n    border-radius: 1.5rem;\n    border: 0.2rem black solid;\n    padding: 2rem 0.5rem;\n    width: 75%;\n\n}\n\n.text {\n    font-weight: 400;\n    font-size: 1.5rem;\n    text-align: center;\n\n}\n\n.imenu {\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 15%;\n\n\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n.item {\n    font-size: 1.2rem;\n\n    text-align: center;\n    padding: 1rem;\n    border-radius: 2rem;\n    place-self: center;\n    width: 25vw;\n}\n\n.imenu img {\n    width: 70%;\n}\n\n.items {\n    border: 0.2rem rgb(125, 125, 221) solid;\n    border-radius: 2rem;\n}\n\n.items:hover {\n\n    border: 0.3rem solid #ffee10;\n    border-radius: 2rem;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,m="".concat(s," ").concat(l);a[s]=l+1;var p=t(m),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var f=o(u,r);r.byIndex=c,n.splice(c,0,{identifier:m,updater:f,references:1})}i.push(m)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),m=t(589),p=t.n(m),u=t(426),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const h=function(){const e=document.getElementById("content"),n=document.createElement("nav");e.appendChild(n);const t=document.createElement("h1");t.textContent="Sweet or Spiced",t.classList.add("homeH1"),n.appendChild(t);const r=document.createElement("p");r.innerHTML="All Halal & Only Halal & Always Halal<br>Makes Everything Nice!<br>",r.classList.add("headertext"),n.appendChild(r);const o=document.createElement("img");o.src="../src/assets/main.jpg",o.alt="Home image halal restaurant",o.classList.add("homeimg"),n.appendChild(o)};(()=>{const e=document.getElementById("content"),n=document.createElement("header");e.appendChild(n);const t=["Home","Menu","Contact"],r=document.createElement("ul");for(let e=0;e<=t.length-1;e++){var o=document.createElement("li");o.textContent=t[e],o.setAttribute("id",`e${e+1}`),o.setAttribute("style","display: block;"),r.appendChild(o)}function a(){for(;e.firstChild.nextSibling;)e.removeChild(e.firstChild.nextSibling)}n.appendChild(r),document.getElementById("e2").addEventListener("click",(()=>{a(),function(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("imenu"),e.appendChild(n);const t=document.createElement("div");t.setAttribute("id","d1"),t.classList.add("items");const r=document.createElement("div");r.classList.add("item");const o=document.createElement("h2");o.textContent="Fries Bowl";const a=document.createElement("img");a.src="/home/abdu/Project-Restaurant-Page/src/assets/friesbowl.png";const i=document.createElement("p");i.textContent="590 - 1140 CAL",r.appendChild(o),r.appendChild(i),r.appendChild(a),t.appendChild(r),n.appendChild(t);const c=document.createElement("div");c.setAttribute("id","d2"),c.classList.add("items");const d=document.createElement("div");d.classList.add("item");const s=document.createElement("h2");s.textContent="Zoodles Bowl";const l=document.createElement("img");l.src="/home/abdu/Project-Restaurant-Page/src/assets/ZoodlesBowl.png";const m=document.createElement("p");m.textContent="590 - 1140 CAL",d.appendChild(s),d.appendChild(m),d.appendChild(l),c.appendChild(d),n.appendChild(c);const p=document.createElement("div");p.setAttribute("id","d3"),p.classList.add("items");const u=document.createElement("div");u.classList.add("item");const f=document.createElement("h2");f.textContent="Naanarito";const h=document.createElement("img");h.src="/home/abdu/Project-Restaurant-Page/src/assets/naanarito.png";const g=document.createElement("p");g.textContent="590 - 1140 CAL",u.appendChild(f),u.appendChild(g),u.appendChild(h),p.appendChild(u),n.appendChild(p)}()})),document.getElementById("e1").addEventListener("click",(()=>{a(),h()})),document.getElementById("e3").addEventListener("click",(()=>{a(),function(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("contact");const t=document.createElement("h1");t.textContent="Please feel free to contact us!",n.appendChild(t);const r=document.createElement("p");r.classList.add("text"),r.innerHTML="We are located at  St 415 Med Ali  Gabes Tunisia",n.appendChild(r);const o=document.createElement("h1");o.textContent="Phone ",n.appendChild(o);const a=document.createElement("p");a.classList.add("text"),a.innerHTML="+216 99 999 999",n.appendChild(a);const i=document.createElement("p"),c=document.createElement("h1");c.textContent="Email ",n.appendChild(c),i.classList.add("text"),i.innerHTML="prepa.issat@gmail.com",n.appendChild(i),e.appendChild(n)}()}))})(),h()})()})();