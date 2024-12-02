// Select elements by class name
const greetingElement = document.querySelector('.greeting');
const aboutElement = document.querySelector('.about');

// Function to update the greeting
function updateGreeting(newGreeting) {
    if (greetingElement) {
        greetingElement.textContent = newGreeting;
    }
}

// Function to toggle the visibility of the about section
function toggleAboutVisibility() {
    if (aboutElement) {
        aboutElement.style.display = 
            aboutElement.style.display === 'none' ? 'block' : 'none';
    }
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    // Update the greeting text after 3 seconds
    setTimeout(() => {
        updateGreeting('Welcome to My Profile!');
    }, 3000);

    // Add a click event to toggle the about section visibility
    greetingElement.addEventListener('click', toggleAboutVisibility);
});
