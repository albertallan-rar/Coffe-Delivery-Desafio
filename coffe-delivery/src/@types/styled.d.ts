import { defaultThemes } from "./../styles/theme/defaultThemes";

type ThemeType = typeof defaultThemes;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
