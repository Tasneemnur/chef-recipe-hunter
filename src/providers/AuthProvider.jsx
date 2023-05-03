import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase_config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () =>{
        return signInWithPopup(auth, provider)
    }
    const gitHubLogin = () =>{
        return signInWithPopup(auth, gitHubProvider)
    }
    const logout = () => {
        return signOut(auth)
    }
    
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) =>{
            console.log(loggedUser)
            setUser(loggedUser)
        })
        return ()=>{
             unsubscribe()
        }

     }, [])
    const authInfo = {
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