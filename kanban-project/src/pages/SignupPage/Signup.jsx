import { WrapperDiv } from "../../App.styled";
import { ModalBlockDiv, ModalDiv, ModalFormGroupDiv, ModalFormLoginForm, ModalInput, ModalTtlDiv } from "../SigninPage/Signin.styled";
import { BodySignup, ConteinerSignupDiv, ModalBtnSignup } from "./Signup.styled";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { signUp } from "../../api";
import { useUser } from "../../hooks/useUser";




export default function Signup() {
	const {login} = useUser();
	const navigate = useNavigate();
	const [signupData, setSignupData] = useState({login:"", name: "", password:""});

	const handleInputChange = (e) => {
	const {name, value} = e.target;
	setSignupData({
    ...signupData,
    [name]:value,
	})
 
 
	}
 
	const handleSignup = async () => {
	await signUp(signupData)
	.then((data) =>{
	login(data.user);
	navigate(appRoutes.MAIN);
	})
	.catch((error) => {
		alert(error);
	})
 
 
	}

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
						<ModalInput onChange={handleInputChange} value={signupData.name} type="text" name="name" id="name" placeholder="Имя"></ModalInput>
						<ModalInput onChange={handleInputChange} value={signupData.login} type="text" name="login" id="loginReg" placeholder="Эл. почта"></ModalInput>
						<ModalInput onChange={handleInputChange} value={signupData.password} type="password" name="password" id="passwordFirst" placeholder="Пароль"></ModalInput>
						<ModalBtnSignup onClick={handleSignup}> Зарегистрироваться </ModalBtnSignup>
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