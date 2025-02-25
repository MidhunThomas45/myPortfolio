import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC2j-k0nlXoKhKvnPoUzAYx9Q8hzLv8jsU",
    authDomain: "myportfolio-6c08e.firebaseapp.com",
    projectId: "myportfolio-6c08e",
    storageBucket: "myportfolio-6c08e.firebasestorage.app",
    messagingSenderId: "172402869778",
    appId: "1:172402869778:web:14f8f5f955ca0f7262bacb",
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };