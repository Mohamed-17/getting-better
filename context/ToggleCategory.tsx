"use client";
import React, { createContext, useContext, useState } from "react";

const ToggleCategoryContext = createContext<{
  category: string;
  setCategory: (category: string) => void;
}>({
  category: "all",
  setCategory: (category: string) => {},
});
function ToggleCategory({ children }: { children: React.ReactNode }) {
  const [category, setCategory] = useState<string>("all");

  return (
    <ToggleCategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </ToggleCategoryContext.Provider>
  );
}

export const useToggleCategory = () => {
  const context = useContext(ToggleCategoryContext);
  if (!context)
    throw new Error("useToggleCategory must be used within a ToggleCategory");
  return context;
};

export default ToggleCategory;
