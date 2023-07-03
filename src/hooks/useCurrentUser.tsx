import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../lib/user";

interface UserContextValues {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
  login: () => void;
  logout: () => void;
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
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const contextValue: UserContextValues = {
    currentUser,
    setCurrentUser,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContext;
