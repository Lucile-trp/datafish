// hooks/useErrorHandler.js
import { useErrors } from "../contexts/ErrorContext";
import { toast } from "react-toastify";

export const useErrorHandler = () => {
  const { addError, clearErrors, errorMessages } = useErrors();

  const handleError = (error) => {
    let message = '';

    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === "string") {
      message = error;
    }
    
    // Ajouter l'erreur au contexte global
    addError(message);
    
    // Afficher une notification toast
    toast.error(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return {
    handleError,
    clearErrors,
    errorMessages,
  };
};
