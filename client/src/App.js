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
//import state from './redux/state.js'

const App = (props) => {
  const routes = useRoutes(false)
  return (
    <BrowserRouter>
      <div className="my_container">
        {routes}
        <Header state={props.state} newtext={props.state.newtext}
          addLang={props.addLang} addMessage={props.addMessage}
          updateMessage={props.updateMessage} />

        <Navbar state={props.state} />
        {/* Route следит за браузерной строкой */}
        <Route path='/home' render={() => <Home state={props.state} />} />
        <Route path='/start' render={() => <Start />} />
        <Route path='/game' render={() => <Game />} />
        <Route path='/news' render={() => <News />} />

        <Footer />

      </div>
    </BrowserRouter>)
}
/*
<Route path="/start" coponent={BigContent} />
<Route coponent={BigContent} />

const App = () => {
  
  return (
    <Router>
      <div className="my_container">

        <Header />

        <BigContent />

        <Footer />

      </div>
    </Router>
  )
}

<VLpage />

const VLpage = () => {
  const routes = useRoutes(false)
  return(
    <div>
      {routes}

      <a href="/">Bitboom</a>
      <br />
      <a href="/information">Information</a>
      <br />
      <a href="/contact">Contact</a>
    </div>
    )
}
*/
export default App