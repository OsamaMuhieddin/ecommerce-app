# E-commerce App 🛍️

A e-commerce web application built with Node.js, Express, and EJS. This app supports product management, shopping cart functionality, Stripe payments, authentication, proper error handling, and password reset via email.

## 🔧 Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend Templating:** EJS (with Blade-style structure)
- **Database:** MongoDB with Mongoose
- **Authentication & Authorization**
- **Email Support:** Nodemailer for password reset emails
- **Payments:** Stripe integration
- **File Handling:** File upload and PDF invoice download
- **Validation:** Server-side validation and structured error handling

## ✨ Features

- Signup/Login with session-based authentication
- Role-based product management (only the creator can manage their products)
- Shopping cart with quantity and total cost tracking
- Stripe checkout for payments
- Order management with downloadable invoices
- Password reset via email with token-based validation
- Clean user interface with styled EJS templates

## 📁 Project Structure
ecommerce-app/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── util/
├── app.js
├── .env.example
├── .gitignore
├── package.json


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ecommerce-app.git
cd ecommerce-app


### 2. Install dependencies
npm install

###3. Set up environment variables
Create a .env file in the root and add:

MONGODB_URI=your_mongo_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLIC_KEY=your_stripe_public_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password_or_app_password

###4. Start the app
npm start
# or
npx nodemon app.js
