// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
const firebaseConfig = {
    apiKey: "AIzaSyCVMwuHbz0q6UQ_zQ9NhMm0iXxgqHohVAU",
    authDomain: "my-notif-test-app.firebaseapp.com",
    projectId: "my-notif-test-app",
    storageBucket: "my-notif-test-app.firebasestorage.app",
    messagingSenderId: "110838896793",
    appId: "1:110838896793:web:d0cd83e0cc844305c58008",
    measurementId: "G-FGW7FE1YYB"
};


firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
