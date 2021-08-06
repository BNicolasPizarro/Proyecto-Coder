import firebase from "firebase/app";
import 'firebase/firestore';

import 'firebase/firestore';
const app = firebase.initializeApp ({
    apiKey: "AIzaSyClqkwEKkGHMVTvBA-Ktz4AMF2RAptYDkI",
    authDomain: "coderhouse-ecommerce-90147.firebaseapp.com",
    projectId: "coderhouse-ecommerce-90147",
    storageBucket: "coderhouse-ecommerce-90147.appspot.com",
    messagingSenderId: "668514832588",
    appId: "1:668514832588:web:c82822226f66ee6a907269",
    measurementId: "G-MMQRJVKHVR"
});
export function getFirebase(){
    return app;
}
export function getFirestore(){
 return firebase.firestore(app)
}