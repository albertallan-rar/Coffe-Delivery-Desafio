import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 10rem;
  z-index: 1000; /* Ajuste conforme necessário */
  background: ${(props) => props.theme.coffe_white};
`;

export const MenuButtons = styled.div`
  display: flex;
  gap: 12px;
`;

export const ButtonLocation = styled.button`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.coffe_purple_light};
  color: ${(props) => props.theme.coffe_purple};
  font-weight: 500;
  padding: 8px;
  border: none;
  border-radius: 6px;
  -webkit-box-shadow: 0px 3px 16px -1px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 0px 3px 16px -1px rgba(0, 0, 0, 0.63);
  box-shadow: 0px 3px 16px -1px rgba(0, 0, 0, 0.63);
`;

export const ButtonShoppingCart = styled.button`
  position: relative;
  border: none;
  padding: 12px;
  display: flex;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.coffe_yellow_light};
`;

export const ShoppingCartItensCount = styled.span`
  position: absolute;
  top: -10px;
  right: -7px;

  border-radius: 100%;
  padding: 0.2px 6px;

  font-size: 0.8rem;

  background: ${(props) => props.theme.coffe_yellow_dark};
  color: ${(props) => props.theme.coffe_white};
`;
