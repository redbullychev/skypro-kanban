import './App.css'
import CopywritingTask from './components/CopywritingTask'
import CreateTask from './components/CreateTask'
import Header from './components/Header'
import Logout from './components/Logout'
import ResearchTask from './components/ResearchTask'
import TaskBrowse from './components/TaskBrowse'
import WebDesignTask from './components/WebDesignTask'

function App() {

  return (
    <>
    <div className="wrapper">
		<Logout/>
		<CreateTask/>
    <TaskBrowse/>
		<Header/>
		<main className="main">
			<div className="container">
				
				<div className="main__block">
					<div className="main__content">
						<div className="main__column column">
							<div className="column__title">
								<p>Без статуса</p>
							</div>
							<div className="cards">
							<WebDesignTask/>
							
							<ResearchTask/>
							
							<WebDesignTask/>
								
							<CopywritingTask/>
								
							<WebDesignTask/>
							</div>
						</div>						
						<div className="main__column">
							<div className="column__title">
								<p>Нужно сделать</p>
							</div>
							<div className="cards">
							<ResearchTask/>
							</div>
						</div>
						<div className="main__column">
							<div className="column__title">
								<p>В работе</p>
							</div>
							<div className="cards">
              <ResearchTask/>
						
							<CopywritingTask/>
						
							<WebDesignTask/>
							</div>
						</div>
						<div className="main__column">
							<div className="column__title">
								<p>Тестирование</p>
							</div>
							<div className="cards">
              <ResearchTask/>
							</div>
						</div>
						<div className="main__column">
							<div className="column__title">
								<p>Готово</p>
							</div>
							<div className="cards">
              <ResearchTask/>
							</div>
						</div>
				
						
					</div>
				
				</div>
			</div>
		</main>
		
    </div>

    <script src="js/script.js"></script>
    </>
  )
}

export default App
