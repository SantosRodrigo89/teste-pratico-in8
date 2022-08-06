import React from "react";
import Footer from "../../Components/Footer/footer";
import Form from "../../Components/Form/form";
import Header from "../../Components/Header/header";
import Table from "../../Components/Table/table";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Feed = () => {
  return (
    <div>
      <div>
        <AnchorLink href="#cadastro">Cadastro</AnchorLink>
        <AnchorLink href="#lista">Lista</AnchorLink>
        <AnchorLink href="#Sobre">Sobre</AnchorLink>
      </div>

      <div>
        <div>
          <Header />
        </div>

        <div id="cadastro">
          <Form />
        </div>
        <div id="lista">
          <Table />
        </div>

        <div id="sobre">
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Feed;
