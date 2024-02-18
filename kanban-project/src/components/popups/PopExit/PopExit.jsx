import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { PopExitBlockDiv, PopExitBtnNo, PopExitBtnYes, PopExitContainerDiv, PopExitDiv, PopExitForm, PopExitFormGroupDiv, PopExitTtlDiv } from "./PopExit.styled";
import { H2 } from "../../../styled/common/common.styled";

export default function PopExit({logout}) {
return (
<PopExitDiv>
    <PopExitContainerDiv>
      <PopExitBlockDiv>
        <PopExitTtlDiv>
          <H2>Выйти из аккаунта?</H2>
        </PopExitTtlDiv>
        <PopExitForm>
          <PopExitFormGroupDiv>
            <Link to={appRoutes.SIGNIN}>
            <PopExitBtnYes onClick={logout}>
              Да, выйти
            </PopExitBtnYes>
            </Link>
            <Link to={appRoutes.MAIN}>
            <PopExitBtnNo>
              Нет, остаться
            </PopExitBtnNo>
            </Link>
          </PopExitFormGroupDiv>
        </PopExitForm>
      </PopExitBlockDiv>
    </PopExitContainerDiv>
  </PopExitDiv>
)
}
