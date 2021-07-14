import settingsReduser from './settings-reduser.js'
import cryptoReduser from './crypto-reduser.js'
import newtextReduser from './newtext-reduser.js'

const ADD_LANG = 'ADD-LANG'//                         Lang
const ADD_MESSAGE = 'ADD-MESSAGE'//                   button
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'//             textarea
const ADD_MESSAGE_2 = 'ADD-MESSAGE-2'//               button-2
const UPDATE_MESSAGE_2 = 'UPDATE-MESSAGE-2'//         textarea-2

let store = {// = объект
  _state: {// : свойство, _private
    settings: {
      ui: [
        { lang: 'en' }
      ]
    },
    crypto: {
      coin: [
        { name: 'Waves' },
        { name: 'Etherium' },
        { name: 'Bitcoin' }
      ]
    },
    newtext: 'QWERTY-1',
    newtext2: 'QWERTY-2'
  },
  getState() {
    return this._state // this. - внутри объекта store
  },
  subscribe(observer) {
    this._reRender = observer // паттерн наблюдатель-observer
  },
  _reRender() { // переопределяется из subscribe()
    console.log('State changed')
  },
  // addLang(postLang) {
  //   this._state.settings.ui[0].lang = postLang
  //   this._reRender(this._state)
  // },
  // addMessage() {
  //   let newElementArr = { name: this._state.newtext }
  //   this._state.crypto.coin.push(newElementArr)
  //   this._state.newtext = ''
  //   this._reRender(this._state)
  // },
  // updateMessage(newText) {
  //   this._state.newtext = newText
  //   this._reRender(this._state)
  // },
  dispatch(action) { // action - {type: 'string'}

    this._state.settings.ui[0].lang = settingsReduser(this._state.settings.ui[0].lang, action)
    this._state.crypto.coin = cryptoReduser(this._state.crypto.coin, action)
    this._state = newtextReduser(this._state, action)
    this._reRender(this._state)

    // if (action.type === ADD_LANG) {//                       Lang
    //   this._state.settings.ui[0].lang = action.newLang
    //   this._reRender(this._state)
    // }
    // else if (action.type === ADD_MESSAGE) {//               button
    //   let newElementArr = { name: this._state.newtext }
    //   this._state.crypto.coin.push(newElementArr)
    //   this._state.newtext = ''
    //   this._reRender(this._state)
    // }
    // else if (action.type === ADD_MESSAGE_2) {//              button-2
    //   let newElementArr = { name: this._state.newtext2 }
    //   this._state.crypto.coin.push(newElementArr)
    //   this._state.newtext2 = ''
    //   this._reRender(this._state)
    // }
    // else if (action.type === UPDATE_MESSAGE) {//             textarea
    //   this._state.newtext = action.newText
    //   this._reRender(this._state)
    // }
    // else if (action.type === UPDATE_MESSAGE_2) {//           textarea-2
    //   this._state.newtext2 = action.newText2
    //   this._reRender(this._state)
    // }
  }
}
export const MyLangActionCreator = (lang) => {//              lang
  //                        из store
  return { type: ADD_LANG, newLang: lang }
}
export const btnAddMessageActionCreator = () => {//           button
  return { type: ADD_MESSAGE }
}
export const btnAddMessageActionCreator2 = () => {//          button-2
  return { type: ADD_MESSAGE_2 }
}
export const onTextChangeActionCreator = (text) => {//        textarea
  return { type: UPDATE_MESSAGE, newText: text }
}
export const onTextChangeActionCreator2 = (text) => {//       textarea-2
  return { type: UPDATE_MESSAGE_2, newText2: text }
}
export default store
window.store = store //**************************************************
