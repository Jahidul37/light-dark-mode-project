import { GithubAuthProvider, GoogleAuthProvider, applyActionCode, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebse.config";

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()
    // const githubProvider = new GithubAuthProvider();

    // for google 
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // for github 
    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    // for register page
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // for login page
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //for  logout     \\\ r aita navber a hobe 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            // console.log(loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })
        return () =>
            unsubscribe();
    }, [])

    const authInfo = {
        user,
        signInWithGoogle,
        githubSignIn,
        createUser,
        signIn,
        logOut,
        loading,
        setLoading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;