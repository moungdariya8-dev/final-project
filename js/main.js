// Main UI Interactions
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Dynamic Search Filtering
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) || 
                product.category.toLowerCase().includes(searchTerm)
            );
            displayProducts(filteredProducts);
        });
    }

    // Mobile Menu Toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Add CSS for active state if needed or handle via JS
            if (navLinks.classList.contains('active')) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#f8edeb';
                navLinks.style.padding = '1rem';
                navLinks.style.textAlign = 'center';
            } else {
                navLinks.style.display = '';
            }
        });
    }
});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const statusDiv = document.getElementById('contact-status');
        
        // Simulate sending a message
        statusDiv.textContent = "Thank you! Your message has been sent.";
        statusDiv.className = "message success";
        
        // Reset the form
        contactForm.reset();
        
        // Clear message after 3 seconds
        setTimeout(() => {
            statusDiv.textContent = "";
            statusDiv.className = "message";
        }, 3000);
    });
}
