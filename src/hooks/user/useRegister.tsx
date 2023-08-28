import { useState } from "react";
import { IUser } from "../../lib/user";

export default function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addUser = async (user: Partial<IUser>) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_USER_API_URL}/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        },
      );

      if (!response.ok) {
        console.error(response);
      }

      const newUser = await response.json();
      setIsLoading(false);
      return newUser; // Return the newly added user object
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      throw error; // Re-throw the error to let the caller handle it
    }
  };

  return { isLoading, error, addUser };
}
