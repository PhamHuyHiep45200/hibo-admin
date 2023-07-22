import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// ... other firebase imports

export const firebaseApp = initializeApp({
  // your application settings
  apiKey: "AIzaSyBvWYTX8NtJ0OIE7OF2kK2VWHqrX_7lNlg",
  authDomain: "hibofoods.firebaseapp.com",
  projectId: "hibofoods",
  storageBucket: "hibofoods.appspot.com",
  messagingSenderId: "178270178027",
  appId: "1:178270178027:web:77d8e3beb9031ef770ccae",
  measurementId: "G-JP3NG7LB1S",
});

// used for the firestore refs
const db = getFirestore(firebaseApp);

// here we can export reusable database references
export const todosRef = collection(db, "todos");
