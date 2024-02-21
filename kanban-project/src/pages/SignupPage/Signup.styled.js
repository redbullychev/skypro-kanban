import { styled } from "styled-components";
import { hover01 } from "../../styled/common/common.styled";

export const BodySignup = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
`;

export const ConteinerSignupDiv = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

export const ModalBtnSignup = styled.button`
  width: 100%;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;
  
  ${hover01}
`;