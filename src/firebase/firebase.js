import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDx6Qw-6vMIpV_JainO01ONPu2-Uy_ZTMs",
    authDomain: "twitter-clone-83ce4.firebaseapp.com",
    projectId: "twitter-clone-83ce4",
    storageBucket: "twitter-clone-83ce4.appspot.com",
    messagingSenderId: "269997890870",
    appId: "1:269997890870:web:a3bd036cf65acdaad0e797",
    measurementId: "G-TVK5YHHLBT"
};

const fireBaseApp = firebase.initializeApp(firebase);
const db = fireBaseApp.firestore();

export default db;