import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { useRoutes } from './routes.js'
import Header from './components/Header/Header.jsx'
import Navbar from './components/BigContent/Navbar/Navbar.jsx'
//import BigContent from './components/BigContent/BigContent.jsx'
import Home from './components/BigContent/Home/Home.jsx'
import Start from './components/BigContent/Start/Start.jsx'
import Game from './components/BigContent/Game/Game.jsx'
import News from './components/BigContent/News/News.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = (props) => {
  const routes = useRoutes(false)
  return (
    <BrowserRouter>
      <div className="my_container">
        {routes}
        <Header state={props.state} newtext={props.state.newtext}
          dispatch={props.dispatch}
        />

        <Navbar state={props.state} />
        {/* Route следит за браузерной строкой */}
        <Route path='/home' render={() => <Home state={props.state} />} />
        <Route path='/start' render={() => <Start />} />
        <Route path='/game' render={() => <Game />} />
        <Route path='/news' render={() => <News />} />

        <Footer state={props.state} newtext={props.state.newtext2}
          dispatch={props.dispatch}
        />

      </div>
    </BrowserRouter>)
}
export default App
