import { NavLink } from "react-router-dom";
import CoffeeCardCount from "../../../components/CoffeeCount/CoffeeCardCount";
import CoffeeRemoveButton from "../../../components/CoffeeRemove/CoffeeRemoveButton";
import { useCoffeeContext } from "../../../context/CoffeeContext";
import {
  ConfirmButton,
  OrderInformationAlert,
  OrderInformationCoffeeDetails,
  OrderInformationCoffeeImage,
  OrderInformationCoffeeItem,
  OrderInformationCoffeeName,
  OrderInformationCoffeeOption,
  OrderInformationCoffeePrice,
  OrderInformationCoffeIndetIdentification,
  OrderInformationCoffeList,
  OrderInformationContainer,
  OrderInformationTitle,
  Summary,
  SummaryItem,
  SummaryLabel,
  SummaryTotalPrice,
  SummaryValue,
} from "./style";

export default function OrderInformation() {
  const { selectedCoffees } = useCoffeeContext();
  console.log("SELECT", selectedCoffees);

  // Calcular o total de itens e o preço total
  const totalItemsPrice = selectedCoffees.reduce((total, selectedCoffee) => {
    return total + selectedCoffee.coffee.value * selectedCoffee.quantity;
  }, 0);

  const deliveryFee = 3.5;
  const totalPrice = totalItemsPrice + deliveryFee;
  return (
    <OrderInformationContainer>
      <OrderInformationTitle>Cafés Selecionados</OrderInformationTitle>

      <OrderInformationCoffeList>
        {selectedCoffees.length === 0 ? (
          <OrderInformationAlert>Não existe café na lista</OrderInformationAlert>
        ) : (
          selectedCoffees.map((selectedCoffee) => (
            <OrderInformationCoffeeItem key={selectedCoffee.coffee.id}>
              <OrderInformationCoffeIndetIdentification>
                <OrderInformationCoffeeImage src={selectedCoffee.coffee.image_url} alt="" width={64} />
                <OrderInformationCoffeeDetails>
                  <OrderInformationCoffeeName>{selectedCoffee.coffee.name}</OrderInformationCoffeeName>
                  <OrderInformationCoffeeOption>
                    <CoffeeCardCount coffeeId={selectedCoffee.coffee.id} finalizeOrder />

                    <CoffeeRemoveButton coffeeId={selectedCoffee.coffee.id} />
                  </OrderInformationCoffeeOption>
                </OrderInformationCoffeeDetails>
              </OrderInformationCoffeIndetIdentification>
              <OrderInformationCoffeePrice>R$ {selectedCoffee.coffee.value.toFixed(2)}</OrderInformationCoffeePrice>
            </OrderInformationCoffeeItem>
          ))
        )}

        <Summary>
          <SummaryItem>
            <SummaryLabel>Total de itens</SummaryLabel>
            <SummaryValue>R$ {totalItemsPrice.toFixed(2)}</SummaryValue>
          </SummaryItem>
          <SummaryItem>
            <SummaryLabel>Entrega</SummaryLabel>
            <SummaryValue>R$ {deliveryFee.toFixed(2)}</SummaryValue>
          </SummaryItem>
          <SummaryTotalPrice>
            <SummaryLabel>Total</SummaryLabel>
            <SummaryValue>R$ {totalPrice.toFixed(2)}</SummaryValue>
          </SummaryTotalPrice>
        </Summary>
        <NavLink to={"/sucess"}>
          <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
        </NavLink>
      </OrderInformationCoffeList>
    </OrderInformationContainer>
  );
}
