// CoffeeContext.tsx
import { createContext, ReactNode, useContext, useState } from "react";

type Coffee = {
  id: string;
  name: string;
  description: string;
  value: number;
  image_url: string;
};

type CoffeeContextType = {
  coffees: Coffee[];
  coffeeCounts: { [id: string]: number };
  incrementCount: (id: string) => void;
  decrementCount: (id: string) => void;
};

const CoffeeContext = createContext<CoffeeContextType | undefined>(undefined);

type CoffeeProviderProps = {
  children: ReactNode;
  initialCoffees: Coffee[];
};

export const CoffeeProvider = ({ children, initialCoffees }: CoffeeProviderProps) => {
  const [coffeeCounts, setCoffeeCounts] = useState<{ [id: string]: number }>(
    initialCoffees.reduce((acc, coffee) => {
      acc[coffee.id] = 0;
      return acc;
    }, {} as { [id: string]: number }),
  );

  const incrementCount = (id: string) => {
    setCoffeeCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  const decrementCount = (id: string) => {
    setCoffeeCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max(prevCounts[id] - 1, 0),
    }));
  };

  return (
    <CoffeeContext.Provider value={{ coffees: initialCoffees, coffeeCounts, incrementCount, decrementCount }}>
      {children}
    </CoffeeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCoffeeContext = () => {
  const context = useContext(CoffeeContext);
  if (context === undefined) {
    throw new Error("useCoffeeContext must be used within a CoffeeProvider");
  }
  return context;
};
