const ADD_MESSAGE = 'ADD-MESSAGE'//                   button
const ADD_MESSAGE_2 = 'ADD-MESSAGE-2'//               button-2

const cryptoReduser = (state, state2, action) => {
  if (action.type === ADD_MESSAGE) {//                     button
    // let newElementArr = { name: state.newtext }
    let newElementArr = { name: state2.newtext }
    state.push(newElementArr)
    // console.log(state2.newtext)
    state2.newtext = ''
  }
  else if (action.type === ADD_MESSAGE_2) {//              button-2
    let newElementArr = { name: state2.newtext2 }
    state.push(newElementArr)
    // console.log(state2.newtext2)
    state2.newtext2 = ''
  }
  return state
}
export default cryptoReduser
