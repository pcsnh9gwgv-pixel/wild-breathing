// === CONTACT FORM ===
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const contactMessage = document.getElementById('contactMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value || 'No proporcionado',
                message: document.getElementById('message').value
            };

            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            try {
                // Simulate API call
                // In production, integrate with your backend or email service
                await new Promise(resolve => setTimeout(resolve, 1500));

                console.log('Form data:', formData);

                // Show success message
                showMessage(
                    contactMessage,
                    '¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.',
                    'success'
                );

                // Clear form
                contactForm.reset();

                // Redirect to thank you page after 2 seconds
                setTimeout(() => {
                    window.location.href = 'gracies.html';
                }, 2000);

            } catch (error) {
                showMessage(
                    contactMessage,
                    'Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
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
