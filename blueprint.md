
# FCM Push Notification Tester

## Overview

A simple yet powerful Angular web application designed to act as a receiver for Firebase Cloud Messaging (FCM) push notifications. This tool is perfect for developers who need to test their FCM backend implementation, ensuring that messages are correctly sent and received. It provides a real-time display of incoming notifications, showing the raw JSON payload and a user-friendly notification view.

## Implemented Features

### Styling & Design
- **Modern & Clean UI:** A visually appealing interface with a focus on clarity and ease of use.
- **Responsive Layout:** The application is fully responsive and works seamlessly on both desktop and mobile devices.
- **Light & Dark Mode:** Automatic theme switching based on the user's system preference.
- **Glassmorphism Effects:** Subtle blur and transparency effects to create a sense of depth and hierarchy.
- **Iconography:** Use of modern icons to enhance user experience and visual communication.

### Application
- **FCM Integration:** The application is fully integrated with Firebase Cloud Messaging.
- **Token Display:** The user's FCM registration token is prominently displayed for easy use in backend testing.
- **Real-time Notifications:** Incoming notifications are displayed in real-time without needing to refresh the page.
- **JSON Payload Viewer:** A detailed view of the raw JSON payload for each notification.
- **Notification History:** A log of all received notifications for easy reference and debugging.

## Current Plan

### Phase 1: Foundational Setup & Firebase Integration

- **Objective**: To establish the basic project structure and integrate Firebase for push notifications.
- **Steps**:
    1.  **Initialize Project**: Set up a new standalone Angular application with modern best practices.
    2.  **Install Dependencies**: Add `@angular/fire` and `firebase` to the project.
    3.  **Configure Firebase**: Set up the environment with the user's Firebase project credentials.
    4.  **Create Messaging Service**: Implement a service to handle FCM token retrieval and message listeners.
    5.  **Develop Core UI**: Build the main application component to display the FCM token and incoming message payloads.
    6.  **Initial Styling**: Apply basic styles for a clean and readable layout.
