import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyDR8oSVIYpRkcId8JnC05yBpywAUoc2GR8",
    authDomain: "crwn-db-8fa98.firebaseapp.com",
    projectId: "crwn-db-8fa98",
    storageBucket: "crwn-db-8fa98.appspot.com",
    messagingSenderId: "428352748911",
    appId: "1:428352748911:web:6a708ff2b3cffdbf113c9a",
    measurementId: "G-L9G2JQDWM6"
};

firebase.initializeApp(config);
export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;