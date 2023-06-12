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
  const [currentUser, setCurrentUser] = useState<User | null>({
    id: "1",
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@exemple.fr",
    activeCounter: true,
    activationDate: new Date("01/01/2023"),
    streetNumber: 1,
    streetName: "rue de la paix",
    postalCode: "75000",
    city: "Paris",
    dwellingType: "house",
    userType: "particular",
    householdSize: 4,
  });

  useEffect(() => {
    // TODO: fetch user from API and stock it in sessionStorage
    const storedUser = sessionStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const contextValue: UserContextValues = {
    currentUser,
    setCurrentUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContext;
