import { useState } from "react";
import { IUser } from "../../lib/user";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async (email: string) => {
    setIsLoading(true);
    setError(null);

    // Effectuer les étapes de connexion ici, par exemple, effectuer une requête API
    return fetch(`${process.env.NEXT_PUBLIC_USER_API_URL}/users/email/${email}`)
      .then((response) => response.json())
      .then((data: IUser) => {
        localStorage.setItem("token", data?.email);
        return data;
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        return null;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isLoading, error, fetchUser };
};

export default useLogin;
