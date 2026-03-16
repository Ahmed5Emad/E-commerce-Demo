import"./style-BQhlDa8V.js";function h(){return`
    <header class="header">
      <div class="logo">
        <a href="./index.html" style="text-decoration: none; color: inherit;">LOGO</a>
      </div>
      <div class="search-bar">
        <div class="icon-btn">
          <i data-lucide="search" class="icon-search"></i>
        </div>
        <input id="searchInput" type="text" placeholder="Search for clothes and shoes">
      </div>
      <div class="nav-icons">
        <div class="icon-btn">
          <i data-lucide="heart" class="icon-nav"></i>
        </div>
        <a href="./src/pages/Cart/cart.html" class="icon-btn" style="color: inherit;">
          <i data-lucide="shopping-cart" class="icon-nav"></i>
        </a>
        <div class="icon-btn">
          <i data-lucide="bell" class="icon-nav"></i>
          <div class="notification-badge"></div>
        </div>
      </div>
      <div class="profile-section">
        <div class="profile-pic">
          <i data-lucide="user" class="icon-profile"></i>
        </div>
        <div class="profile-info">
          <div class="profile-text">
            <span class="welcome-text">Welcome Back</span>
            <span class="user-name">Mohamed Ehab</span>
          </div>
          <i data-lucide="chevron-down" class="icon-arrow"></i>
        </div>
      </div>
      <!-- Auth buttons — visibility toggled by initNavAuth() -->
      <div class="nav-auth-btns" id="nav-auth-btns">
        <a href="./src/pages/Login/login.html"  class="btn-nav-login"  id="btn-nav-login">Login</a>
        <a href="./src/pages/Signup/signup.html" class="btn-nav-signup" id="btn-nav-signup">Sign Up</a>
        <button class="btn-nav-logout" id="btn-nav-logout" style="display:none;">Logout</button>
      </div>
    </header>
  `}function I(){const e=localStorage.getItem("loggedIn")==="true",t=document.getElementById("btn-nav-login"),s=document.getElementById("btn-nav-signup"),o=document.getElementById("btn-nav-logout");if(t){if(e){t.style.display="none",s.style.display="none",o.style.display="";const a=JSON.parse(localStorage.getItem("user")||"{}"),n=a.username||a.email||"User",c=document.querySelector(".welcome-text"),u=document.querySelector(".user-name");c&&(c.textContent="Welcome Back"),u&&(u.textContent=n)}else{t.style.display="",s.style.display="",o.style.display="none";const a=document.querySelector(".welcome-text"),n=document.querySelector(".user-name");a&&(a.textContent="Hello,"),n&&(n.textContent="Guest")}o.addEventListener("click",()=>{localStorage.removeItem("loggedIn"),localStorage.removeItem("user"),window.location.href="./src/pages/Login/login.html"})}}function f(){return`
    <section class="offer-banner">
      <div class="offer-content">
        <h1>New Year Sales</h1>
        <h2>25% off</h2>
        <div class="countdown">
          <div class="timer-box"><p>02 D</p></div>
          <div class="timer-box"><p>09 H</p></div>
          <div class="timer-box"><p>24 M</p></div>
        </div>
      </div>
      <div class="offer-image">
        <div class="offer-image-inner">
          <img src="./assets/offer-people.png" alt="Offer Image">
        </div>
      </div>
    </section>
  `}function w(e){return`
    <a class="product-card-link" href="./src/pages/Item-Details/Item-Details.html?id=${e.id}">
      <div class="product-card">
        <div class="product-image-container">
          <img src="${e.image}" alt="" onerror="this.style.opacity='0'">
          <button class="favorite-btn">
            <i data-lucide="heart" class="icon-heart"></i>
          </button>
        </div>
        <div class="product-info">
          <p class="product-price">${e.price}$</p>
          <div class="product-rating">
            <i data-lucide="star" class="icon-star"></i>
            <span>${e.rating||"4.5"}</span>
          </div>
        </div>
        <div class="product-footer">
          <p class="product-name" title="${e.name}">${e.name}</p>
          <button class="add-to-cart" onclick="event.preventDefault()">Add to cart</button>
        </div>
      </div>
    </a>
  `}function l(e,t){return`
    <div class="grid-header">
      <h2 class="section-title">${e}</h2>
      <a href="#" class="view-all">View All</a>
    </div>
    <div class="product-grid">
      ${t.map(s=>w(s)).join("")}
    </div>
  `}function m(){const e=JSON.parse(localStorage.getItem("cart")||"[]"),t=document.querySelector(".notification-badge");t&&(t.style.display=e.length>0?"block":"none")}function y(e){let t=document.querySelector(".toast");t||(t=document.createElement("div"),t.className="toast",document.body.appendChild(t)),t.innerHTML=`
    <div class="toast-icon">
      <i data-lucide="shopping-cart" style="width: 18px; height: 18px;"></i>
    </div>
    <span class="toast-message">${e}</span>
  `,lucide.createIcons(),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>t.classList.remove("show"),3e3)}function S(e,t,s){let o=JSON.parse(localStorage.getItem("cart")||"[]");const a=`${e.id}-${t}-${s}`,n=o.find(c=>c.cartItemId===a);n?n.quantity=(n.quantity||1)+1:o.push({...e,cartItemId:a,selectedColor:t,selectedSize:s,quantity:1}),localStorage.setItem("cart",JSON.stringify(o)),m(),y(`${e.name} (${t}, ${s}) added to cart!`)}function $(e,t){const s=document.getElementById("app");s.innerHTML=`
    ${h()}
    ${f()}
    ${l("Search Results",e)}
  `,lucide.createIcons(),m()}async function L(){const e=document.getElementById("app"),s=await(await fetch("./data.json")).json(),o=s.filter(i=>i.tags.includes("Apparel")||i.tags.includes("Dress")||i.tags.includes("Cotton")),a=s.filter(i=>i.tags.includes("Footwear")),n=s.slice(0,4),c=a.slice(0,4);e.innerHTML=`
    ${h()}
    ${f()}
    ${l("New Fashion",o.slice(0,4))}
    ${l("New Shoes",a.slice(0,4))}
    ${l("Trending Fashion",n)}
    ${l("Trending Shoes",c)}
  `,lucide.createIcons(),m(),I(),document.querySelectorAll(".add-to-cart").forEach(i=>{i.addEventListener("click",r=>{if(r.preventDefault(),localStorage.getItem("loggedIn")!=="true"){y("Please log in to add items to your cart."),setTimeout(()=>{window.location.href="./src/pages/Login/login.html"},1500);return}const g=i.closest(".product-card-link"),d=new URL(g.href),p=parseInt(d.searchParams.get("id")),v=s.find(b=>b.id===p);v&&S(v,v.colors[0],"M")})}),document.getElementById("searchInput").addEventListener("input",i=>{const r=i.target.value.toLowerCase(),g=s.filter(d=>d.name.toLowerCase().includes(r)||d.tags.some(p=>p.toLowerCase().includes(r)));$(g)})}L();
