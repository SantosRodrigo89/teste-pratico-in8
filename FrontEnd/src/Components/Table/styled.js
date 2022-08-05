import styled from "styled-components";

export const Maincontainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-seriff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  align-items: center;
`;

export const Graphics = styled.div`
/*   display: flex;
  width: 100%;
  margin: 50px;
  justify-content: space-between;
  align-items: center; */
`;

export const TableStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  
`;

export const TableHead = styled.div`
  display: grid;
  grid-template-columns: 10% 20% 20% 20% 20%;
  border-bottom: none;
`;
export const TableRows = styled.div`
  display: grid;
  grid-template-columns: 10% 20% 20% 20% 20%;
  
`;

export const ItemTable = styled.div`
  border: 1px solid blue;
  padding: 12px;
  text-align: center;
  border-style: solid solid  hidden  solid ;
  border-right: hidden;
  
`;