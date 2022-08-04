import styled from "styled-components";
import indexImage from "../../Assets/imagens/index-image.jpg";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url(${indexImage});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
    width: 50%;
`

export const Text = styled.div`
  font-family: Helvetica "sans-serif";
  color: white;
  width: 100%;
`;


