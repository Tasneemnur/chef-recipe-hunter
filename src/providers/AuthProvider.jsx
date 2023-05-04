import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase_config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const gitHubLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }
    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }
    
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) =>{
            setUser(loggedUser);
            setLoading(false)
        })
        return ()=>{
             unsubscribe()
        }

     }, [])
    const authInfo = {
        loading,
        user,
        createUser,
        login,
        googleLogin,
        gitHubLogin,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;