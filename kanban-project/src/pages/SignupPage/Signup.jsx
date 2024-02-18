import { WrapperDiv } from "../../App.styled";
import { ModalBlockDiv, ModalDiv, ModalFormGroupDiv, ModalFormLoginForm, ModalInput, ModalTtlDiv } from "../SigninPage/Signin.styled";
import { BodySignup, ConteinerSignupDiv, ModalBtnSignup } from "./Signup.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

export default function Signup() {

return (
<BodySignup>
<WrapperDiv>
        <ConteinerSignupDiv>
            <ModalDiv>
				<ModalBlockDiv>
					<ModalTtlDiv>
						<h2>Регистрация</h2>
					</ModalTtlDiv>
					<ModalFormLoginForm action="#">
						<ModalInput type="text" name="first-name" id="first-name" placeholder="Имя"></ModalInput>
						<ModalInput type="text" name="login" id="loginReg" placeholder="Эл. почта"></ModalInput>
						<ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль"></ModalInput>
						<ModalBtnSignup><a href="../main.html">Зарегистрироваться</a> </ModalBtnSignup>
						<ModalFormGroupDiv>
							<p>Уже есть аккаунт?  <Link to={appRoutes.SIGNIN}>Войдите здесь</Link></p>
						</ModalFormGroupDiv>
					</ModalFormLoginForm>
				</ModalBlockDiv>
			</ModalDiv>
        </ConteinerSignupDiv>
    </WrapperDiv>
  </BodySignup>    
    )
    }