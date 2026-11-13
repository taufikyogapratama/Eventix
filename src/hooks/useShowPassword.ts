import { useState } from "react";

const useShowPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPw = () => {
    setShowPassword(!showPassword);
  };
  return { showPassword, handleShowPw };
};

export default useShowPassword;
