import styled from "styled-components";

export const SucessContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 10rem;
`;

export const SucessContainerTitle = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => props.theme.coffe_yellow_dark};
`;

export const SucessContainerSubtitle = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const SucessOrderBody = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  img {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    object-fit: contain;
  }
`;

export const SucessOrderInfos = styled.div`
  display: flex;
  flex-direction: column;

  padding: 40px;
  gap: 50px;

  border: 1px solid #8047f8;
  border-radius: 6px 36px 6px 36px;

  div:nth-child(1) {
    display: flex;
    gap: 20px;

    span:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${(props) => props.theme.coffe_purple};
      color: ${(props) => props.theme.coffe_white};

      border-radius: 100%;
      width: 3rem;
    }
  }
  div:nth-child(2) {
    display: flex;
    gap: 20px;

    span:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${(props) => props.theme.coffe_yellow};
      color: ${(props) => props.theme.coffe_white};

      border-radius: 100%;
      width: 3rem;
    }
  }
  div:nth-child(3) {
    display: flex;
    gap: 20px;

    span:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${(props) => props.theme.coffe_yellow_dark};
      color: ${(props) => props.theme.coffe_white};

      border-radius: 100%;
      width: 3rem;
    }
  }
`;
