
import './App.css'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import PopBrowse from './components/popups/PopBrowse/PopBrowse'
import PopExit from './components/popups/PopExit/PopExit'
import PopNewCard from './components/popups/PopNewCard/PopNewCard'
import Column from './components/Column/Column'
import { cardList } from './data'
import { useEffect, useState } from 'react'
import {format} from "date-fns";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function App() {
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
      <div className="wrapper">
  {/* pop-up start*/}
  <PopExit/>
  <PopNewCard/>
  <PopBrowse/>
  {/* pop-up end*/}
  <Header addCard={addCard} />
  {isLoading ? "Загрузка..." : 
  <MainContent>
  {statusList.map((status) => <Column 
  title = {status} 
  key = {status}
  cardList={cards.filter((card) => card.status === status)} /> )}
  </MainContent>}
  
</div>



    </>
  )
}

