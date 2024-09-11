
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
  const [error, setError] = useState("");

  const handleSubmit = async () => {

    const res = await signIn("credentials", {
      redirect: false, // Pas de redirection automatique
      email: user.email,
      password: user.password,
    });

    if (res?.error) {
      setError("Identifiants incorrects");
    } else {
      router.push("/"); // Redirige après une connexion réussie
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
