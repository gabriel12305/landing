// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbrjcW6me89_U-CA0zfstlQFCXBqUrfpQ",
    authDomain: "landing-b1c24.firebaseapp.com",
    projectId: "landing-b1c24",
    storageBucket: "landing-b1c24.firebasestorage.app",
    messagingSenderId: "119262944285",
    appId: "1:119262944285:web:be0d6f8e53cd942fc93af4",
    measurementId: "G-1T45SC7R1E"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

import { initializeApp } from "https://www.gstatic.com/firebasejs/x.y.z/firebase-app.js";
import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/x.y.z/firebase-database.js";

const saveVote = (productID) => {
        // Obtener referencia a la colección votes
        const votesRef = ref(database, 'votes');
        
        // Crear nueva referencia para un usuario
        const newVoteRef = push(votesRef);
        return set(newVoteRef, {
            productID: productID,
            timestamp: Date.now()
        })
        .then(() => {
            return{
                status: true,
                message: "Vote saved successfully"
            }
        })
        .catch((error) => {
            console.error("Error saving vote: ", error);
            return{
                status: false,
                message: "Error saving vote"
            }
        });
}

// Exportar la función
export { saveVote };