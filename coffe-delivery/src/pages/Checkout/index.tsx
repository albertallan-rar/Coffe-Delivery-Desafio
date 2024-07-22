import AddressForm from "./AddressForm/AddressForm";
import OrderInformation from "./OrderInformation/OrderInformation";
import { CheckoutContainer } from "./style";

export default function Checkout() {
  return (
    <CheckoutContainer>
      <AddressForm />
      <OrderInformation />
    </CheckoutContainer>
  );
}
