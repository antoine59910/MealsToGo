import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCJNazUwnlANfWLsmC27l_3PjW61OJjQDM",
  authDomain: "mealstogo-324af.firebaseapp.com",
  projectId: "mealstogo-324af",
  storageBucket: "mealstogo-324af.appspot.com",
  messagingSenderId: "548266709429",
  appId: "1:548266709429:web:3717be61d5cc5615c849fc",
};

const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
