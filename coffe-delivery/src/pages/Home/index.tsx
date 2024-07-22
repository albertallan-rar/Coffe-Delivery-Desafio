import CoffeeList from "./CoffeeList/CoffeList";
import { Intro } from "./Intro/Intro";
import { Menu } from "./Menu/Menu";
import { ContentContainer, HomeContainer } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <Menu />
      <ContentContainer>
        <Intro />
        <CoffeeList />
      </ContentContainer>
    </HomeContainer>
  );
}
