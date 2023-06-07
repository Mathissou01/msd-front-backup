import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

//TODO: Move the interface to a another folder
interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  activeMeters: boolean;
  streetNumber: number;
  streetName: string;
  postalCode: string;
  city: string;
  dwellingType: string;
  userType: string;
  householdSize: number;
}

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
  const [currentUser, setCurrentUser] = useState<User | null>(null);

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
