import styled from "styled-components";

export const CoffeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  h1 {
    font-size: 32px;
    font-weight: 900;
    line-height: 130%;
  }
`;

export const CoffeeListCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 20px;
`;
