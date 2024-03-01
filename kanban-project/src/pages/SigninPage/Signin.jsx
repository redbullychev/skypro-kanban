import { WrapperSigninDiv, BodySignin, ConteinerSigninDiv, ModalBlockDiv, ModalBtnEnter, ModalDiv, ModalFormGroupDiv, ModalFormLoginForm, ModalInput, ModalTtlDiv } from "./Signin.styled";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { signIn } from "../../api";
import { useUser } from "../../hooks/useUser";


   export default function Signin() {
   const {login} = useUser();
   const navigate = useNavigate();
   const [loginData, setLoginData] = useState({login:"", password:""});

   const handleInputChange = (e) => {
	const {name, value} = e.target;
	setLoginData({
		...loginData,
		[name]:value,
	})
   }

   const handleLogin = async () => {
	await signIn(loginData)
	.then((data) =>{
		login(data.user);
		navigate(appRoutes.MAIN);
	})
	.catch((error) => {
		alert(error);
	})


   }
   
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
						<ModalInput onChange={handleInputChange} value={loginData.login} type="text" name="login" placeholder="Эл. почта"></ModalInput>
						<ModalInput onChange={handleInputChange} value={loginData.password} type="password" name="password" id="formpassword" placeholder="Пароль"></ModalInput>
						<ModalBtnEnter onClick={handleLogin}>Войти</ModalBtnEnter>
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