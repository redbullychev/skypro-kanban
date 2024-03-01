import { useState } from "react"
import  * as S  from "./Header.styled";
import { Container } from "../../styled/common/common.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

export default function Header({toggleTheme, theme}) {
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
              <Link to={`/create`}>
              <S.HeaderBtnMainNew>
                Создать новую задачу
              </S.HeaderBtnMainNew>
              </Link>
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
                <Link to={appRoutes.EXIT}>
                <S.ExitButton>Выйти</S.ExitButton>
                </Link>
              </S.HeaderPopUserSet>
              )}
            </S.HeaderNav>
          </S.HeaderBlock>
        </Container>
      </S.StyledHeader>
    )
    }