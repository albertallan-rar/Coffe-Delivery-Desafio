import styled from "styled-components";

export const AddressFormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const AddressSection = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.coffe_base_card};
  padding: 20px 40px;
`;

export const SectionHeader = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0px;
`;

export const SectionIcon = styled.div`
  display: flex;
  align-items: start;
  padding-top: 6px;
`;

export const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 20px;
    font-weight: 500;
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const AddressInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    background: ${(props) => props.theme.coffe_base_input};
    padding: 12px;
    border: none;
  }

  input:nth-child(1) {
    width: 30%;
  }

  input:nth-child(2) {
    width: 100%;
  }

  .address-location {
    display: flex;
    gap: 10px;

    input:nth-child(1) {
      width: 30%;
    }
    input:nth-child(2) {
      width: 70%;
    }
  }

  .address-state {
    display: flex;
    gap: 10px;

    input:nth-child(1) {
      width: 30%;
    }
    input:nth-child(2) {
      width: 60%;
    }
    input:nth-child(3) {
      width: 10%;
    }
  }
`;

export const PaymentSection = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.coffe_base_card};
  padding: 20px 40px;
`;

export const PaymentOptions = styled.div`
  display: flex;

  gap: 10px;
`;

export const PaymentOption = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  gap: 10px;
  padding: 16px;

  background: ${(props) => props.theme.coffe_base_button};

  border: none;
  font-size: 18px;

  transition: border 0.3s ease, background 0.3s ease; /* Adiciona transição para suavizar a mudança */

  &:hover {
    cursor: pointer; /* Adiciona um cursor pointer ao passar o mouse */
  }

  &:active {
    border: 2px solid ${(props) => props.theme.coffe_base_hover}; /* Define a cor da borda quando o botão é clicado */
    background: ${(props) => props.theme.coffe_base_active}; /* Altera a cor de fundo quando o botão é clicado */
  }
`;
export const OptionIcon = styled.div`
  display: flex;
  align-items: center;
`;
