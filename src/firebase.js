
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getFirestore, addDoc, collection } from "firebase/firestore"
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyArXZoie4BezNxtamgZAWKQ6cngyCZLi5w",
  authDomain: "netflix-clone-80375.firebaseapp.com",
  projectId: "netflix-clone-80375",
  storageBucket: "netflix-clone-80375.appspot.com",
  messagingSenderId: "47443197271",
  appId: "1:47443197271:web:98eb07fee38880f0761212"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signUp = async (name, email, password) => {
    try {
       const response = await createUserWithEmailAndPassword(auth, email, password)
       const user = response.user

       await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
       })
    } catch (error) {
        console.error(error )
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}


const login = async (email, password) => {
    try {
       await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.error(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))

    }
}

const logout = () => {
    signOut(auth)
}

export {
    auth,
    db,
    signUp,
    login,
    logout
}