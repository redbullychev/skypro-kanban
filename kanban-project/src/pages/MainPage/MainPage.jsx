

import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, WrapperDiv } from '../../App.styled';
import { darkTheme, lightTheme } from '../../styled/common/themes';
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import Column from '../../components/Column/Column';
import { Outlet } from 'react-router-dom';
import { getTodos } from '../../api';




const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage({user}) {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };


  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getTodos({token: user.token})
    .then((todos) => {
      setCards(todos.tasks);
      setIsLoading(false);
    })
    .catch((error) => {
      alert(error);
    })
  }, [user]);

  const newCard = {
    _id: cards.length + 1,
    topic: "Web Design",
    title: "Название задачи",
    date: new Date(),
    status: "Без статуса",
  }
  function addCard() {
    // Логика добавления карточки
    setCards([...cards, newCard])
  }
  return (
    <>
    <GlobalStyle/>
    <WrapperDiv>
          {/* pop-up start*/}
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        
        <Outlet/>
          {/* pop-up end*/}
        <Header addCard={addCard} toggleTheme={toggleTheme} theme={theme} />
        {isLoading ? "Загрузка..." : 
          <MainContent>
          {statusList.map((status) => <Column 
          title = {status} 
          key = {status}
          cardList={cards.filter((card) => card.status === status)} /> )}
          </MainContent>}
      </ThemeProvider>
  
     </WrapperDiv>



    </>
  )
}

