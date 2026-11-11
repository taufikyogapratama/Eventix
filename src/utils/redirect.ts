import { redirect } from "next/navigation";

const Redirect = (path: string) => {
  redirect(path);
};

export default Redirect;
