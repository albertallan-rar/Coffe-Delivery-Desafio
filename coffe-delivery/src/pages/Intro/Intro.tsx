import { Coffee, Package, ShoppingCartSimple, Timer } from "@phosphor-icons/react";
import {
  IntroContainer,
  IntroInfosContainer,
  IntroQualitBoxIcon,
  IntroQualitPackageIcon,
  IntroQualitTimerIcon,
  IntroQualityCoffeeIcon,
  IntroQualityContainer,
  IntroQualityItem,
  IntroSubTitle,
  IntroTitle,
} from "./styles";

export function Intro() {
  return (
    <IntroContainer>
      <IntroInfosContainer>
        <IntroTitle>Encontre o cafe perfeito para qualquer hora do dia</IntroTitle>
        <IntroSubTitle>Com o Coffee Delivery você recebe seu cafe onde estiver, a qualquer hora</IntroSubTitle>
        <IntroQualityContainer>
          <IntroQualityItem>
            <IntroQualitBoxIcon>
              <ShoppingCartSimple size={16} color="#ffffff" weight="fill" />
            </IntroQualitBoxIcon>
            Compra simples e segura
          </IntroQualityItem>
          <IntroQualityItem>
            <IntroQualitPackageIcon>
              <Package size={16} color="#ffffff" weight="fill" />
            </IntroQualitPackageIcon>
            Embalagem mantém o café intacto
          </IntroQualityItem>
          <IntroQualityItem>
            <IntroQualitTimerIcon>
              <Timer size={16} color="#ffffff" weight="fill" />
            </IntroQualitTimerIcon>
            Entrega rápida e rastreada
          </IntroQualityItem>
          <IntroQualityItem>
            <IntroQualityCoffeeIcon>
              <Coffee size={16} color="#ffffff" weight="fill" />
            </IntroQualityCoffeeIcon>
            O café chega fresquinho até você
          </IntroQualityItem>
        </IntroQualityContainer>
      </IntroInfosContainer>
      <img src="./intro_logo.png" alt="" />
    </IntroContainer>
  );
}
