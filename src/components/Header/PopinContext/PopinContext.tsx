import React, { createContext, useContext, useState } from "react";

interface PopinContextType {
  isPopinProfilOpen: boolean;
  isPopinUserOpen: boolean;
  openPopinProfil: () => void;
  openPopinUser: () => void;
}

const PopinContext = createContext<PopinContextType | undefined>(undefined);

export const usePopinContext = () => {
  const context = useContext(PopinContext);
  if (!context) {
    throw new Error("usePopinContext must be used within a PopinProvider");
  }
  return context;
};

export function PopinProvider({ children }: { children: React.ReactNode }) {
  const [isPopinProfilOpen, setIsPopinProfilOpen] = useState(false);
  const [isPopinUserOpen, setIsPopinUserOpen] = useState(false);

  const openPopinProfil = () => {
    setIsPopinProfilOpen(!isPopinProfilOpen);
    setIsPopinUserOpen(false);
  };

  const openPopinUser = () => {
    setIsPopinUserOpen(!isPopinUserOpen);
    setIsPopinProfilOpen(false);
  };

  const contextValue: PopinContextType = {
    isPopinProfilOpen,
    isPopinUserOpen,
    openPopinProfil,
    openPopinUser,
  };

  return (
    <PopinContext.Provider value={contextValue}>
      {children}
    </PopinContext.Provider>
  );
}
