import { useState } from "react"
import  * as S  from "./Header.styled";
import { Container } from "../../styled/common/common.styled";

export default function Header({addCard, toggleTheme, theme}) {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopup() {
    setIsOpened((prev) => !prev)
  }
  let logoSrc;
  if (theme === 'light') {
    logoSrc = "./images/logo.png";
  } else {
    logoSrc = "./images/logo_dark.png";
  }

    return (
        <S.StyledHeader>
        <Container>
          <S.HeaderBlock>
            <S.HeaderLogo>
              <a href="" target="_self">
               <S.Image src = {logoSrc} alt="logo" />
              </a>
            </S.HeaderLogo>
            <S.HeaderNav>
              <S.HeaderBtnMainNew onClick={addCard}>
                Создать новую задачу
              </S.HeaderBtnMainNew>
              <S.HeaderUser onClick = {togglePopup}>
                Ivan Ivanov
              </S.HeaderUser>
              {isOpened && (
                <S.HeaderPopUserSet
                className="pop-user-set"
                >
                {/* <a href="">x</a> */}
                <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  Темная тема
                  <input onClick={toggleTheme} type="checkbox"/>
                </S.PopUserSetTheme>
                <S.ExitButton>Выйти</S.ExitButton>
              </S.HeaderPopUserSet>
              )}
            </S.HeaderNav>
          </S.HeaderBlock>
        </Container>
      </S.StyledHeader>
    )
    }