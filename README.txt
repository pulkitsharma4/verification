User Registration and Email Verification System
==============================================

This is a full-stack web application built using Next.js for user registration and email verification. The app captures user details, stores them in MongoDB, and sends a verification email containing a token. The user must verify their email by entering the token received.

Features:
---------
- User Registration with basic details (First Name, Last Name, Email, Phone, Address).
- Sends a verification email to the user upon form submission.
- Verification token is stored in the database and checked when the user enters the token.
- Built with Next.js, MongoDB, and Nodemailer (Mailtrap for testing).

Project Structure:
------------------
- /app
  - /api
    - /users
      - /userData
        - route.js: API route for handling user data submission and sending verification email.
      - /verifyToken
        - route.js: API route for handling email verification.
  - /verifyEmail
    - page.jsx: Email verification page where users enter the verification code.
- /dbConfig
  - dbConfig.js: MongoDB connection configuration.
- /helpers
  - mailer.js: Helper function to send emails using Nodemailer.
- /pages
  - /index.js: Main registration page containing the form.
- /public: Public assets (if any).
- /src
  - /models
    - userModel.js: Mongoose model for User schema.

Installation and Setup:
-----------------------

1. Clone the Repository:
   First, clone the repository to your local machine using the following command:

   git clone https://github.com/<your-username>/<your-repository-name>.git

2. Navigate to the Project Directory:
   Once cloned, navigate to the project folder:

   cd <your-repository-name>

3. Install Dependencies:
   Run the following command to install all the required dependencies:

   npm install

4. Environment Variables:
   Create a `.env.local` file in the root directory of the project, and add the following environment variables:

   MONGO_URI=your_mongodb_connection_string
   MAILTRAP_USER=your_mailtrap_username
   MAILTRAP_PASS=your_mailtrap_password

   Replace the placeholder values with your MongoDB connection string and Mailtrap credentials.

5. Run the Development Server:
   Once the environment variables are set, run the development server:

   npm run dev

   You should now be able to access the app by navigating to http://localhost:3000 in your browser.

6. Testing Email Verification Flow:
   To test the email verification process:
   - Submit your details in the form.
   - You will receive a verification token in the email specified.
   - Enter the verification token on the verification page to complete the process.

7. Build the Project (Optional):
   To create an optimized production build, run:

   npm run build

   This will build the project for production. Once built, you can run the production version using:

   npm start

Technologies Used:
------------------
- Frontend: Next.js (React)
- Backend: Next.js API routes
- Database: MongoDB with Mongoose
- Email Service: Nodemailer (Mailtrap)
- Styling: Tailwind CSS

License:
--------
This project is licensed under the MIT License.
