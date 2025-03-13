
import { AuthForm } from "@/components/auth/auth-form";

const SignIn = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-muted/30 px-4 py-12">
      <div className="mx-auto w-full max-w-md">
        <h1 className="mb-8 text-center text-2xl font-semibold tracking-tight">
          Welcome back to bcommune
        </h1>
        <AuthForm type="sign-in" />
      </div>
    </div>
  );
};

export default SignIn;
