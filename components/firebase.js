// database/firebaseDb.js
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
require("dotenv").config();
console.log(process.env.apiKey);
const firebaseConfig = {
    apiKey: process.env.apiKey;
    authDomain: "medapp-91193.firebaseapp.com",
    projectId: "medapp-91193",
    storageBucket: "medapp-91193.appspot.com",
    messagingSenderId: "818845539817",
    appId: "1:818845539817:web:9e9a88788ec671a1113f78",
    measurementId: "G-QCLKMY2Z0F"
};
firebase.initializeApp(firebaseConfig);
export default firebase;