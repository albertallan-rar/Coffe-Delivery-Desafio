import { ShoppingCartSimple } from "@phosphor-icons/react";
import CoffeeCardCount from "../CoffeeCount/CoffeeCardCount";
import {
  CoffeCardBuyButton,
  CoffeeCardButtons,
  CoffeeCardContainer,
  CoffeeCardInformation,
  CoffeeCardPrice,
} from "./styles";

interface CoffeeCardProps {
  id: string;
  image_url: string;
  name: string;
  description: string;
  value: number;
}

export default function CoffeeCard({ id, description, name, value, image_url }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={image_url} alt="" />
      <CoffeeCardInformation>
        <span>Tradicional</span>
        <h1>{name}</h1>
        <p>{description}</p>
      </CoffeeCardInformation>
      <CoffeeCardButtons>
        <span>
          R$ <CoffeeCardPrice> {value}</CoffeeCardPrice>
        </span>
        <CoffeeCardCount coffeeId={id} />
        <CoffeCardBuyButton>
          <ShoppingCartSimple size={22} weight="fill" color="#FFFFFF" />
        </CoffeCardBuyButton>
      </CoffeeCardButtons>
    </CoffeeCardContainer>
  );
}
