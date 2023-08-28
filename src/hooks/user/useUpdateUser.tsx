import { IUser } from "../../lib/user";
import { useCurrentUser } from "../useCurrentUser";

const useUpdateUser = (userId: string) => {
  const { login } = useCurrentUser();
  const updateUser = async (data: Partial<IUser>, refetch?: () => void) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_USER_API_URL}/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok && refetch) {
        refetch();
      }
      if (response.ok && data.email) {
        login(data.email);
      }
      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      return true;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { updateUser };
};

export default useUpdateUser;
