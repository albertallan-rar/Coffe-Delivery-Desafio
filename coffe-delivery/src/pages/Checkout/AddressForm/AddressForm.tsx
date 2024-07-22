import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { useDeliveryContext } from "../../../context/DeliveryContext";
import {
  AddressFormContainer,
  AddressInputs,
  AddressSection,
  FormSection,
  FormTitle,
  OptionIcon,
  PaymentOption,
  PaymentOptions,
  PaymentSection,
  SectionHeader,
  SectionIcon,
  SectionInfo,
} from "./style";

export default function AddressForm() {
  const { deliveryData, setDeliveryData } = useDeliveryContext();

  console.log("DeliveryData", deliveryData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliveryData({ [name]: value });
  };

  const handlePaymentChange = (method: string) => {
    setDeliveryData({ paymentMethod: method });
  };

  return (
    <AddressFormContainer>
      <FormTitle>Complete seu pedido</FormTitle>
      <FormSection>
        <AddressSection>
          <SectionHeader>
            <SectionIcon>
              <MapPinLine size={22} color="#c47f17" />
            </SectionIcon>
            <SectionInfo>
              <h1>Endereço de entrega</h1>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </SectionInfo>
          </SectionHeader>
          <AddressInputs>
            <input
              type="text"
              name="postalCode"
              placeholder="CEP"
              value={deliveryData.postalCode}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="street"
              placeholder="Nome da Rua"
              value={deliveryData.street}
              onChange={handleInputChange}
            />
            <div className="address-location">
              <input
                type="text"
                name="number"
                placeholder="Número da casa"
                value={deliveryData.number}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="complement"
                placeholder="Complemento"
                value={deliveryData.complement}
                onChange={handleInputChange}
              />
            </div>
            <div className="address-state">
              <input
                type="text"
                name="neighborhood"
                placeholder="Bairro"
                value={deliveryData.neighborhood}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="city"
                placeholder="Cidade"
                value={deliveryData.city}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="state"
                placeholder="Estado"
                value={deliveryData.state}
                onChange={handleInputChange}
              />
            </div>
          </AddressInputs>
        </AddressSection>
        <PaymentSection>
          <SectionHeader>
            <SectionIcon>
              <CurrencyDollar size={22} color="#8047F8" />
            </SectionIcon>
            <SectionInfo>
              <h1>Pagamento</h1>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </SectionInfo>
          </SectionHeader>
          <PaymentOptions>
            <PaymentOption onClick={() => handlePaymentChange("CARTÃO DE CREDITO")}>
              <OptionIcon>
                <CreditCard size={22} color="#8047F8" />
              </OptionIcon>
              <span>CARTÃO DE CREDITO</span>
            </PaymentOption>
            <PaymentOption onClick={() => handlePaymentChange("CARTÃO DE DEBITO")}>
              <OptionIcon>
                <Bank size={22} color="#8047F8" />
              </OptionIcon>
              <span>CARTÃO DE DEBITO</span>
            </PaymentOption>
            <PaymentOption onClick={() => handlePaymentChange("DINHEIRO")}>
              <OptionIcon>
                <Money size={22} color="#8047F8" />
              </OptionIcon>
              <span>DINHEIRO</span>
            </PaymentOption>
          </PaymentOptions>
        </PaymentSection>
      </FormSection>
    </AddressFormContainer>
  );
}
