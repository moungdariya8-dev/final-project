# Glow & Grace | Skincare E-commerce Website

A fully functional e-commerce-style website for a skincare cosmetic store, built as a JavaScript final project.

## Features

- **User Authentication**: 
  - Sign-up and Login forms with validation.
  - Simulated authentication using `localStorage`.
  - Dynamic UI updates based on login status (shows username and logout button).
- **Product Management**:
  - Dynamic product listing from a mock data source.
  - Real-time product search and filtering by name or category.
- **Responsive Design**:
  - Mobile-friendly navigation bar with a hamburger menu.
  - Responsive product grid that adapts to different screen sizes.
- **Clean UI/UX**:
  - Aesthetic skincare-themed design using a soft color palette.
  - Interactive elements like hover effects and smooth transitions.

## Technologies Used

- **HTML5**: Semantic structure for the web pages.
- **CSS3**: Custom styling with Flexbox, Grid, and Responsive Design.
- **JavaScript (ES6+)**: 
  - DOM manipulation for dynamic content.
  - Event handling for search and authentication.
  - `localStorage` for persistent user data.
- **Font Awesome**: Icons for search, social media, and contact details.

## Project Structure

```text
skincare-store/
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   ├── auth.js         # Authentication logic (Login/Signup)
│   ├── products.js     # Product data and display logic
│   └── main.js         # Search and general UI interactions
├── index.html          # Home page & Product listing
├── login.html          # User login page
├── signup.html         # User registration page
└── README.md           # Project documentation
```

## How to Run the Project

1. **Clone or Download**: Download the project folder to your local machine.
2. **Open in Browser**: Simply double-click the `index.html` file to open it in your preferred web browser.
3. **Test Authentication**:
   - Go to the "Sign Up" page and create an account.
   - Log in with your new credentials.
   - Observe the navbar change to show your username and a logout button.
4. **Test Search**:
   - Use the search bar in the navbar to filter products like "Serum" or "Cream" in real-time.

## Code Comments

The JavaScript files (`auth.js`, `products.js`, `main.js`) include comments explaining the logic for:
- Filtering products based on user input.
- Handling form submissions and validation.
- Managing user sessions with `localStorage`.
- Updating the UI dynamically.

---
Created by Manus AI for the JavaScript Final Project.
