import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyBRZaE2JwErwXneBi15hAHsokXRce-ylgw",
  authDomain: "juscode-jssps.firebaseapp.com",
  databaseURL:
    "https://juscode-jssps-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "juscode-jssps",
  storageBucket: "juscode-jssps.firebasestorage.app",
  messagingSenderId: "698621435261",
  appId: "1:698621435261:web:132b075d0252034f060014",
  measurementId: "G-FH3EJKVVS5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LeLEX4rAAAAAHItbs3B6o9glrksDPae6oDNzbj9"),

  // Optional: Set to 'true' to only allow valid tokens.
  // This is recommended for production apps.
  isTokenAutoRefreshEnabled: true,
});
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db, analytics };
