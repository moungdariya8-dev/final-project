const products = [
    {
        id: 1,
        name: "Hydrating Face Cream",
        category: "Moisturizer",
        price: 25.99,
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Deeply hydrates and nourishes the skin."
    },
    {
        id: 2,
        name: "Vitamin C Serum",
        category: "Serum",
        price: 34.50,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Brightens skin tone and reduces dark spots."
    },
    {
        id: 3,
        name: "Gentle Cleanser",
        category: "Cleanser",
        price: 18.00,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Removes impurities without stripping natural oils."
    },
    {
        id: 4,
        name: "Rose Water Toner",
        category: "Toner",
        price: 22.00,
        image: "https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Balances skin pH and refreshes the complexion."
    },
    {
        id: 5,
        name: "Night Repair Oil",
        category: "Oil",
        price: 42.00,
        image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Overnight treatment for rejuvenated skin."
    },
    {
        id: 6,
        name: "Sun Protection SPF 50",
        category: "Sunscreen",
        price: 28.00,
        image: "https://images.unsplash.com/photo-1623676714504-edd78728155e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vuc2NyZWVufGVufDB8fDB8fHww",
        description: "Broad-spectrum protection against UV rays."
    },
    {
        id: 7,
        name: "Clay Detox Mask",
        category: "Mask",
        price: 19.99,
        image: "https://plus.unsplash.com/premium_photo-1661436015008-d4ece6914f66?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
        description: "Deeply cleanses pores and removes toxins."
    },
    {
        id: 8,
        name: "Retinol Eye Cream",
        category: "Eye Care",
        price: 38.00,
        image: "https://images.unsplash.com/photo-1764694071508-e4b1efcd39bc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW50aSUyMHdyaW5rbGV8ZW58MHx8MHx8fDA%3D",
        description: "Reduces fine lines and puffiness around the eyes."
    },
    {
        id: 9,
        name: "Exfoliating Scrub",
        category: "Exfoliant",
        price: 24.50,
        image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Gently removes dead skin cells for a smoother texture."
    },
    {
        id: 10,
        name: "Hyaluronic Acid Mist",
        category: "Mist",
        price: 15.00,
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Instant hydration boost for on-the-go freshness."
    },
    {
        id: 11,
        name: "Soothing Aloe Gel",
        category: "Moisturizer",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Calms irritated skin and provides lightweight moisture."
    },
    {
        id: 12,
        name: "Brightening Face Oil",
        category: "Oil",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Infused with botanical extracts for a radiant glow."
    },
    {
        id: 13,
        name: "Retinol Night Serum",
        category: "Serum",
        price: 42.00,
        image: "https://images.unsplash.com/photo-1765726951362-df46f5a74cdf?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmV0aW5vbHxlbnwwfHwwfHx8MA%3D%3D",
        description: "Advanced formula to reduce fine lines and improve skin texture overnight."
    },
    {
        id: 14,
        name: "Mineral Sunscreen SPF 50",
        category: "Sunscreen",
        price: 28.50,
        image: "https://images.unsplash.com/photo-1556228852-6d35a585d566?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Broad-spectrum protection with a non-greasy, matte finish."
    },
    {
        id: 15,
        name: "Exfoliating Rose Scrub",
        category: "Exfoliator",
        price: 22.00,
        image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Gently removes dead skin cells for a smooth and glowing complexion."
    },
    {
        id: 16,
        name: "Anti-Aging Peptide Cream",
        category: "Moisturizer",
        price: 52.00,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Innovative peptide complex reduces wrinkles and improves skin firmness."
    }
];

function displayProducts(productsToDisplay) {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    productGrid.innerHTML = '';

    if (productsToDisplay.length === 0) {
        productGrid.innerHTML = '<p class="no-results">No products found matching your search.</p>';
        return;
    }

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="category">${product.category}</p>
            <p class="description">${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(); // Added this line
    alert(`${product.name} added to cart 🛒`);
}

// FIXED: This now calculates total items in cart (sum of quantities)
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.textContent = totalItems;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    updateCartCount(); // Added this line to initialize cart count on page load
});
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});
