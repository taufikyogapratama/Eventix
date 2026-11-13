import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Eventix",
    default: "Akun",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex justify-center items-center bg-background">
      {children}
    </div>
  );
};

export default AuthLayout;
