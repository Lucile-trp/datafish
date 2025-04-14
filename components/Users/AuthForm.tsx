"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { escapeHtmlEntities } from "@/lib/helpers/escapeHtmlEntities";

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [pseudo, setPseudo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email || !password || (!isLogin && !pseudo)) {
      setErrorMsg("Veuillez remplir tous les champs.");
      return;
    }

    if (isLogin) {
      const res = await signIn("credentials", {
        callbackUrl: "http://localhost:3000/",
        email,
        password,
      });

      if (res?.error) {
        setErrorMsg("Identifiants incorrects.");
      } else {
        router.refresh();
      }
    } else {
      try {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pseudo, email, password }),
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "Erreur serveur.");

        // Auto-login après inscription
        await signIn("credentials", {
          callbackUrl: "http://localhost:3000/",
          email,
          password,
        });

        router.refresh();
      } catch (err: unknown) {
        if (err instanceof Error) {
          setErrorMsg(err.message || "Erreur lors de l'inscription.");
        }
        setErrorMsg("Une erreur inconnue s'est produite");
      }
    }
  };

  return (
    <div className="max-w-md bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6">
      <h2 className="text-xl font-semibold text-white text-center mb-4">
        {isLogin ? "Connexion" : "Inscription"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <input
            type="text"
            placeholder="Pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        )}

        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        />

        {errorMsg && <p className="text-sm text-red-300">{errorMsg}</p>}

        <button
          type="submit"
          className="w-full py-2 bg-white/20 text-white font-medium rounded-xl hover:bg-white/30 transition"
        >
          {isLogin ? "Se connecter" : "Créer un compte"}
        </button>
      </form>

      <div className="mt-4 text-center text-sm text-white/70">
        {isLogin ? (
          <>
            Pas encore de compte ?{" "}
            <button
              onClick={() => setIsLogin(false)}
              className="text-white underline hover:text-white/90"
            >
              {escapeHtmlEntities("S'inscrire")}
            </button>
          </>
        ) : (
          <>
            Déjà inscrit ?{" "}
            <button
              onClick={() => setIsLogin(true)}
              className="text-white underline hover:text-white/90"
            >
              Se connecter
            </button>
          </>
        )}
      </div>
    </div>
  );
};
