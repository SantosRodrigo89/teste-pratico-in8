import Menu from "../Menu/menu";
import { Main, Text, TextBox } from "./styled";
import React from "react";
import {HelveticaUltraLt_0} from "../../Assets/font/HelveticaUltraLt_0.ttf"

const Header = () => {

 

  return (
    <Main>
       <Menu />
      <TextBox>
        <Text>
          <h1 class="fonte-externa">ESTÁGIO</h1>
          <h2>PROVA DE SELEÇÃO</h2>
        </Text>
      </TextBox>
    </Main>
  );
};
export default Header;
