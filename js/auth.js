// === AUTHENTICATION ===
// NOTE: This is a simplified version. In production, use proper authentication with Google Sheets API

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Show loading state
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Iniciando sesión...';
            submitBtn.disabled = true;

            // Simple demo authentication
            // In production, this should connect to Google Sheets API
            try {
                // Demo credentials
                if (username === 'demo' && password === 'demo123') {
                    // Store session
                    sessionStorage.setItem('isLoggedIn', 'true');
                    sessionStorage.setItem('username', username);
                    
                    showMessage(loginMessage, 'Inicio de sesión exitoso. Redirigiendo...', 'success');
                    
                    // Redirect to dashboard
                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 1000);
                } else {
                    throw new Error('Credenciales incorrectas');
                }
            } catch (error) {
                showMessage(loginMessage, 'Usuario o contraseña incorrectos', 'error');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});

// === HELPER FUNCTIONS ===
function showMessage(element, message, type) {
    if (element) {
        element.textContent = message;
        element.className = `message ${type} show`;
        
        setTimeout(() => {
            element.classList.remove('show');
        }, 5000);
    }
}

// === CHECK AUTHENTICATION ===
function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'login.html';
    }
}
