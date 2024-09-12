/* eslint-disable react/no-unescaped-entities */
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { encryptionPassword } from "@/lib/bcypt";
import { User } from "@prisma/client";
import { useState } from "react";
const bcrypt = require("bcryptjs");

// TODO : Vérification de la disponibilité de l'email et du Pseudo

export const RegisterForm = () => {
  const [user, setUser] = useState<Partial<User>>({
    email: "",
    pseudo: "",
    password: "",
  });
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const { handleError } = useErrorHandler();

  async function Register(e: React.FormEvent) {
    e.preventDefault(); // Prevent page refresh on form submit

    // Input validation
    if (!user.email || !user.password || !user.pseudo) {
      handleError("Veuillez compléter tous les champs.");
      return;
    }

    if (user.password !== passwordConfirmation) {
      handleError("Les mots de passe ne correspondent pas.");
      return;
    }

    // user creation
    try {
      if (user.email && user.password && user.pseudo) {
        // INSERT USER
        const response = await fetch("/api/user/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...user,
          }),
        });

        if (!response.ok) {
          throw new Error("Erreur lors de la création du compte.");
        }
      }
    } catch (err: unknown) {
      const _errorMessage = "Une erreur inconnue est survenue";

      if (err instanceof Error) {
        handleError(err.message as string);
      } else {
        handleError(_errorMessage);
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="">
      <h1 className="title">Création de compte.</h1>
      <form className="flex flex-col" onSubmit={Register}>
        <label htmlFor="email">*Adresse email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email || ""}
          onChange={handleChange}
        />

        <label htmlFor="pseudo">Pseudo :</label>
        <input
          type="text"
          id="pseudo"
          name="pseudo"
          value={user.pseudo || ""}
          onChange={handleChange}
        />

        <label htmlFor="password">*Mot de passe :</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password || ""}
          onChange={handleChange}
        />

        <label htmlFor="passwordConfirmation">
          *Confirmation de votre mot de passe :
        </label>
        <input
          type="password"
          id="passwordConfirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <button type="submit" className="btn-primary">
          S'inscrire
        </button>
      </form>
    </div>
  );
};
