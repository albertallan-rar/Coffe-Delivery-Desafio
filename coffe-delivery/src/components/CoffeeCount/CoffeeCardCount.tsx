import { Minus, Plus } from "@phosphor-icons/react";
import { useCoffeeContext } from "../../context/CoffeeContext";
import { CoffeeCardCountContainer } from "./styles";

interface CoffeeCardCountProps {
  coffeeId: string;
}

export default function CoffeeCardCount({ coffeeId }: CoffeeCardCountProps) {
  const { coffeeCounts, incrementCount, decrementCount } = useCoffeeContext();
  return (
    <CoffeeCardCountContainer>
      <button onClick={() => decrementCount(coffeeId)}>
        <Minus />
      </button>
      <span>{coffeeCounts[coffeeId]}</span>
      <button onClick={() => incrementCount(coffeeId)}>
        <Plus />
      </button>
    </CoffeeCardCountContainer>
  );
}
