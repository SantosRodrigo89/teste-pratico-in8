import { NavStyle } from "./styled";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
     
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
