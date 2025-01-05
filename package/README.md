# @fireact.dev/core

The @fireact.dev/core package provides a comprehensive set of React components and utilities for building modern web applications with Firebase. Built on top of Firebase's powerful backend services, this package enables rapid development of secure, scalable applications with built-in authentication, user management, and internationalization support.

![Web App Screenshot](https://fireact.dev/img/demos/core-demo.png)

## Installation

Install the package using npm:

```bash
npm install @fireact.dev/core firebase react-router-dom i18next react-i18next @headlessui/react @heroicons/react tailwindcss i18next-browser-languagedetector
```

For detailed setup instructions, visit the official documentation:
https://docs.fireact.dev/core/getting-started/

## Built on Firebase

The core package leverages Firebase's robust backend services to provide:

- **Firebase Authentication**: Secure user authentication with email/password and social login providers
- **Firestore Database**: Real-time NoSQL database for storing user profiles and application data
- **Firebase Hosting**: Fast and secure web hosting with global CDN
- **Firebase Emulator Suite**: Local development environment for testing authentication and database operations

## Key Features

### Authentication & Security
- Built-in authentication flows (sign in, sign up, password reset)
- Support for multiple authentication providers (Google, Microsoft, Facebook, etc.)
- Secure session management with Firebase Authentication
- Protected routes and role-based access control

### User Management
- Complete user profile management system
- Email verification and password recovery
- Secure account deletion flow
- Avatar management and display

### Internationalization
- Built-in support for multiple languages
- Easy-to-extend translation system
- Language detection and switching
- Pre-configured language files for common use cases

### UI Components
- Responsive, mobile-first components powered by Tailwind CSS
- Pre-built layouts for authenticated and public pages
- Consistent design system across all components
- Customizable theme and styling

### Developer Experience
- TypeScript support for type safety
- Comprehensive documentation and examples
- Local development with Firebase Emulator Suite
- Easy integration with Vite and React Router

## Architecture Overview

The package follows a modular architecture with clear separation of concerns:

1. **Authentication Layer**: Handles all authentication logic using Firebase Auth
2. **Data Layer**: Manages user data and application state using Firestore
3. **UI Layer**: Provides pre-built components for common application flows
4. **Configuration Layer**: Centralized configuration for easy customization
5. **Internationalization Layer**: Built-in support for multiple languages

## Extend to SaaS

After successfully setting up your core application, you can extend it to a fully functional SaaS platform by installing the @fireact.dev/saas package. This package adds:

- Subscription management
- Payment processing
- Multi-tenant architecture
- Team management features

For SaaS setup instructions, visit:
https://docs.fireact.dev/saas/getting-started/

## Components Reference

### Authentication Components
- SignIn - Sign in form
- SignUp - Sign up form
- ResetPassword - Password reset form
- PrivateRoute - Protected route component

### User Management Components
- Profile - User profile component
- EditName - Name editing form
- EditEmail - Email editing form
- ChangePassword - Password change form
- DeleteAccount - Account deletion interface
- Avatar - User avatar display

### Navigation Components
- DesktopMenuItems - Desktop navigation menu
- MobileMenuItems - Mobile navigation menu
- Logo - Application logo
- LanguageSwitcher - Language selection component

### Layout Components
- AuthenticatedLayout - Layout for authenticated pages
- PublicLayout - Layout for public pages
- Message - Message display component
- Dashboard - User dashboard

### Context Providers
- AuthContext - Firebase authentication context
- ConfigProvider - Application configuration context
- LoadingContext - Loading state management

### Utilities
- userUtils - User-related utility functions

## License

MIT
