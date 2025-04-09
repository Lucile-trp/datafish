import BubblesBackground from "@/components/UI/Background_bubbles";
import { AuthForm } from "@/components/Users/AuthForm";

export default function Auth() {
  return (
    <div className="grid min-h-screen">
      <BubblesBackground></BubblesBackground>
      <main className="justify-center items-center flex">
        <AuthForm></AuthForm>
      </main>
    </div>
  );
}
