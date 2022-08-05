import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import { Header, InputMaterial } from "./styled";
import { colors, Input, TextField } from "@mui/material";


/* const useStyles = makeStyles({
  input: {
    color: "blue"
  }
}); */

const Form = () => {
  const [listaUsers, setListaUsers] = useState([]);

  //chamando o hook useForm
  const { form, onChange, clean } = useForm({
    name: "",
    email: "",
    nascimento: "",
    telefone: "",
  });

  const onSubimitForm = (event) => {
    event.preventDefault();

    userCreator();
  };

  const userCreator = async () => {
    await axios
      .post(`${BASE_URL}/user/register`, form)
      .then((res) => {
        console.log(res);
        clean();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {}, []);

 

  
    /* const classes = useStyles(); */

  return (
    <div>
      <Header>
        <p>CADASTRO</p>
        <form onSubmit={onSubimitForm}>
          <InputMaterial
            /* inputProps={{ className: classes.input }} */
            id="standard-basic"
            variant="standard"
            label="nome"
            name={"nome"}
            type={"text"}
            placeholder="Nome"
            value={form.nome}
            onChange={onChange}
            required
          />

          <InputMaterial
            id="standard-basic"
            variant="standard"
            label="email"
            name={"email"}
            type={"email"}
            placeholder="Email"
            value={form.email}
            onChange={onChange}
            required
          />

          <InputMaterial
            id="standard-basic"
            variant="standard"
            label="nascimento"
            name={"nascimento"}
            type={"text"}
            placeholder="Nascimento (aaaa-mm-dd)"
            value={form.nascimento}
            onChange={onChange}
            required
          />

          <InputMaterial
            id="standard-basic"
            variant="standard"
            label="telefone"
            name={"telefone"}
            type={"tel"}
            placeholder="Telefone (XX) X XXXX-XXXX"
            value={form.telefone}
            onChange={onChange}
            required
          />

          <button type="submit"> CADASTRAR </button>
        </form>
      </Header>
    </div>
  );
};
export default Form;
