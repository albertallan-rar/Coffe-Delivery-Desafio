import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { CoffeeProvider } from "./context/CoffeeContext";
import { DeliveryProvider } from "./context/DeliveryContext";
import { CoffeesData } from "./data/CoffeesData";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultThemes } from "./styles/theme/defaultThemes";

function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <CoffeeProvider initialCoffees={CoffeesData}>
        <DeliveryProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
          <ToastContainer
            draggable
            rtl={false}
            closeOnClick
            pauseOnHover
            autoClose={3000}
            pauseOnFocusLoss
            newestOnTop={false}
            position="bottom-right"
            hideProgressBar={false}
          />
        </DeliveryProvider>
      </CoffeeProvider>
    </ThemeProvider>
  );
}

export default App;
