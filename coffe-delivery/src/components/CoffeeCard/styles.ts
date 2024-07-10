import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.coffe_base_card};
  -webkit-border-radius: 36px;
  -webkit-border-top-left-radius: 6px;
  -webkit-border-bottom-right-radius: 6px;
  -moz-border-radius: 36px;
  -moz-border-radius-topleft: 6px;
  -moz-border-radius-bottomright: 6px;
  border-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding-bottom: 15px;
  img {
    width: 7.5rem;
    position: absolute;
    top: -20px;
  }
`;

export const CoffeeCardInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  span {
    background: ${(props) => props.theme.coffe_yellow_light};
    color: ${(props) => props.theme.coffe_yellow_dark};
    padding: 4px 8px;
    font-weight: 700;
    border-radius: 100px;
    text-transform: uppercase;
    margin-top: 30px;
  }
  h1 {
    font-size: 20px;
  }

  p {
    text-align: center;
    color: ${(props) => props.theme.coffe_base_label};
    font-weight: 400;
    width: 16rem;
  }
`;

export const CoffeeCardButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`;

export const CoffeeCardPrice = styled.span`
  font-weight: 900;
  color: ${(props) => props.theme.coffe_base_text};
  font-size: 25px;
`;
export const CoffeCardBuyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: none;
  background: ${(props) => props.theme.coffe_purple_dark};
  border-radius: 6px;
`;
