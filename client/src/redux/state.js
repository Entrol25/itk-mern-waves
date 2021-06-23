//import { reRender } from '../render.js'
let reRender = () => { // переопределяется из subscribe()
  console.log('State changed')
}
let state = {
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
  newtext: 'QWERTY'
}
window.state = state //**************************************************
export const addLang = (postLang) => {
  state.settings.ui[0].lang = postLang
  //state[0].lang = postLang
  //console.log(postLang + " postLang (1)")
  // let newSotial = state.settings.ui.map((count) => {
  //   console.log(count.lang + ' count.lang (2)')
  //   return (count.lang)
  // })
  //console.log(newSotial + " newSotial (3)")
  reRender(state)
}
export const addMessage = () => {
  let newElementArr = { name: state.newtext }
  //debugger;
  state.crypto.coin.push(newElementArr)
  state.newtext = ''
  reRender(state)
}
export const updateMessage = (newText) => {
  state.newtext = newText
  reRender(state)
}
export const subscribe = (observer) => {
  reRender = observer // паттерн наблюдатель-observer
}
export default state
