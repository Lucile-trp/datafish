import { LoginForm } from "@/components/auth/login/form";
import { getServerSession, Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function LogInPage() {
  const [, setSession] = useState<Session | null>(null);

  useEffect(() => {
    getSession().then((res) => setSession(res));
  }, []);

  return (
    <>
      <h1 className="title">Se connecter</h1>
      <div className="divider-solid w-1/3 m-2"></div>
      <LoginForm></LoginForm>
    </>
  );
}
