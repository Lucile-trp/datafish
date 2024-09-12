// contexts/ErrorContext.js
import React, { createContext, useContext, useState } from "react";

// Création du contexte des erreurs
const ErrorContext = createContext();

// Provider pour le contexte des erreurs
export const ErrorProvider = ({ children }) => {
  const [errorMessages, setErrorMessages] = useState([]);

  // Fonction pour ajouter une nouvelle erreur
  const addError = (message) => {
    setErrorMessages((prev) => [...prev, message]);
  };

  // Fonction pour effacer toutes les erreurs
  const clearErrors = () => {
    setErrorMessages([]);
  };

  return (
    <ErrorContext.Provider value={{ errorMessages, addError, clearErrors }}>
      {children}
    </ErrorContext.Provider>
  );
};

// Hook pour utiliser le contexte des erreurs
export const useErrors = () => {
  return useContext(ErrorContext);
};
