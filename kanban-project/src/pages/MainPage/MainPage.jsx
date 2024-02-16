

import { useEffect, useState } from 'react'
import {format} from "date-fns";
import { ThemeProvider } from 'styled-components';
import { cardList } from '../../data';
import { GlobalStyle, WrapperDiv } from '../../App.styled';
import { darkTheme, lightTheme } from '../../styled/common/themes';
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import Column from '../../components/Column/Column';
import { Outlet } from 'react-router-dom';




const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };


  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
  }, []);

  const newCard = {
    id: cards.length + 1,
    theme: "Web Design",
    title: "Название задачи",
    date: format(new Date(), "dd.MM.yy"),
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

