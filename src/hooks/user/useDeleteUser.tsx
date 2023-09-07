import { useRouter } from "next/router";
import { useState } from "react";
import { useCurrentUser } from "../useCurrentUser";

export default function useDeleteUser(): {
  isLoading: boolean;
  deleteUser: (userId: string) => void;
} {
  const router = useRouter();
  const { logout } = useCurrentUser();
  const [isLoading, setIsLoading] = useState(false);

  const deleteUser = (userId: string) => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_USER_API_URL}/users/${userId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        logout();
        localStorage.removeItem("showModal");
        router.push("/");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isLoading, deleteUser };
}
