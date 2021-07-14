const ADD_MESSAGE = 'ADD-MESSAGE'//                   button
const ADD_MESSAGE_2 = 'ADD-MESSAGE-2'//               button-2

const cryptoReduser = (state, action) => {
  if (action.type === ADD_MESSAGE) {//                     button
    let newElementArr = { name: state.newtext }
    state.push(newElementArr)
    state.newtext = ''
  }
  else if (action.type === ADD_MESSAGE_2) {//              button-2
    let newElementArr = { name: state.newtext2 }
    state.push(newElementArr)
    state.newtext2 = ''
  }
  return state
}
export default cryptoReduser
