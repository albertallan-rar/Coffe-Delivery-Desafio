import { ThemeProvider } from "styled-components";
import { CoffeeProvider } from "./context/CoffeeContext";
import { CoffeesData } from "./data/CoffeesData";
import CoffeeList from "./pages/CoffeeList/CoffeList";
import { Intro } from "./pages/Intro/Intro";
import { Menu } from "./pages/Menu/Menu";
import { GlobalStyle } from "./styles/global";
import { defaultThemes } from "./styles/theme/defaultThemes";

function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <CoffeeProvider initialCoffees={CoffeesData}>
        <GlobalStyle />
        <Menu />
        <Intro />
        <CoffeeList />
      </CoffeeProvider>
    </ThemeProvider>
  );
}

export default App;
