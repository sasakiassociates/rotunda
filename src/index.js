import {initializeApp} from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {getFirestore, collection, getDocs, getDoc} from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyAeWL0_dSGP2HaBkmf34pfLPetuAE3r6WU",
    authDomain: "rotunda-2db4d.firebaseapp.com",
    databaseURL: "https://rotunda-2db4d-default-rtdb.firebaseio.com",
    projectId: "rotunda-2db4d",
    storageBucket: "rotunda-2db4d.appspot.com",
    messagingSenderId: "25291000074",
    appId: "1:25291000074:web:2c92a335a9d34ae993d2f3",
    measurementId: "G-PFP074N18J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in!');
    } else {
        console.log('no user logged in');
    }
});
// const analytics = getAna