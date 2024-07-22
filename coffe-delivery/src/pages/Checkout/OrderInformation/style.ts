import styled from "styled-components";

export const OrderInformationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const OrderInformationTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const OrderInformationCoffeList = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.coffe_base_card};
  padding: 20px 40px;
`;

export const OrderInformationAlert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 2px solid #e6e5e5;
`;

export const OrderInformationCoffeeItem = styled.div`
  display: flex;

  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 2px solid #e6e5e5;
  margin: 20px 0px;
`;

export const OrderInformationCoffeIndetIdentification = styled.div`
  display: flex;
  gap: 20px;
`;

export const OrderInformationCoffeeImage = styled.img`
  // estilos
`;

export const OrderInformationCoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderInformationCoffeeName = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const OrderInformationCoffeeOption = styled.div`
  display: flex;
  gap: 10px;
`;

export const OrderInformationCoffeePrice = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.coffe_base_text};
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
  margin: 12px 0px;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SummaryTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;

  font-weight: bold;
  font-size: 20px;
`;

export const SummaryLabel = styled.span`
  // estilos
`;

export const SummaryValue = styled.span`
  // estilos
`;

export const ConfirmButton = styled.button`
  flex: 1;
  width: 100%;
  padding: 12px;
  background: ${(props) => props.theme.coffe_yellow};

  border: none;
  border-radius: 6px;

  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.coffe_white};
`;
