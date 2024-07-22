import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useDeliveryContext } from "../../context/DeliveryContext";
import {
  SucessContainer,
  SucessContainerSubtitle,
  SucessContainerTitle,
  SucessOrderBody,
  SucessOrderInfos,
} from "./styles";

export default function Sucess() {
  const { deliveryData } = useDeliveryContext();
  return (
    <SucessContainer>
      <SucessContainerTitle>Uhu! Pedido confirmado</SucessContainerTitle>
      <SucessContainerSubtitle>Agora é só aguardar que logo o café chegará até você</SucessContainerSubtitle>
      <SucessOrderBody>
        <SucessOrderInfos>
          <div>
            <span>
              <MapPin size={22} weight="fill" />
            </span>
            <span>
              Entrega em <br /> {deliveryData.street}, {deliveryData.number}-{deliveryData.neighborhood} -{" "}
              {deliveryData.city},{deliveryData.state}
            </span>
          </div>
          <div>
            <span>
              <Timer size={22} weight="fill" />
            </span>
            <span>
              Previsão de entrega <br /> 20 min - 30 min{" "}
            </span>
          </div>
          <div>
            <span>
              <CurrencyDollar size={22} weight="fill" />
            </span>
            <span>
              Pagamento na entrega
              <br /> {deliveryData.paymentMethod}
            </span>
          </div>
        </SucessOrderInfos>
        <img src="./Illustration.png" alt="" width={492} height={293} />
      </SucessOrderBody>
    </SucessContainer>
  );
}
