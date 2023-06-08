import { useState, useEffect } from "react";

interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  streetNumber: string;
  streetName: string;
  city: string;
  postalCode: string;
  dwellingType: string;
  userType: string;
  createdAt: string;
  householdSize: number;
}

const useGetUser = (userId: string | null) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

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
