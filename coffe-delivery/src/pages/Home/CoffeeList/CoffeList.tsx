import CoffeeCard from "../../../components/CoffeeCard/CoffeeCard";
import { useCoffeeContext } from "../../../context/CoffeeContext";
import { CoffeeListCard, CoffeListContainer } from "./styles";

export default function CoffeeList() {
  const { coffees } = useCoffeeContext();

  return (
    <CoffeListContainer>
      <h1>Nossos Cafés</h1>

      <CoffeeListCard>
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            id={coffee.id}
            name={coffee.name}
            description={coffee.description}
            value={coffee.value}
            image_url={coffee.image_url}
          />
        ))}
      </CoffeeListCard>
    </CoffeListContainer>
  );
}
