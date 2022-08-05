import React from "react";
import Footer from "../../Components/Footer/footer";
import Form from "../../Components/Form/form";
import Header from "../../Components/Header/header";
import Table from "../../Components/Table/table";

const Feed = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Form />
       
      </div>
      <div>
        <Table />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Feed;
