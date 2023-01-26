import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDWUbaT4zUhxaNF5PkXTzk65PF1SA9rq5I",
    authDomain: "cooking-site-c3217.firebaseapp.com",
    projectId: "cooking-site-c3217",
    storageBucket: "cooking-site-c3217.appspot.com",
    messagingSenderId: "516170688803",
    appId: "1:516170688803:web:881afa6376972755280496"
};


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }
