import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCuLgwj6BJ_1kLXFGGh_pKNwZhM10uvmD4",
    authDomain: "practicevuejs-9ea7a.firebaseapp.com",
    projectId: "practicevuejs-9ea7a",
    storageBucket: "practicevuejs-9ea7a.appspot.com",
    messagingSenderId: "337141701499",
    appId: "1:337141701499:web:5217207cad022eaa797bde",
    measurementId: "G-2171FEB7WS"
};

initializeApp(firebaseConfig)

const db = getFirestore()

export { db }