import { createContext, useState, useContext, ReactNode } from "react";

interface CocktailContextType {
  cocktails: any[];
  setCocktails: React.Dispatch<React.SetStateAction<any[]>>;
}

const CocktailContext = createContext<CocktailContextType | undefined>(
  undefined
);

interface CocktailProviderProps {
  children: ReactNode;
}

export const CocktailProvider: React.FC<CocktailProviderProps> = ({
  children,
}) => {
  const [cocktails, setCocktails] = useState<any[]>([]);

  return (
    <CocktailContext.Provider value={{ cocktails, setCocktails }}>
      {children}
    </CocktailContext.Provider>
  );
};

export const useCocktailContext = () => {
  const context = useContext(CocktailContext);
  if (!context) {
    throw new Error(
      "useCocktailContext must be used within a CocktailProvider"
    );
  }
  return context;
};
