import { ShoppingCartSimple } from "@phosphor-icons/react";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { ButtonLocation, ButtonShoppingCart, MenuButtons, MenuContainer } from "./styles";

export const Menu = () => {
  return (
    <MenuContainer>
      <img src="./logo_coffe_delivery.png" width={84} height={40} />
      <MenuButtons>
        <ButtonLocation>
          <MapPin size={20} color="#4b2995" weight="fill" />
          Porto Alegre, RS
        </ButtonLocation>
        <ButtonShoppingCart>
          <ShoppingCartSimple size={20} color="#c47f17" weight="fill" onClick={() => console.log("CLICOU")} />
        </ButtonShoppingCart>
      </MenuButtons>
    </MenuContainer>
  );
};
