import styled from "styled-components";

export const Maincontainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-seriff;
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

  h1 {
    align-items: center;
    text-align: center;
    color: #29abe2;
  }
`;

export const Graphics = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const TableStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableHead = styled.div`
  display: grid;
  grid-template-columns: 10% 20% 20% 20% 20%;
  color: #012d51;

  @media (max-width: 768px) {
    width: 600px;
  }

  @media screen and (max-width: 480px) {
    display: none;
  } ;
`;

export const TableRows = styled.div`
  display: grid;
  grid-template-columns: 10% 20% 20% 20% 20%;

  @media (max-width: 768px) {
    width: 600px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    display: none;
    display: flex;
    flex-direction: column;
    padding: 4px;
  } ;
`;

export const NameTable = styled.div`
 
  padding: 12px;
  text-align: center;
  color: #012d51;

  @media (max-width: 768px) {
    padding: 10px
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    display: none;
    display: flex;
    flex-direction: column;
   
  } ;
  `;

export const NumberTable = styled.div`

  text-align: center;
  color: #012d51;

  @media (max-width: 768px) {
    padding: 10px
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    display: none;
    display: flex;
    flex-direction: column;
   
  } ;
  `;

export const ItemTable = styled.div`
  border: 1px solid #29abe2;
  padding: 12px;
  text-align: center;
  color: #808080;

  @media (max-width: 768px) {
    padding: 10px
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    display: none;
    display: flex;
    flex-direction: column;
   
  } ;
`;

export const ContainerScroll = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  padding: 0 3% 3% 0;
`;
