import"./style-BQhlDa8V.js";const e=document.getElementById("login-form"),s=document.getElementById("login-email"),r=document.getElementById("login-password");e.addEventListener("submit",t=>{t.preventDefault();const n=s.value.trim(),o=r.value;if(console.log("Login attempt:",{email:n,password:o}),!n||!o){i();return}localStorage.setItem("loggedIn","true"),localStorage.setItem("user",JSON.stringify({email:n})),console.log("Credentials submitted – redirecting to home."),window.location.href="../../../index.html"});const l=document.getElementById("forgot-link");l.addEventListener("click",t=>{t.preventDefault(),alert("Password recovery initiated.")});function i(){e.classList.add("shake"),e.addEventListener("animationend",()=>{e.classList.remove("shake")},{once:!0})}const a=document.createElement("style");a.textContent=`
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%       { transform: translateX(-6px); }
    40%       { transform: translateX(6px); }
    60%       { transform: translateX(-4px); }
    80%       { transform: translateX(4px); }
  }
  #login-form.shake { animation: shake 0.4s ease; }
`;document.head.appendChild(a);
