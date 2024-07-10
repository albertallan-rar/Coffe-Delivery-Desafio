import styled from "styled-components";

export const CoffeeCardCountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  background: ${(props) => props.theme.coffe_base_button};

  button {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.coffe_purple_dark};
    border: none;
    background: ${(props) => props.theme.coffe_base_button};
  }

  span {
    font-size: 16px;
  }
`;
