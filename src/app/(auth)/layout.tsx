const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex justify-center items-center bg-background">
      {children}
    </div>
  );
};

export default AuthLayout;
