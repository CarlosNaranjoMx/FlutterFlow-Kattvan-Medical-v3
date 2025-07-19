// Login Page JavaScript Functionality

// Toggle password visibility
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleBtn = document.querySelector('.toggle-password .eye-icon');
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleBtn.textContent = '🙈';
  } else {
    passwordInput.type = 'password';
    toggleBtn.textContent = '👁️';
  }
}

// Handle forgot password
function forgotPassword() {
  alert('Funcionalidad de recuperación de contraseña próximamente...\n\nPor favor contacta al administrador del sistema.');
}

// Navigate to register page
function goToRegister() {
  // For now, show an alert. Later this can redirect to register.html
  alert('Funcionalidad de registro próximamente...\n\n¡Pronto podrás crear tu cuenta!');
}

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const loginBtn = document.querySelector('.login-btn');
  
  // Validate inputs
  if (!username.trim()) {
    alert('Por favor ingresa tu usuario');
    document.getElementById('username').focus();
    return;
  }
  
  if (!password.trim()) {
    alert('Por favor ingresa tu contraseña');
    document.getElementById('password').focus();
    return;
  }
  
  // Show loading state
  loginBtn.classList.add('loading');
  loginBtn.textContent = 'Ingresando...';
  loginBtn.disabled = true;
  
  // Simulate login process
  setTimeout(() => {
    // Reset button state
    loginBtn.classList.remove('loading');
    loginBtn.textContent = 'Ingresar';
    loginBtn.disabled = false;
    
    // For demo purposes, accept any credentials
    if (username && password) {
      alert(`¡Bienvenido ${username}!\n\nInicio de sesión exitoso.`);
      
      // Here you would normally redirect to the main app
      // For now, let's redirect back to the welcome page
      setTimeout(() => {
        window.location.href = '../index.html';
      }, 1000);
    } else {
      alert('Usuario o contraseña incorrectos.\n\nPor favor verifica tus credenciales.');
    }
  }, 2000); // Simulate 2 second loading time
});

// Add input validation feedback
document.getElementById('username').addEventListener('input', function() {
  this.style.borderColor = this.value.trim() ? '#28a745' : '#ddd';
});

document.getElementById('password').addEventListener('input', function() {
  this.style.borderColor = this.value.trim() ? '#28a745' : '#ddd';
});

// Add animation delays for form elements
document.addEventListener('DOMContentLoaded', function() {
  const inputGroups = document.querySelectorAll('.input-group');
  inputGroups.forEach((group, index) => {
    group.style.animationDelay = `${index * 0.1}s`;
  });
});

// Handle Enter key in password field
document.getElementById('password').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    document.getElementById('loginForm').dispatchEvent(new Event('submit'));
  }
});
