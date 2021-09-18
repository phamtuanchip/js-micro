import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyDE2eJn8UALUHaqABS-hSsXqd1cJ8x-ifo",
  authDomain: "js-micro.firebaseapp.com",
  projectId: "js-micro",
  storageBucket: "js-micro.appspot.com",
  messagingSenderId: "652147539143",
  appId: "1:652147539143:web:718eaa006bcafea9e812e2",
  measurementId: "G-HWV6QYXLTF"
};

firebase.initializeApp(config);

export default firebase.firestore();
