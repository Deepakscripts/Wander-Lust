# Wander-Lust GitHub Documentation

Welcome to the Wander-Lust GitHub Documentation! This repository contains the source code and documentation for Wander-Lust, a travel-centric web application powered by Node.js and Express.js.

## Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Key Features](#key-features)
4. [Future Enhancements](#future-enhancements)
5. [Installation](#installation)
6. [Usage](#usage)

## Introduction

Wander-Lust is a web application designed for travel enthusiasts to discover, share, and explore travel destinations, activities, and experiences. It leverages modern web technologies to provide a seamless user experience, including CRUD operations for managing content, image uploads, and secure authentication mechanisms.

## Tech Stack

Wander-Lust's tech stack comprises the following components:

- **Node.js and Express.js**: The backbone of the application, facilitating rapid development and efficient server-side logic handling.
- **MongoDB**: Empowers data storage with its flexible NoSQL database, seamlessly integrating CRUD operations for managing travel-related content.
- **Cloudinary**: Enables effortless image uploads and management, enhancing user experience with visually captivating travel imagery.
- **Passport.js**: Implements secure authentication mechanisms, safeguarding user accounts and enabling personalized experiences.

## Key Features

Wander-Lust offers a range of features designed to enhance the user experience and provide seamless interaction with travel content. Below is a breakdown of the key features and corresponding controllers implemented in the application:

## Listing Management

### Index Controller

- **Description**: Retrieves all listings from the database and renders the index page.
- **Controller**: `index`
- **Route**: GET `/listings`

### New Listing Controller

- **Description**: Renders the form for creating a new listing.
- **Controller**: `new`
- **Route**: GET `/listings/new`

### Show Listing Controller

- **Description**: Retrieves a specific listing by ID and populates related data (reviews, owner) for display.
- **Controller**: `show`
- **Route**: GET `/listings/:id`

### Create Listing Controller

- **Description**: Handles the creation of a new listing, including geocoding the location and uploading images.
- **Controller**: `create`
- **Route**: POST `/listings`

### Edit Listing Controller

- **Description**: Renders the form for editing an existing listing, including image preview.
- **Controller**: `edit`
- **Route**: GET `/listings/:id/edit`

### Update Listing Controller

- **Description**: Updates an existing listing, including geocoding the location and updating images if provided.
- **Controller**: `update`
- **Route**: PUT `/listings/:id`

### Delete Listing Controller

- **Description**: Deletes an existing listing by ID.
- **Controller**: `delete`
- **Route**: DELETE `/listings/:id`

## Privacy and Terms

### Privacy Controller

- **Description**: Renders the privacy policy page.
- **Controller**: `privacy`
- **Route**: GET `/listings/privacy`

### Terms Controller

- **Description**: Renders the terms of service page.
- **Controller**: `terms`
- **Route**: GET `/listings/terms`

## User Authentication

### Sign Up Controller

- **Description**: Renders the sign-up form and handles user registration.
- **Controller**: `signupForm`
- **Route**: POST `/signup`

### Login Controller

- **Description**: Renders the login form and handles user authentication.
- **Controller**: `loginForm`
- **Route**: POST `/login`

### Logout Controller

- **Description**: Handles user logout.
- **Controller**: `logoutLink`
- **Route**: GET `/logout`

## Reviews

### Review Controller

- **Description**: Handles the submission of new reviews for listings.
- **Controller**: `review`
- **Route**: POST `/listings/:id/review`

### Delete Review Controller

- **Description**: Deletes a review associated with a listing.
- **Controller**: `deleteReview`
- **Route**: DELETE `/listings/:id/reviews/:reviewId`

## Middleware

### isLoggedIn Middleware

- **Description**: Ensures that a user is logged in before accessing certain routes.
- **Usage**: Applied to routes requiring authentication.
- **Controller**: `isLoggedIn`

### saveRedirectUrl Middleware

- **Description**: Saves the current URL to redirect users to after login.
- **Usage**: Applied before login routes to save the redirect URL.
- **Controller**: `saveRedirectUrl`

### isOwner Middleware

- **Description**: Checks if the logged-in user is the owner of a listing before allowing certain actions.
- **Usage**: Applied to routes requiring owner permissions.
- **Controller**: `isOwner`

### validateListing Middleware

- **Description**: Validates the input data for creating or updating a listing against the schema.
- **Usage**: Applied before creating or updating a listing.
- **Controller**: `validateListing`

### validateReview Middleware

- **Description**: Validates the input data for creating a review against the schema.
- **Usage**: Applied before creating a review.
- **Controller**: `validateReview`

### isReviewAuthor Middleware

- **Description**: Checks if the logged-in user is the author of a review before allowing deletion.
- **Usage**: Applied to routes requiring review deletion permissions.
- **Controller**: `isReviewAuthor`

# Mapbox Integration Documentation

Wander-Lust integrates Mapbox for interactive map functionality, allowing users to visualize travel destinations and activities on an interactive map interface. Below is a breakdown of the Mapbox integration code:


---

These controllers, routes, and middleware collectively provide the functionality to manage listings, interact with reviews, handle user authentication, and enforce access control within the Wander-Lust application.

## Future Enhancements

Looking ahead, Wander-Lust aims to enrich the user experience by implementing the following features:

- **Real-time Chat Functionality**: Foster community engagement by introducing real-time chat functionality, allowing users to connect, share travel tips, and exchange experiences.
- **Advanced Search Capabilities**: Empower users to discover relevant travel content more efficiently with advanced search capabilities, including filters for destinations, activities, and user-generated content.
- **Performance Optimization and Scalability**: Continuously optimize performance and scalability to accommodate growing user engagement and ensure a smooth and responsive user experience.

## Installation

To install Wander-Lust locally, follow these steps:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables as per the provided `.env.example` file.
4. Run the application using `npm start`.



## Usage

Once installed, you can use Wander-Lust to explore travel destinations, upload and manage images, and interact with other users. Refer to the [User Guide](user-guide.md) for detailed usage instructions.



---

Feel free to explore the repository, contribute to the project, or provide feedback to help us improve Wander-Lust and make it a better platform for travel enthusiasts worldwide! Happy travels! 🌍✈️
