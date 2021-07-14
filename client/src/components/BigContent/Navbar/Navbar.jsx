import React from 'react'
//import { Switch, Redirect } from 'react-router-dom'
import cl from './Navbar.module.css'
import { NavLink } from "react-router-dom"

let path
//let to2 = "home"
//let lang2 = "en"
const NavItem = (props) => {
  // to2 = props.to
  // lang2 = props.lang
  path = "/" + props.to + "/" + props.lang
  // path = "/" + to2 + "/" + lang2
  return (
    <div className={cl.item}>
      {/* NavLink - меняет url в браузере */}
      <NavLink to={path} activeClassName={cl.activeLinc}>{props.page}</NavLink>
    </div>
  )
}
// const NavItem2 = (props) => {
// debugger;
// path = "/" + props.to + "/" + props.lang
// console.log('path = ' + path)
// return (
//   <Switch>
//     <Redirect to={path} />
//   </Switch>
// )
// }
const Navbar = (props) => {

  let Lang = props.state.settings.ui.map((count) => {
    // console.log('Navbar(props) = ' + count.lang)
    //NavItem2(props)
    // { console.log('path1 = ' + '/' + to2 + '/' + count.lang) }
    return (count.lang)
  })
  return (
    <div className={cl.nav}>
      {/* {console.log('path2 = ' + '/' + to2 + '/' + lang2)} */}
      {/* отображает ссылки */}
      <NavItem to="home" lang={Lang} page="Home" />
      <NavItem to="start" lang={Lang} page="Start" />
      <NavItem to="game" lang={Lang} page="Game" />
      <NavItem to="news" lang={Lang} page="News" />

      {/* <NavItem to="home" lang="en" page="Home" />
      <NavItem to="start" lang="en" page="Start" />
      <NavItem to="game" lang="en" page="Game" />
      <NavItem to="news" lang="en" page="News" /> */}

      {/* <div className={cl.item}>
        <NavLink to="/home/en" activeClassName={cl.activeLinc}>Home</NavLink>
      </div>

      <div className={cl.item}>
        <NavLink to="/start" activeClassName={cl.activeLinc}>Start</NavLink>
      </div>

      <div className={cl.item}>
        <NavLink to="/game" activeClassName={cl.activeLinc}>Game</NavLink>
      </div>

      <div className={cl.item}>
        <NavLink to="/news" activeClassName={cl.activeLinc}>News</NavLink>
      </div> */}

    </div>
  )
}
export default Navbar