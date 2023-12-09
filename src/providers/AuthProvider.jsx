import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    //user register
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //user login
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //login with Google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    //user logout
    const logOut = () => {
        return signOut(auth);
    }
    //on auth state changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
        });
        return () => {
            unsubscribe()
        }
    }, [])

    // user name & photo update

    const setUserProfile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
            .then(() => { })
            .catch(error => console.error(error))
    }
    const authInfo = {
        user,
        userRegister,
        userLogin,
        logOut,
        setUserProfile,
        googleLogin
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;