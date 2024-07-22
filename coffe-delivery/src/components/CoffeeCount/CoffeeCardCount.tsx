import { Minus, Plus } from "@phosphor-icons/react";
import { useCoffeeContext } from "../../context/CoffeeContext";
import { CoffeeCardCountContainer } from "./styles";

interface CoffeeCardCountProps {
  coffeeId: string;
  finalizeOrder?: boolean;
}

export default function CoffeeCardCount({ coffeeId, finalizeOrder }: CoffeeCardCountProps) {
  const {
    coffeeCounts,
    incrementCount,
    decrementCount,
    incrementSelectedCoffee,
    decrementSelectedCoffee,
    selectedCoffees,
  } = useCoffeeContext();
  const selectedCoffee = selectedCoffees.find((item) => item.coffee.id === coffeeId);

  return (
    <div>
      {finalizeOrder ? (
        <CoffeeCardCountContainer>
          <button onClick={() => decrementSelectedCoffee(coffeeId)}>
            <Minus />
          </button>
          <span>{selectedCoffee?.quantity || 0}</span>
          <button onClick={() => incrementSelectedCoffee(coffeeId)}>
            <Plus />
          </button>
        </CoffeeCardCountContainer>
      ) : (
        <CoffeeCardCountContainer>
          <button onClick={() => decrementCount(coffeeId)}>
            <Minus />
          </button>
          <span>{coffeeCounts[coffeeId]}</span>
          <button onClick={() => incrementCount(coffeeId)}>
            <Plus />
          </button>
        </CoffeeCardCountContainer>
      )}
    </div>
  );
}
