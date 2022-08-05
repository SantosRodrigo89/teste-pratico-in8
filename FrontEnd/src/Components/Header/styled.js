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
`;

export const Text = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: lighter;
  font-size: xx-large;
  color: white;
  width: 100%;
`;
