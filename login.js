const form = document.getElementById('loginForm');
const msg = document.getElementById('message');
const toggle = document.getElementById('togglePwd');
const pwd = document.getElementById('password');

toggle.addEventListener('click', () => {
  const type = pwd.type === 'password' ? 'text' : 'password';
  pwd.type = type;
  toggle.textContent = type === 'password' ? 'Show' : 'Hide';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  msg.textContent = '';
  const data = new FormData(form);
  const email = (data.get('email')||'').trim();
  const password = (data.get('password')||'').toString();

  if (!email) return showError('Please enter your email.');
  if (!/^\S+@\S+\.\S+$/.test(email)) return showError('Please enter a valid email.');
  if (password.length < 6) return showError('Password must be at least 6 characters.');

  // Simulate success (replace with real auth call)
  showSuccess('Login successful — this is a demo.');
  console.log('Login:', { email, password, remember: data.get('remember') === 'on' });
});

function showError(text){ msg.style.color = '#dc2626'; msg.textContent = text; }
function showSuccess(text){ msg.style.color = '#16a34a'; msg.textContent = text; }
