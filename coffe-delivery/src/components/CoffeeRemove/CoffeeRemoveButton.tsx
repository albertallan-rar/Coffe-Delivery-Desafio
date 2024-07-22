import { Trash } from "@phosphor-icons/react";

import { useCoffeeContext } from "../../context/CoffeeContext";
import { CoffeeCardCountContainer } from "./styles";

type CoffeeRemoveButtonProps = {
  coffeeId: string;
};

export default function CoffeeRemoveButton({ coffeeId }: CoffeeRemoveButtonProps) {
  const { removeCoffeeFromCart } = useCoffeeContext();

  return (
    <CoffeeCardCountContainer>
      <Trash size={22} color="#8047F8" />
      <button onClick={() => removeCoffeeFromCart(coffeeId)}>Remover</button>
    </CoffeeCardCountContainer>
  );
}
