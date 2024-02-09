import { styled } from "styled-components";

export const Main = styled.main`
  width: 100%;
  background-color: ${props => props.theme.main};
  height: 100vh;
  transition: all 0.25s linear;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px; 
`;

export const StyleMainContent = styled.div`
  width: 100%;
  display: flex;
`;