import { NavBar } from "./NavBar";
import { CartWidget } from "./CartWidget";
import logo from "../assets/logo.jpg";

export const Header = () => {
  return (
    <>
      <header class="header">
        <a href="/" class="a_header__logo">
          <img class="header__logo" src={logo} alt="Logotipo" />
        </a>
        <div class="imgCarro" id="imgCarro">
          <CartWidget />
        </div>
      </header>
      <NavBar />
    </>
  );
};
