import * as firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGcn94oJf3A5YF3GvW6WwNepZCsaWgt2M",
  authDomain: "react-native-tutorial-37428.firebaseapp.com",
  projectId: "react-native-tutorial-37428",
  storageBucket: "react-native-tutorial-37428.appspot.com",
  messagingSenderId: "159304417921",
  appId: "1:159304417921:web:f6ea28baaabbfc8cc74380",
  measurementId: "G-5N6VZTDSWE",
};

export default firebase.initializeApp(firebaseConfig);
