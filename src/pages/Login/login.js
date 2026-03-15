
// ── Login Page Logic ──────────────────────────────────────────

// 1. Prevent default form submission & log credentials
const form = document.getElementById('login-form');
const emailInput = document.getElementById('login-email');
const passwordInput = document.getElementById('login-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  console.log('Login attempt:', { email, password });

  // Basic client-side validation feedback
  if (!email || !password) {
    shakeForm();
    return;
  }

  // Simulate a successful login
  // In a real app you'd call an API and only set this on a 200 response
  localStorage.setItem('loggedIn', 'true');
  localStorage.setItem('user', JSON.stringify({ email }));
  console.log('Credentials submitted – redirecting to home.');
  window.location.href = '../../../index.html';
});

// 2. Forgot password link
const forgotLink = document.getElementById('forgot-link');
forgotLink.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Password recovery initiated.');
});

// ── Micro-animation: shake invalid form ──────────────────────
function shakeForm() {
  form.classList.add('shake');
  form.addEventListener('animationend', () => {
    form.classList.remove('shake');
  }, { once: true });
}

// Inject the shake keyframe once via JS so login.css stays clean
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%       { transform: translateX(-6px); }
    40%       { transform: translateX(6px); }
    60%       { transform: translateX(-4px); }
    80%       { transform: translateX(4px); }
  }
  #login-form.shake { animation: shake 0.4s ease; }
`;
document.head.appendChild(style);
