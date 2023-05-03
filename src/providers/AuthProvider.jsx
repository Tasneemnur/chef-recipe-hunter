import React, { createContext } from 'react';
import app from '../firebase/firebase_config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const login = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const AuthProvider = ({children}) => {
    const authInfo = {
        login
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