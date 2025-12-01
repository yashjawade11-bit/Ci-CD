// JavaScript for simple interaction (Showing the modal)

document.addEventListener('DOMContentLoaded', () => {
    // Get necessary DOM elements
    const modal = document.getElementById('feedback-modal');
    const mainCta = document.getElementById('main-cta-button');
    const navCta = document.getElementById('cta-button-nav');
    const modalMessage = document.getElementById('modal-message');

    /**
     * Handles the CTA click event by displaying a custom modal.
     * @param {string} message The message to display in the modal.
     */
    function handleCtaClick(message) {
        // Update modal content and show the modal
        modalMessage.textContent = message;
        modal.classList.remove('hidden');
    }

    // Attach event listeners to the main Call to Action buttons
    if (mainCta) {
        mainCta.addEventListener('click', () => {
            handleCtaClick("Awesome! Normally, this would take you to a dedicated projects section.");
        });
    }

    if (navCta) {
        navCta.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            handleCtaClick("Ready to connect? This button should link to your email or contact form.");
        });
    }

    // Note: The modal close button logic is handled inline in index.html (onclick="document.getElementById('feedback-modal').classList.add('hidden')")
});