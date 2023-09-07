import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { IUser } from "../lib/user";
import useLogin from "./user/useLogin";
import { IAudience } from "../lib/audience";
import { Enum_Audience_Type } from "../graphql/codegen/generated-types";

interface UserContextValues {
  currentUser: IUser | null;
  setCurrentUser: Dispatch<SetStateAction<IUser | null>>;
  login: (email: string) => Promise<void>;
  logout: () => void;
  isLoading?: boolean;
  currentAudience: IAudience;
  setUserAudience: (audienceData: {
    id: string;
    type: Enum_Audience_Type;
  }) => void;
  getAudience: () => void;
}

export const useCurrentUser = (): UserContextValues => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error();
  }
  return context;
};

const UserContext = createContext<UserContextValues>({} as UserContextValues);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const { fetchUser } = useLogin();
  const [isLoading, setIsLoading] = useState(true);

  const [currentAudience, setCurrentAudience] = useState<IAudience>({
    id: "0",
  });

  const getStoredUser = async () => {
    setIsLoading(true);
    const storedUser = await localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getStoredUser();
  }, []);

  const login = async (email: string) => {
    setIsLoading(true);
    try {
      const user = await fetchUser(email);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setCurrentUser(user);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAudience = async () => {
    try {
      const audience = localStorage.getItem("audience");
      if (audience && audience !== "null") {
        setCurrentAudience(JSON.parse(audience));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const setUserAudience = async (audienceData: {
    id: string;
    type: Enum_Audience_Type;
  }) => {
    try {
      localStorage.setItem("audience", JSON.stringify(audienceData));
      setCurrentAudience(audienceData);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    getAudience();
  }, []);

  const contextValue: UserContextValues = {
    currentUser,
    setCurrentUser,
    login,
    logout,
    isLoading,
    setUserAudience,
    currentAudience,
    getAudience,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContext;
