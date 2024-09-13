import { NavBar } from "./NavBar";
import { CartWidget } from "./CartWidget";
import logo from "../assets/logo.jpg";

export const Header = () => {
  return (
    <>
      <header className="header">
        <a href="/" className="a_header__logo">
          <img className="header__logo" src={logo} alt="Logotipo" />
        </a>
        <div className="imgCarro" id="imgCarro">
          <CartWidget />
        </div>
      </header>
      <NavBar />
    </>
  );
};
