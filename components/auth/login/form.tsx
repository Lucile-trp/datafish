import { useErrorHandler } from "@/hooks/useErrorHandler";
import { fetchAPI } from "@/lib/fetchers/fetchAPI";
import { User } from "@prisma/client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export const LoginForm = () => {
  const [user, setUser] = useState<Partial<User>>({
    email: "",
    password: "",
  });
  const router = useRouter();
  const { handleError } = useErrorHandler();

  const handleSubmit = async () => {
    // TODO : Englober dans un Try Catch qui permettra de récupérer les erreurs de next auth
    // const res = await signIn("credentials", {
    //   redirect: false, // Pas de redirection automatique
    //   email: user.email,
    //   password: user.password,
    // });
    // console.log("result : ", res);

    // if (res?.error) {
    //   setError("Identifiants incorrects");
    // } else {
    //   router.push("/"); // Redirige après une connexion réussie
    // }

    if (user.email === "" || user.password === "") {
      handleError("Veuillez completer tout les champs");
    }

    try {
      const result = await signIn("credentials", {
        redirect: false, // Pas de redirection automatique
        email: user.email,
        password: user.password,
      });
      console.log(result);
      if (!result?.ok) {
        handleError("Login failed: " + result?.error);
      }
    } catch (err) {
      handleError("Error: " + err);
      console.log("error login : ", err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <form className="flex flex-col" method="post">
      <label htmlFor="email">*Adresse email :</label>
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => handleChange(e)}
      ></input>

      <label htmlFor="password">*Mot de passe :</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={(e) => handleChange(e)}
      ></input>

      <div onClick={handleSubmit}>Se connecter</div>
    </form>
  );
};
