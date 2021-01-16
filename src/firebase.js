import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAK6mxbwdIzNwfOlkqGkyAfHPcyuKAPKto",
  authDomain: "whatsapp-72c22.firebaseapp.com",
  projectId: "whatsapp-72c22",
  storageBucket: "whatsapp-72c22.appspot.com",
  messagingSenderId: "832678523941",
  appId: "1:832678523941:web:760afc87b0124dc3683bcc",
  measurementId: "G-THKCHPK3XZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
