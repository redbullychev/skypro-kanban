import { styled } from "styled-components";
import { hover01, hover02, hover03 } from "../../styled/common/common.styled";

export const StyledHeader = styled.header`
width: 100%;
margin: 0 auto;
background-color: ${props => props.theme.header};
transition: all 0.25s linear;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderBtnMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  
  ${hover01}
`;

export const HeaderUser = styled.div`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.textHeaderUser};
  transition: all 0.25s linear;

  ${hover02}
`;

export const HeaderPopUserSet = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgb(61 73 91 / 40%);
  background: ${props => props.theme.header};
  box-shadow: 0px 10px 39px 0px rgb(255 255 255 / 21%);
  padding: 34px;
  text-align: center;
  z-index: 2;
  transition: all 0.25s linear;
`;

export const PopUserSetName = styled.p`
  color: ${props => props.theme.text};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserSetMail = styled.p`
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  color: ${props => props.theme.text};

  input[type=checkbox] {
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #EAEEF6;
  outline: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
input[type=checkbox]::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #94A6BE;
  transition: 0.5s;
}
input:checked[type=checkbox]::before {
  left: 12px;
}
`;

export const ExitButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${props => props.theme.textHeaderUser};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.textHeaderUser};

  ${hover03}
`;

export const HeaderLogo = styled.div`
  width: 85px;
`;

export const Image = styled.img`
  width: 85px;
`;