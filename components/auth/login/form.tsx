import { passwordVerify } from "@/lib/bcypt";
import { fetchAPI } from "@/lib/fetchers/fetchAPI";
import { User } from "@prisma/client";
import { useState } from "react";

export const LoginForm = () => {
  const [user] = useState<Partial<User>>({
    email: "",
    password: "",
  });

  async function Login() {
    try {
      // Vérifier si l'utilisateur existe via une requête GET à l'API
      const userExistResponse = await fetch("/api/user/get?email=" + user.email, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET"
      });
  
      // Convertir la réponse en JSON
      const userExist = await userExistResponse.json();
  
      // Si l'utilisateur existe
      if (userExist) {
        // Vérifier si le mot de passe correspond (via une API POST par exemple)
        const isMatch = await passwordVerify(user.email as string, user.password as string)
  
  
        // Si le mot de passe est correct
        if (isMatch) {
          console.log("Connexion réussie");
  
          // TODO: Rediriger vers la page de profil (ex: avec window.location.href)
          window.location.href = "/profil";
        } else {
          console.log("Mot de passe incorrect");
        }
      } else {
        console.log("Utilisateur inconnu");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion", error);
    }
  }
  

  return (
    <form className="flex flex-col">
      <label htmlFor="email">*Adresse email :</label>
      <input
        type="text"
        id="email"
        onChange={(e) => (user.email = e.target.value)}
      ></input>

      <label htmlFor="p1">*Mot de passe :</label>
      <input
        type="password"
        id="p1"
        onChange={(e) => (user.password = e.target.value)}
      ></input>

      <div onClick={Login}>Se connecter</div>
    </form>
  );
};
