(()=>{"use strict";let e=()=>{const e=document.createElement("header");e.setAttribute("id","header"),content.appendChild(e);const t=document.createElement("h1");t.setAttribute("id","head-content"),t.textContent="Fusion × Food";const n=document.createElement("span");n.setAttribute("id","head-type"),n.textContent=" Resturant Berlin",e.appendChild(t),e.appendChild(n)};document.getElementById("content"),(()=>{const e=document.getElementById("content"),t=document.createElement("nav");t.setAttribute("id","nav"),e.appendChild(t);const n=document.createElement("ul");n.setAttribute("id","ul"),t.appendChild(n);for(let e=0;e<3;e++){const t=document.createElement("li");t.setAttribute("id",e+1),n.appendChild(t)}const d=document.getElementById("1"),i=document.getElementById("2"),o=document.getElementById("3");d.textContent="home",i.textContent="menu",o.textContent="about"})(),e();const t=document.getElementById("1"),n=document.getElementById("2"),d=document.getElementById("3");let i=()=>{document.getElementById("nav").nextElementSibling.remove()};t.addEventListener("click",(()=>{i(),e()})),n.addEventListener("click",(()=>{i(),(()=>{const e=document.createElement("div");e.setAttribute("id","menu"),content.appendChild(e);for(let t=0;t<4;t++){const n=document.createElement("div");n.setAttribute("id","dish"+t),n.classList.add("dish");const d=document.createElement("div");d.setAttribute("id","img"+t),d.classList.add("img");const i=document.createElement("img"),o=document.createElement("div");o.setAttribute("id","text");const c=document.createElement("h3");c.setAttribute("id","h"+t);const l=document.createElement("span");l.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nunc dictum, blandit dui nec, molestie eros. Morbi semper quam vitae dolor tristique volutpat. Phasellus luctus n.",e.appendChild(n),n.appendChild(d),n.appendChild(o),o.appendChild(c),o.appendChild(l),d.appendChild(i)}const t=document.getElementById("img0").firstElementChild,n=document.getElementById("img1").firstElementChild,d=document.getElementById("img2").firstElementChild,i=document.getElementById("img3").firstElementChild;let o=document.getElementById("h0"),c=document.getElementById("h1"),l=document.getElementById("h2"),m=document.getElementById("h3");o.textContent="Chicken Steak With Grilled Vegetables",c.textContent="Beef Stroganoff",l.textContent="Waldorf Salad",m.textContent="Carpaccio",t.setAttribute("src","photos/first.png"),n.setAttribute("src","photos/two.png"),d.setAttribute("src","photos/three.png"),i.setAttribute("src","photos/four.png");const s=document.createElement("div"),u=document.createElement("div");s.setAttribute("id","upper"),u.setAttribute("id","lower");const r=document.getElementById("dish0"),a=document.getElementById("dish1"),p=document.getElementById("dish2"),h=document.getElementById("dish3");e.appendChild(s),e.appendChild(u),s.appendChild(r),s.appendChild(a),u.appendChild(p),u.appendChild(h)})()})),d.addEventListener("click",(()=>{i(),(()=>{const e=document.createElement("div");e.setAttribute("id","about"),content.appendChild(e);const t=document.createElement("div");t.classList.add("text"),e.appendChild(t);const n=document.createElement("h2");n.textContent="About";const d=document.createElement("p");d.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nunc dictum, blandit dui nec, molestie eros. Morbi semper quam vitae dolor tristique volutpat. Phasellus luctus n.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nunc dictum, blandit dui nec, molestie eros. Morbi semper quam vitae dolor tristique volutpat. Phasellus luctus n.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nunc dictum, blandit dui nec, molestie eros. Morbi semper quam vitae dolor tristique volutpat. Phasellus luctus n.",t.appendChild(n),t.appendChild(d)})()}))})();