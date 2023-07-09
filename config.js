import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBZASkPOqT04k3CFtS6BVSwiWtqqBOgvxY",
  authDomain: "e-ride-2-876ca.firebaseapp.com",
  projectId: "e-ride-2-876ca",
  storageBucket: "e-ride-2-876ca.appspot.com",
  messagingSenderId: "526378953154",
  appId: "1:526378953154:web:174887f900b48d72df0e5b"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
