import { Container } from "../../styled/common/common.styled";
import * as S from "./MainContent.styled";

export default function MainContent({ children }) {
    return (
        <S.Main>
        <Container>
          <S.MainBlock>
            <S.StyleMainContent className="main__content">
            {children}
            </S.StyleMainContent>
          </S.MainBlock>
        </Container>
      </S.Main>
    )
    }