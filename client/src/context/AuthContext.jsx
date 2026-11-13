import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth, googleProvider, isFirebaseConfigured } from '../firebase/firebase.js';
import { getFriendlyAuthErrorMessage } from '../utils/errorUtils.js';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If Firebase is not configured yet, stop loading and retain null user
    if (!isFirebaseConfigured || !auth) {
      setLoading(false);
      return;
    }

    // Subscribe to Firebase auth state changes
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      },
      (authError) => {
        console.error('[AuthContext] Auth state change error:', authError);
        setError(getFriendlyAuthErrorMessage(authError));
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    setError(null);

    if (!isFirebaseConfigured || !auth || !googleProvider) {
      const missingConfigError = getFriendlyAuthErrorMessage('auth/config-missing');
      setError(missingConfigError);
      throw new Error(missingConfigError);
    }

    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      return result.user;
    } catch (err) {
      const friendlyMessage = getFriendlyAuthErrorMessage(err);
      setError(friendlyMessage);
      throw new Error(friendlyMessage);
    }
  };

  const logout = async () => {
    setError(null);
    if (!auth) {
      setUser(null);
      return;
    }

    try {
      await firebaseSignOut(auth);
      setUser(null);
    } catch (err) {
      const friendlyMessage = getFriendlyAuthErrorMessage(err);
      setError(friendlyMessage);
      throw new Error(friendlyMessage);
    }
  };

  const clearError = () => setError(null);

  const value = {
    user,
    loading,
    error,
    loginWithGoogle,
    logout,
    clearError,
    isFirebaseConfigured,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
