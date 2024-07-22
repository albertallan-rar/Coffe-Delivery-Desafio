import { ShoppingCartSimple } from "@phosphor-icons/react";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { Link, NavLink } from "react-router-dom";
import { useCoffeeContext } from "../../../context/CoffeeContext";
import { ButtonLocation, ButtonShoppingCart, MenuButtons, MenuContainer, ShoppingCartItensCount } from "./styles";

export const Menu = () => {
  const { selectedCoffees } = useCoffeeContext();
  return (
    <MenuContainer>
      <Link to={"/"}>
        <img src="./logo_coffe_delivery.png" width={84} height={40} />
      </Link>
      <MenuButtons>
        <ButtonLocation>
          <MapPin size={20} color="#4b2995" weight="fill" />
          Porto Alegre, RS
        </ButtonLocation>
        <NavLink to="/checkout" title="Checkout">
          <ButtonShoppingCart>
            <ShoppingCartSimple size={24} color="#c47f17" weight="fill" onClick={() => console.log("CLICOU")} />
            {selectedCoffees.length !== 0 ? (
              <ShoppingCartItensCount>{selectedCoffees.length}</ShoppingCartItensCount>
            ) : null}
          </ButtonShoppingCart>
        </NavLink>
      </MenuButtons>
    </MenuContainer>
  );
};
