import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme.coffe_background};
    color: ${(props) => props.theme.coffe_base_title};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
