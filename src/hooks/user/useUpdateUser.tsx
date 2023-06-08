import { User } from "../../lib/user";

const useUpdateUser = (url: string, userId: string) => {
  const updateUser = async (data: Partial<User>, refetch?: () => void) => {
    try {
      const response = await fetch(`${url}/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok && refetch) {
        refetch();
      }
      if (!response.ok) {
        throw new Error("Failed to update user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { updateUser };
};

export default useUpdateUser;
