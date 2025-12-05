import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSOYzR0SzGI_sszKDOBYPaLX5_ZLWPMeI",
  authDomain: "chatooai.firebaseapp.com",
  databaseURL:
    "https://chatooai-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatooai",
  storageBucket: "chatooai.firebasestorage.app",
  messagingSenderId: "730182896787",
  appId: "1:730182896787:web:0cbef86b480e9eaeced166",
  measurementId: "G-RQ127ML26X",
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
export const db = getFirestore(app);

export async function saveUser(data: {
  email: string;
  name: string;
  type: string;
  phone: string;
  idea?: string;
}) {
  try {
    const docRef = await addDoc(collection(db, "waitlist"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { success: false, error: e };
  }
}
