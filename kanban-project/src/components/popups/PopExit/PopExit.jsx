import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { PopExitBtnNo, PopExitBtnYes } from "./PopExit.styled";

export default function PopExit({logout}) {
return (
<div className="pop-exit" id="popExit">
    <div className="pop-exit__container">
      <div className="pop-exit__block">
        <div className="pop-exit__ttl">
          <h2>Выйти из аккаунта?</h2>
        </div>
        <form className="pop-exit__form" id="formExit" action="#">
          <div className="pop-exit__form-group">
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
          </div>
        </form>
      </div>
    </div>
  </div>
)
}
