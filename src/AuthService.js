// src/AuthService.js
import { auth } from './firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

export const registerWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const loginWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
};

export const logout = () => {
    return signOut(auth);
};
