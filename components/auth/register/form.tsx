/* eslint-disable react/no-unescaped-entities */
import { fetchAPI } from "@/lib/fetchers/fetchAPI";
import { User } from "@prisma/client";
import { useState } from "react";

export const RegisterForm = () => {
  const [user] = useState<Partial<User>>({
    email: "",
    pseudo: "",
    password: "",
  });
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  async function Register() {
    console.log("user", user);
   
    if (user.email && user.password && user.pseudo) {
      const result = await fetchAPI("/api/user/create", {
        method: "POST",
        body: JSON.stringify(user),
      });

      console.log(result);
    }

    // If all ok, send to API
  }

  // TODO
  // function vérification dispo email & pseudo
  // Function vérification password & confirmation
  // function vérification diff password

  return (
    <div className="">
      <h1 className="title">Création de compte.</h1>
      <form className="flex flex-col">
        <label htmlFor="email">*Adresse email :</label>
        <input
          type="text"
          id="email"
          onChange={(e) => (user.email = e.target.value)}
        ></input>

        <label htmlFor="pseudo">pseudo :</label>
        <input
          type="text"
          id="pseudo"
          onChange={(e) => (user.pseudo = e.target.value)}
        ></input>

        <label htmlFor="p1">*Mot de passe :</label>
        <input
          type="password"
          id="p1"
          onChange={(e) => (user.password = e.target.value)}
        ></input>

        <label htmlFor="p2">*Confirmation de votre mot de passe :</label>
        <input
          type="password"
          id="p2"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        ></input>

        <div onClick={Register}>S'inscrire</div>
      </form>
    </div>
  );
};
