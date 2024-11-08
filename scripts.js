document.addEventListener('DOMContentLoaded', function() {
    const createButton = document.querySelector('.cta');
    
    createButton.addEventListener('click', function() {
        alert('Redirecting to the Cartoon Animation Creation Tool...');
        // Logic to navigate to the animation creation page (or open modal)
    });

    // Example of dynamically updating the voice generator
    const voiceButton = document.querySelector('#voice-button');
    voiceButton.addEventListener('click', function() {
        alert('Generating AI voice...');
        // API integration for text-to-speech or voice generation
    });
});
