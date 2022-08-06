import { NavStyle } from "./styled";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <AnchorLink href="#cadastro">Cadastro</AnchorLink>
        <AnchorLink href="#lista">Lista</AnchorLink>
        <AnchorLink href="#Sobre">Sobre</AnchorLink>
      </div>

      <NavStyle>
        <ul>
          <li>
            <a href="/">Cadastro</a>
          </li>
          <li>
            <a href="/about">Lista</a>
          </li>
          <li>
            <a href="/contact">Sobre</a>
          </li>
        </ul>
      </NavStyle>
    </div>
  );
};

export default NavBar;
