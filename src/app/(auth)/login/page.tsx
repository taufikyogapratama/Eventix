// export default function LoginPage() {
//   return (
//     <form>
//       <label htmlFor="email">Email:</label>
//       <input id="email" name="email" type="email" required />
//       <label htmlFor="password">Password:</label>
//       <input id="password" name="password" type="password" required />
//       <button formAction={signin}>Login</button>
//     </form>
//   );
// }
"use server";
import LoginForm from "./LoginForm";

const LoginPage = async () => {
  return (
    <main>
      <h1 className="text-foreground font-bold text-[1.75rem] text-center mb-4">
        Masuk ke Akunmu
      </h1>
      <p className="font-normal text-mutedCS text-base text-center mb-5">
        Masuk untuk mengelola tiket dan
        <br className="md:hidden" /> acara favoritmu.
      </p>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
