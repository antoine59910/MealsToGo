import React, { createContext, useContext, useEffect, useState } from "react";
import { signUpFirebase, signInFirebase, FIREBASE_AUTH } from "./auth.service";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //Permet d'avoir un "listner" qui permet de checker s'il y a un changement sur l'utilisateur
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        // L'utilisateur est connecté
        setCurrentUser(user);
      } else {
        // L'utilisateur est déconnecté
        setCurrentUser(null);
      }
      setIsLoading(false); // Important de mettre à jour le chargement ici
    });

    // Nettoyer l'abonnement lors de la désinscription du composant
    return () => unsubscribe();
  }, []);

  const signIn = async (email, password) => {
    setIsLoading(true);
    try {
      await signInFirebase(email, password);
      // L'écouteur onAuthStateChanged va gérer la mise à jour de l'utilisateur
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email, password) => {
    setIsLoading(true);
    try {
      await signUpFirebase(email, password);
      // L'écouteur onAuthStateChanged va également gérer la mise à jour de l'utilisateur
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!currentUser,
        user: currentUser,
        isLoading,
        signUp,
        signIn,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
