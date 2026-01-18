// === PASSWORD RESET ===
document.addEventListener('DOMContentLoaded', function() {
    const resetForm = document.getElementById('resetForm');
    const resetMessage = document.getElementById('resetMessage');

    if (resetForm) {
        resetForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;

            // Show loading state
            const submitBtn = resetForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            try {
                // Simulate API call
                // In production, this should send email via backend/API
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Show success message
                showMessage(
                    resetMessage,
                    'Se han enviado las instrucciones a tu correo electrónico. Por favor, revisa tu bandeja de entrada.',
                    'success'
                );

                // Clear form
                resetForm.reset();

                // Redirect after 3 seconds
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 3000);

            } catch (error) {
                showMessage(
                    resetMessage,
                    'Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.',
                    'error'
                );
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});

function showMessage(element, message, type) {
    if (element) {
        element.textContent = message;
        element.className = `message ${type} show`;
        
        setTimeout(() => {
            element.classList.remove('show');
        }, 5000);
    }
}
