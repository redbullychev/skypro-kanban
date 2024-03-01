import { Routes, Route} from 'react-router-dom';
import { appRoutes } from './lib/appRoutes';
import Signin from './pages/SigninPage/Signin';
import Signup from './pages/SignupPage/Signup';
import NotFound from './pages/NotFoundPage/NotFoundPage';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MainPage from './pages/MainPage/MainPage';
import TaskPage from './pages/TaskPage/TaskPage';
import ExitPage from './pages/ExitPage/ExitPaje';
import './App.css';
import CreateTaskPage from './pages/CreateTaskPage/CreateTaskPage';


export default function App() {

  // const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  // function login(newUser) {
  //   setUser(newUser);
  //   navigate(appRoutes.MAIN);
  // }

  // function logout() {
  //   setUser(null);
  //   navigate(appRoutes.SIGNIN);
  // }
  

  return (
    <Routes>
      <Route element={<PrivateRoute/>}>
        <Route path={appRoutes.MAIN} element={<MainPage/>}>
          <Route path={appRoutes.TASK} element={<TaskPage/>} />
          <Route path={appRoutes.EXIT} element={<ExitPage />}/>
          <Route path={appRoutes.CREATE} element={<CreateTaskPage/>} />
        </Route>
      </Route>
      <Route path={appRoutes.SIGNIN} element={<Signin/>} />
      <Route path={appRoutes.SIGNUP} element={<Signup/>} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFound/>} />
    </Routes>

  )
}