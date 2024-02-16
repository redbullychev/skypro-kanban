import { WrapperSigninDiv, BodySignin, ConteinerSigninDiv, ModalBlockDiv, ModalBtnEnter, ModalDiv, ModalFormGroupDiv, ModalFormLoginForm, ModalInput, ModalTtlDiv } from "./Signin.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

   export default function Signin({login}) {
    return (
   <BodySignin>
   <WrapperSigninDiv>
        <ConteinerSigninDiv>
            <ModalDiv>
				<ModalBlockDiv>
					<ModalTtlDiv>
						<h2>Вход</h2>
					</ModalTtlDiv>
					<ModalFormLoginForm action="#">
						<ModalInput type="text" name="login" placeholder="Эл. почта"></ModalInput>
						<ModalInput type="password" name="password" id="formpassword" placeholder="Пароль"></ModalInput>
						<ModalBtnEnter onClick={login}>Войти</ModalBtnEnter>
						<ModalFormGroupDiv>
							<p>Нужно зарегистрироваться?</p>
							<Link to={appRoutes.SIGNUP}>Регистрируйтесь здесь</Link>
						</ModalFormGroupDiv>
					</ModalFormLoginForm>
				</ModalBlockDiv>
            </ModalDiv>
        </ConteinerSigninDiv>
    </WrapperSigninDiv>
    </BodySignin>
    )
    }