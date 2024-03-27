document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        window.scrollTo({
            top: document.getElementById('tourGrid').offsetTop,
            behavior: 'smooth'
        });
    }, 2000); // 2 seconds delay
});


document.querySelectorAll('.clouds').forEach(cloud => {
    // Generate a random top position between 0% and 80%
    const randomTop = Math.floor(Math.random() * 100);
    cloud.style.top = `${randomTop}%`;

    // Generate a random animation delay between 0s and 5s
    const randomDelay = Math.random() * 15;
    cloud.style.animationDelay = `${randomDelay}s`;
});

// Flag to keep track of user scrolling
let userHasScrolled = false;

// Listen for scroll events
window.addEventListener('scroll', () => {
    userHasScrolled = true;
});

// Function to scroll down after a delay
setTimeout(() => {
    if (!userHasScrolled) {
        window.scrollBy({
            top: window.innerHeight, // 100% of the viewport height
            left: 0,
            behavior: 'smooth'
        });
    }
}, 8000); // Delay of 5 seconds
