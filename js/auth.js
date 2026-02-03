// Authentication Logic
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const logoutBtn = document.getElementById('logout-btn');

    // Check login status on page load
    updateAuthUI();

    // Sign Up Logic
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const messageDiv = document.getElementById('signup-message');

            if (password !== confirmPassword) {
                showMessage(messageDiv, "Passwords do not match!", "error");
                return;
            }

            // Get existing users
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Check if user already exists
            if (users.find(u => u.email === email)) {
                showMessage(messageDiv, "User with this email already exists!", "error");
                return;
            }

            // Save new user
            const newUser = { username, email, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            showMessage(messageDiv, "Account created successfully! Redirecting to login...", "success");
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        });
    }

    // Login Logic
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const messageDiv = document.getElementById('login-message');

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                showMessage(messageDiv, "Login successful! Redirecting...", "success");
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            } else {
                showMessage(messageDiv, "Invalid email or password!", "error");
            }
        });
    }

    // Logout Logic
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        });
    }
});

function updateAuthUI() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const authSection = document.getElementById('auth-section');
    const userSection = document.getElementById('user-section');
    const usernameDisplay = document.getElementById('username-display');

    if (currentUser) {
        if (authSection) authSection.classList.add('hidden');
        if (userSection) {
            userSection.classList.remove('hidden');
            usernameDisplay.textContent = `Hello, ${currentUser.username}`;
        }
    } else {
        if (authSection) authSection.classList.remove('hidden');
        if (userSection) userSection.classList.add('hidden');
    }
}

function showMessage(element, text, type) {
    element.textContent = text;
    element.className = `message ${type}`;
}
