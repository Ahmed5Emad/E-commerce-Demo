import"./style-BQhlDa8V.js";const a=document.getElementById("signup-form");a.addEventListener("submit",r=>{r.preventDefault();const s=document.getElementById("signup-name").value.trim(),e=document.getElementById("signup-username").value.trim(),t=document.getElementById("signup-email").value.trim(),o=document.getElementById("signup-phone").value.trim(),n=document.getElementById("signup-password").value,m=document.getElementById("signup-confirm-password").value,l=document.querySelector('input[name="role"]:checked')?.value;if(console.log("Signup attempt:",{name:s,username:e,email:t,phone:o,role:l}),!s||!e||!t||!n||!m){c();return}if(n!==m){c(),alert("Passwords do not match.");return}localStorage.setItem("loggedIn","true"),localStorage.setItem("user",JSON.stringify({email:t,username:e,role:l})),console.log("Account created – redirecting to home."),window.location.href="../../../index.html"});i("toggle-password","signup-password");i("toggle-confirm-password","signup-confirm-password");function i(r,s){const e=document.getElementById(r),t=document.getElementById(s);!e||!t||e.addEventListener("click",()=>{const o=t.type==="password";t.type=o?"text":"password";const n=e.querySelector("i");o?(n.classList.remove("fa-eye-slash"),n.classList.add("fa-eye")):(n.classList.remove("fa-eye"),n.classList.add("fa-eye-slash"))})}function c(){a.classList.add("shake"),a.addEventListener("animationend",()=>{a.classList.remove("shake")},{once:!0})}const d=document.createElement("style");d.textContent=`
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%       { transform: translateX(-6px); }
    40%       { transform: translateX(6px); }
    60%       { transform: translateX(-4px); }
    80%       { transform: translateX(4px); }
  }
  #signup-form.shake { animation: shake 0.4s ease; }
`;document.head.appendChild(d);
