// === DASHBOARD ===
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    checkAuth();

    // Display username
    const username = sessionStorage.getItem('username');
    const userNameElement = document.getElementById('userName');
    if (userNameElement && username) {
        userNameElement.textContent = username;
    }

    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Clear session
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('username');
            
            // Redirect to login
            window.location.href = 'login.html';
        });
    }
});
