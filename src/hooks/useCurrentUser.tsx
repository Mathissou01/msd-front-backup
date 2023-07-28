import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../lib/user";
import { IAudience } from "../lib/audience";
import { Enum_Audience_Type } from "../graphql/codegen/generated-types";

interface UserContextValues {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
  login: () => void;
  logout: () => void;
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
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentAudience, setCurrentAudience] = useState<IAudience>({
    id: "0",
  });

  const getUser = async () => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser && storedUser !== "null") {
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error(error);
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

  const login = () => {
    const user = {
      id: "1",
      email: "john.doe@gmail.com",
      firstname: "John",
      lastname: "Doe",
      activeCounter: true,
      householdSize: 1,
      userType: "particular",
      dwellingType: "house",
      addressLabel: "1 rue de la paix, 75000 Paris",
    };
    setCurrentUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getAudience();
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const contextValue: UserContextValues = {
    currentUser,
    setCurrentUser,
    login,
    logout,
    setUserAudience,
    currentAudience,
    getAudience,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContext;
