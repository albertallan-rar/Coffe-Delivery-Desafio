import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6rem;
`;

export const IntroInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 44rem;
`;

export const IntroTitle = styled.span`
  width: 36rem;
  line-height: 60px;
  font-weight: 900;
  font-size: 48px;
`;

export const IntroSubTitle = styled.span`
  width: 32rem;
  font-weight: 500;
  font-size: 20px;
`;

export const IntroQualityContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const IntroQualityItem = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
`;

export const IntroQualitBoxIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  color: ${(props) => props.theme.coffe_white};
  border-radius: 100%;
  background: ${(props) => props.theme.coffe_yellow_dark};
`;

export const IntroQualitTimerIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  color: ${(props) => props.theme.coffe_white};
  border-radius: 100%;
  background: ${(props) => props.theme.coffe_yellow};
`;
export const IntroQualitPackageIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  color: ${(props) => props.theme.coffe_white};
  border-radius: 100%;
  background: ${(props) => props.theme.coffe_base_text};
`;
export const IntroQualityCoffeeIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  color: ${(props) => props.theme.coffe_white};
  border-radius: 100%;
  background: ${(props) => props.theme.coffe_purple};
`;
