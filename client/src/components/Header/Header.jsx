import React from 'react'
import cl from './Header.module.css'
import {
  MyLangActionCreator, btnAddMessageActionCreator,
  onTextChangeActionCreator
} from '../../redux/state.js'
// let MyLangActionCreator = (lang) => {//                         lang
//   //                        из store
//   return { type: 'ADD-LANG', newLang: lang }
// }
// let btnAddMessageActionCreator = () => {//                      button
//   return { type: 'ADD-MESSAGE' }
// }
// let onTextChangeActionCreator = (text) => {//                   textarea
//   return { type: 'UPDATE-MESSAGE', newText: text }
// }
const Header = (props) => {
  /*
  //let val = props
  // let val = props.state
  
    let newSotial = props.state.map((count) => {
      return (count.lang)
    })
    let SelectLang = React.createRef()
    let MyLang = () => {
      let lang = SelectLang.current.value
      props.addLang(lang)
      // alert('Выбран ' + lang)
    }
  */
  // let val = props
  let Lang = props.state.settings.ui.map((count) => {
    return (count.lang)
  })
  let Coin = props.state.crypto.coin.map((count) => {
    return (count.name + ' ')
  })//---------------------------------------------
  let SelectLang = React.createRef() //                         lang
  let MyLang = () => {
    let lang = SelectLang.current.value
    props.dispatch(MyLangActionCreator(lang))
  }//---------------------------------------------
  let addMessage = React.createRef() //                         button
  let btnAddMessage = () => {
    props.dispatch(btnAddMessageActionCreator())
    // console.log("button-1")
  }//---------------------------------------------
  let onTextChange = () => { //                                 textarea
    let text = addMessage.current.value
    props.dispatch(onTextChangeActionCreator(text))
  }//---------------------------------------------
  return (
    <header className={cl.header}>
      <img src="../logo192.png" alt="logo192" />
      <h1>Header</h1>
      <h1>{Lang}</h1>
      <h4>{Coin}</h4>
      <div>
        <textarea ref={addMessage} onChange={onTextChange} value={props.newtext}
          name="" id="" cols="20" rows="1" />
      </div>
      <div><button onClick={btnAddMessage}>Add Message</button></div>
      {/* {console.log(val)} */}
      <div>
        <select ref={SelectLang} onChange={MyLang}>
          <option value="en">En</option>
          <option value="ru">Ru</option>
        </select>
      </ div>
    </header>
  )
} // <img src="logo192.png" alt="logo192" />
export default Header
