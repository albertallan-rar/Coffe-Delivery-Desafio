import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";

type Coffee = {
  id: string;
  name: string;
  description: string;
  value: number;
  image_url: string;
};

type SelectedCoffee = {
  coffee: Coffee;
  quantity: number;
};

type CoffeeContextType = {
  coffees: Coffee[];
  coffeeCounts: { [id: string]: number };
  selectedCoffees: SelectedCoffee[];
  incrementCount: (id: string) => void;
  decrementCount: (id: string) => void;
  incrementSelectedCoffee: (id: string) => void;
  decrementSelectedCoffee: (id: string) => void;
  addCoffeeToCart: (id: string) => void;
  removeCoffeeFromCart: (id: string) => void;
  updateSelectedCoffeeQuantity: (id: string) => void;
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

  const [selectedCoffees, setSelectedCoffees] = useState<SelectedCoffee[]>([]);

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

  const incrementSelectedCoffee = (id: string) => {
    setSelectedCoffees((prevSelected) => {
      const coffee = initialCoffees.find((coffee) => coffee.id === id);
      if (!coffee) return prevSelected;

      const existingCoffee = prevSelected.find((item) => item.coffee.id === id);
      if (existingCoffee) {
        return prevSelected.map((item) => (item.coffee.id === id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        return [...prevSelected, { coffee, quantity: 1 }];
      }
    });
  };

  const decrementSelectedCoffee = (id: string) => {
    setSelectedCoffees((prevSelected) => {
      const coffee = initialCoffees.find((coffee) => coffee.id === id);
      if (!coffee) return prevSelected;

      const existingCoffee = prevSelected.find((item) => item.coffee.id === id);
      if (existingCoffee) {
        const updatedQuantity = existingCoffee.quantity - 1;
        if (updatedQuantity <= 0) {
          return prevSelected.filter((item) => item.coffee.id !== id);
        } else {
          return prevSelected.map((item) => (item.coffee.id === id ? { ...item, quantity: updatedQuantity } : item));
        }
      }
      return prevSelected;
    });
  };

  const addCoffeeToCart = (id: string) => {
    const coffee = initialCoffees.find((coffee) => coffee.id === id);
    const toastId = toast.loading("Pedido sendo gerado ...");
    const quantity = coffeeCounts[id];
    if (coffee && quantity > 0) {
      setSelectedCoffees((prevSelected) => {
        const existingCoffee = prevSelected.find((item) => item.coffee.id === id);
        if (existingCoffee) {
          toast.update(toastId, {
            type: "success",
            isLoading: false,
            autoClose: 3000,
            render: `Quantidade de ${coffee.name} atualizada no carrinho!`,
          });
          return prevSelected.map((item) =>
            item.coffee.id === id ? { ...item, quantity: item.quantity + quantity } : item,
          );
        }
        toast.update(toastId, {
          type: "success",
          isLoading: false,
          autoClose: 3000,
          render: `${quantity} ${coffee.name} adicionado ao carrinho!`,
        });

        return [...prevSelected, { coffee, quantity }];
      });
      setCoffeeCounts((prevCounts) => ({
        ...prevCounts,
        [id]: 0,
      }));
    } else {
      toast.error("Selecione uma quantidade maior que 0");
    }
  };

  const removeCoffeeFromCart = (id: string) => {
    setSelectedCoffees((prevSelected) => prevSelected.filter((item) => item.coffee.id !== id));
    toast.success("Café removido do carrinho!");
  };

  const updateSelectedCoffeeQuantity = (id: string) => {
    setSelectedCoffees((prevSelected) => {
      const coffee = initialCoffees.find((coffee) => coffee.id === id);
      const quantity = coffeeCounts[id];
      if (!coffee) return prevSelected;

      if (quantity === 0) {
        return prevSelected.filter((item) => item.coffee.id !== id);
      }

      const existingCoffee = prevSelected.find((item) => item.coffee.id === id);
      if (existingCoffee) {
        return prevSelected.map((item) => (item.coffee.id === id ? { ...item, quantity } : item));
      } else {
        return [...prevSelected, { coffee, quantity }];
      }
    });
  };

  return (
    <CoffeeContext.Provider
      value={{
        coffees: initialCoffees,
        coffeeCounts,
        selectedCoffees,
        incrementCount,
        decrementCount,
        incrementSelectedCoffee,
        decrementSelectedCoffee,
        addCoffeeToCart,
        removeCoffeeFromCart,
        updateSelectedCoffeeQuantity,
      }}
    >
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
