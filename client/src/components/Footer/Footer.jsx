import React from 'react';
import cl from './Footer.module.css'
import { btnAddMessageActionCreator2, onTextChangeActionCreator2 } from '../../redux/state.js'

const Footer = (props) => {
  let sotial = [
    { id: 0, name: 'Twitter' },
    { id: 1, name: 'YouTube' },
    { id: 2, name: 'VK' },
    { id: 3, name: 'FaceBoock' },
    { id: 4, name: 'Linkedin' }
  ]
  let newSotial = sotial.map((count) => {
    return (count.name + ' ')// < br /> + 
  })
  //------------------------------------------------------------------------------
  // Dialogs
  //let state = props.store.getState().crypto// 41 video ????????!!!!!!!!!!!!!!!

  let Coin = props.state.crypto.coin.map((count) => {
    return (count.name + ' ')
  })
  //---------------------------------------------
  let addMessage = React.createRef() //                         button-2
  let btnAddMessage = () => {
    props.dispatch(btnAddMessageActionCreator2())
    // console.log("button-2")
  }//---------------------------------------------
  let onTextChange = () => { // (e)                                textarea-2
    let text = addMessage.current.value
    props.dispatch(onTextChangeActionCreator2(text))
  }//--
  return (
    <footer className={cl.footer}>
      <h1>Footer</h1>
      <h4>{Coin}</h4>
      <div>
        <textarea ref={addMessage} onChange={onTextChange} value={props.newtext}
          name="" id="" cols="20" rows="1" />
      </div>
      <div><button onClick={btnAddMessage}>Add Message-2</button></div>
      {newSotial}
    </footer>
  );
}
export default Footer;