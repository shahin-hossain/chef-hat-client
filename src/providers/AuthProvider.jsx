import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //user register
    const userRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //user login
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    //login with Google
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    //login with github
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }
    //user logout
    const logOut = () => {
        return signOut(auth);
    }
    //on auth state changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            setLoading(false)
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
        loading,
        userRegister,
        userLogin,
        logOut,
        setUserProfile,
        googleLogin,
        githubLogin
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