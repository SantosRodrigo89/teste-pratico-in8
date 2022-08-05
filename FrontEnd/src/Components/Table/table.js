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
  ContainerScroll,
} from "./styled";
import ScrollToTop from "../scroll/scrollToTop";

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

var dataInput = '2020-02-06';

let data = new Date(dataInput);
let dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

console.log(dataFormatada);

  
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
                
                // trata a data para exibição
                let data = new Date(linha.nascimento);
                let dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
                return (
                  <TableRows key={linha.id}>
                    <ItemTable>{linha.id}</ItemTable>
                    <ItemTable>{linha.nome}</ItemTable>
                    <ItemTable>{linha.email}</ItemTable>
                    <ItemTable>{dataFormatada}</ItemTable>
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
      <ContainerScroll>
        <ScrollToTop />
        </ContainerScroll>
    </div>
  );
};
export default Table;
