// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi3tm8c9qauTFW5Qn4wGIXVxJ-OAaqiZ4",
  authDomain: "healthtracker-28a64.firebaseapp.com",
  projectId: "healthtracker-28a64",
  storageBucket: "healthtracker-28a64.appspot.com",
  messagingSenderId: "319385273685",
  appId: "1:319385273685:web:ccc1361d73123fbb7fdbdc",
  measurementId: "G-FWS0TETV8V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});