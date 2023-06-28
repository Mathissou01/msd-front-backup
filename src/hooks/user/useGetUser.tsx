import { useState, useEffect } from "react";
import { User } from "../../lib/user";
import { useRouter } from "next/router";

const useGetUser = (userId: string | null) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchUser = async () => {
    try {
      setLoading(true);

      if (userId) {
        const response = await fetch(`http://localhost:5000/user/${userId}`);
        if (!response.ok) {
          throw new Error("An error occurred");
        }
        const data = await response.json();
        setUser(data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(error);
      // TODO: redirect to error page
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const refetch = () => {
    fetchUser();
  };

  return { user, loading, refetch };
};

export default useGetUser;
