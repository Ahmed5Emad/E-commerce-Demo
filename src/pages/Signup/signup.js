
// ── Signup Page Logic ──────────────────────────────────────────

// 1. Prevent default form submission & collect values
const form = document.getElementById('signup-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name     = document.getElementById('signup-name').value.trim();
  const username = document.getElementById('signup-username').value.trim();
  const email    = document.getElementById('signup-email').value.trim();
  const phone    = document.getElementById('signup-phone').value.trim();
  const password = document.getElementById('signup-password').value;
  const confirm  = document.getElementById('signup-confirm-password').value;
  const role     = document.querySelector('input[name="role"]:checked')?.value;

  console.log('Signup attempt:', { name, username, email, phone, role });

  // Basic client-side validation
  if (!name || !username || !email || !password || !confirm) {
    shakeForm();
    return;
  }

  if (password !== confirm) {
    shakeForm();
    alert('Passwords do not match.');
    return;
  }

  // Simulate successful account creation
  // In a real app you'd POST to an API first
  localStorage.setItem('loggedIn', 'true');
  localStorage.setItem('user', JSON.stringify({ email, username, role }));
  console.log('Account created – redirecting to home.');
  window.location.href = '../../../index.html';
});

// 2. Eye-toggle for Password field
setupEyeToggle('toggle-password', 'signup-password');

// 3. Eye-toggle for Confirm Password field
setupEyeToggle('toggle-confirm-password', 'signup-confirm-password');

/**
 * Attaches a click listener to an eye icon button that toggles
 * the associated password input between "password" and "text",
 * and swaps the FontAwesome icon class accordingly.
 *
 * @param {string} toggleId  - id of the toggle <button>
 * @param {string} inputId   - id of the <input> to toggle
 */
function setupEyeToggle(toggleId, inputId) {
  const btn   = document.getElementById(toggleId);
  const input = document.getElementById(inputId);
  if (!btn || !input) return;

  btn.addEventListener('click', () => {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';

    const icon = btn.querySelector('i');
    if (isPassword) {
      // Showing plain text → show open eye
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    } else {
      // Hiding text → show crossed-out eye
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    }
  });
}

// ── Micro-animation: shake invalid form ──────────────────────
function shakeForm() {
  form.classList.add('shake');
  form.addEventListener('animationend', () => {
    form.classList.remove('shake');
  }, { once: true });
}

// Inject the shake keyframe once via JS so signup.css stays clean
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%       { transform: translateX(-6px); }
    40%       { transform: translateX(6px); }
    60%       { transform: translateX(-4px); }
    80%       { transform: translateX(4px); }
  }
  #signup-form.shake { animation: shake 0.4s ease; }
`;
document.head.appendChild(style);
