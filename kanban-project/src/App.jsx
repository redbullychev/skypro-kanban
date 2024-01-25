
import './App.css'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import PopBrowse from './components/popups/PopBrowse/PopBrowse'
import PopExit from './components/popups/PopExit/PopExit'
import PopNewCard from './components/popups/PopNewCard/PopNewCard'
import Column from './components/Column/Column'

export default function App() {
 

  return (
    <>
      <div className="wrapper">
  {/* pop-up start*/}
  <PopExit/>
  <PopNewCard/>
  <PopBrowse/>
  {/* pop-up end*/}
  <Header/>
  <MainContent>
	<Column title = {"Без Статуса>"} />
	<Column title = {"Нужно сделать"} />
    <Column title = {"В Работе"} />
    <Column title = {"Тестирование"} />
    <Column title = {"Готово"} />
  </MainContent>
</div>



    </>
  )
}

