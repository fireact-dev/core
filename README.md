# Fireact Core

Fireact Core is a React component library that provides essential user authentication and profile management features for web applications. Built with TypeScript, TailwindCSS, and Firebase Authentication, it offers a complete solution for user sign-up, sign-in, password reset, and profile management functionalities.

![Fireact Core Demo](https://fireact.dev/img/demos/core-demo.png)

## Using Fireact Core in Your Project

Instead of forking this repository, we recommend using the @fireact.dev/core package in your web application. Please refer to our [official documentation](https://docs.fireact.dev/core/) for detailed installation and usage instructions.

## Contributing

We welcome contributions from the community! Here's how you can help:

### Code of Conduct

We are committed to providing a welcoming and inclusive experience for everyone. We expect all participants to adhere to our Code of Conduct:

- Be respectful and inclusive of differing viewpoints and experiences
- Use welcoming and inclusive language
- Be collaborative and constructive in your communication
- Focus on what is best for the community
- Show empathy towards other community members

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please ensure your PR:
- Includes a clear description of the changes
- Updates relevant documentation
- Adds tests if applicable
- Follows the existing code style
- Passes all tests

## Local Development Setup

To develop Fireact Core locally, follow these steps:

### Prerequisites
- Node.js (v14 or later)
- npm (Node Package Manager)
- Firebase account

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/fireactjs/core.git
   cd core
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Configuration
Create a `config.json` file in the `src` directory with your Firebase configuration:

```json
{
  "firebase": {
    "apiKey": "YOUR_API_KEY",
    "authDomain": "YOUR_AUTH_DOMAIN",
    "projectId": "YOUR_PROJECT_ID",
    "storageBucket": "YOUR_STORAGE_BUCKET",
    "messagingSenderId": "YOUR_MESSAGING_SENDER_ID",
    "appId": "YOUR_APP_ID"
  },
  "socialLogin": {
    "google": true,
    "microsoft": false,
    "facebook": false,
    "apple": false,
    "github": false,
    "twitter": false,
    "yahoo": false
  },
  "pages": {
    "home": "/",
    "dashboard": "/dashboard",
    "profile": "/profile",
    "editName": "/edit-name",
    "editEmail": "/edit-email",
    "changePassword": "/change-password",
    "deleteAccount": "/delete-account",
    "signIn": "/signin",
    "signUp": "/signup",
    "resetPassword": "/reset-password"
  }
}
```

### Firebase Setup
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Log in to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:
   ```bash
   firebase init
   ```
   Select Firestore and Hosting, and follow the prompts.

### Development Server

You have two options for local development:

#### Quick Development Mode
For rapid development with hot reloading:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

#### Full Testing Mode with Firebase Emulators
For testing with Firebase services:

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the Firebase emulators for Authentication, Firestore, and Hosting:
   ```bash
   firebase emulators:start --only auth,firestore,hosting
   ```

This will serve the built application through Firebase Hosting emulator while providing local Authentication and Firestore services.

For detailed information about developing components for the @fireact.dev/core package, please visit our [official documentation](https://docs.fireact.dev/core/).

### Building for Production
Create a production build:
```bash
npm run build
```

## License
This project is open source and available under the MIT License.
