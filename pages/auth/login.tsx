import { LoginForm } from "@/components/auth/login/form";

export default function LogInPage() {
  return (
    <>
      <h1 className="title">Se connecter</h1>
      <div className="divider-solid w-1/3 m-2"></div>
      <LoginForm></LoginForm>
    </>
  );
};
