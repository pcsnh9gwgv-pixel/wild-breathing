// === CAPTACION FORM ===
document.addEventListener('DOMContentLoaded', function() {
    const captacionForm = document.getElementById('captacionForm');
    const captacionMessage = document.getElementById('captacionMessage');

    if (captacionForm) {
        captacionForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = {
                fullname: document.getElementById('fullname').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                interest: document.getElementById('interest').value,
                privacy: document.querySelector('input[name="privacy"]').checked
            };

            // Validate privacy checkbox
            if (!formData.privacy) {
                showMessage(
                    captacionMessage,
                    'Debes aceptar la política de privacidad para continuar.',
                    'error'
                );
                return;
            }

            // Show loading state
            const submitBtn = captacionForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Registrando...';
            submitBtn.disabled = true;

            try {
                // Simulate API call
                // In production, this should save to Google Sheets or database
                await new Promise(resolve => setTimeout(resolve, 1500));

                console.log('Registration data:', formData);

                // Show success message
                showMessage(
                    captacionMessage,
                    '¡Registro exitoso! Te hemos enviado un email de confirmación.',
                    'success'
                );

                // Clear form
                captacionForm.reset();

                // Redirect to thank you page after 2 seconds
                setTimeout(() => {
                    window.location.href = 'gracies.html';
                }, 2000);

            } catch (error) {
                showMessage(
                    captacionMessage,
                    'Ha ocurrido un error al procesar tu registro. Por favor, inténtalo de nuevo.',
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
