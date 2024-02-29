User Authentication Project

🔐 Welcome to the User Authentication Project! This project allows users to sign up, store their data in a MongoDB database, and sign in securely. Below, you'll find information on how to set up and run the application.
Technologies Used

    Node.js: The runtime environment for executing JavaScript code server-side.
    Express: A web application framework for Node.js to simplify server-side development.
    MongoDB: A NoSQL database used for storing user data.
    Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
    Passport: Authentication middleware for Node.js.
    bcrypt: A library for hashing passwords.
    express-session: Session middleware for Express.js.
    express-ejs-layouts: Layout support for EJS templates.

Installation

    Clone the repository:

git clone https://github.com/bahou1/user-auth-proje

Install dependencies:

bash

npm install

Create a .env file in the root directory and set the following variables:

makefile

PORT=3000
MONGODB_URI=your_mongodb_uri
SESSION_SECRET=your_session_secret

Make sure to replace your_mongodb_uri and your_session_secret with your MongoDB URI and a secret for session management.

Run the application:

    For development (with nodemon):

    bash

npm run dev

For production:

bash

        npm start

Usage

    Access the application at http://localhost:3000 in your web browser.
    Sign up and securely manage user authentication.

Contributing

Feel free to contribute by opening issues or creating pull requests. Follow the Contributing Guidelines for more details.