import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import {
  Content,
  Graphics,
  ItemTable,
  TableStyled,
  TableHead,
  TableRows,
} from "./styled";

const Table = () => {
  const [listaUsers, setListaUsers] = useState([]);
  const [atualiza, setAtualiza] = useState(false);
  const [participTotal, setParticipTotal] = useState(0);
  const [valores, setValores] = useState([]);

  const getUsers = async () => {
    await axios
      .get(`${BASE_URL}/user/getUsers`)
      .then((res) => {
        console.log(res.data);
        setListaUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    
    getUsers();

    let total = 0;

    listaUsers.forEach((item) => {
      total += Number(item.participation);
      setParticipTotal(total);

      const valoresUsers = listaUsers.map((valor) => {
        return valor.participation;
      });
      setValores(valoresUsers);
    });
  }, [atualiza]);

  return (
    <div>
      <Content>
        <h1>LISTA DE CADASTRO</h1>
        
        <Graphics>
          {listaUsers.length > 0 ? (
            <TableStyled>
              <TableHead>
                <ItemTable> </ItemTable>
                <ItemTable>NOME</ItemTable>
                <ItemTable>E-MAIL</ItemTable>
                <ItemTable>NASCIMENTO</ItemTable>
                <ItemTable>TELEFONE</ItemTable>
              </TableHead>
              {listaUsers.map((linha) => {
                return (
                  <TableRows>
                    <ItemTable>{linha.id}</ItemTable>
                    <ItemTable>{linha.nome}</ItemTable>
                    <ItemTable>{linha.email}</ItemTable>
                    <ItemTable>{linha.nascimento}</ItemTable>
                    <ItemTable>{linha.telefone}</ItemTable>
                  </TableRows>
                );
              })}
            </TableStyled>
          ) : (
            <></>
          )}
         
        </Graphics>
      </Content>
    </div>
  );
};
export default Table;
