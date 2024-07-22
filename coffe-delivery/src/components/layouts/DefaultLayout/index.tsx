import { Outlet } from "react-router-dom";
import { Menu } from "../../../pages/Home/Menu/Menu";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Menu />
      <Outlet />
    </LayoutContainer>
  );
}
