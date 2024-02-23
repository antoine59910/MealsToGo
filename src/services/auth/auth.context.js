import React, { createContext, useContext, useEffect, useState } from "react";
import {
  signUpFirebase,
  signInFirebase,
  FIREBASE_AUTH,
  signOutUser,
} from "./auth.service";
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
      let message;
      switch (e.code) {
        case "auth/invalid-email":
          message = "email invalide";
          break;
        case "auth/invalid-credential":
          message = "Informations d'identification invalides";
          break;
        case "auth/user-not-found":
          message = "utilisateur inconnu";
          break;
        case "auth/wrong-password":
          message = "mot de passe incorrect";
          break;
        case "auth/missing-password":
          message = "mot de passe manquant";
          break;

        default:
          message = e.code.substring("auth/".length);
          break;
      }
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Les mots de passes ne sont pas identiques");
      return;
    }
    try {
      await signUpFirebase(email, password);
      // L'écouteur onAuthStateChanged va également gérer la mise à jour de l'utilisateur
    } catch (e) {
      let message;
      switch (e.code) {
        case "auth/invalid-email":
          message = "email invalide";
          break;
        case "auth/invalid-credential":
          message = "Informations d'identification invalides";
          break;
        case "auth/user-not-found":
          message = "utilisateur inconnu";
          break;
        case "auth/wrong-password":
          message = "mot de passe incorrect";
          break;
        case "auth/missing-password":
          message = "mot de passe manquant";
          break;

        default:
          message = e.code.substring("auth/".length);
          break;
      }
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    signOutUser();
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!currentUser,
        user: currentUser,
        isLoading,
        signUp,
        signIn,
        signOut,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
