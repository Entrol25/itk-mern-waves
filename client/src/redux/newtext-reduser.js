const UPDATE_MESSAGE = 'UPDATE-MESSAGE'//             textarea
const UPDATE_MESSAGE_2 = 'UPDATE-MESSAGE-2'//         textarea-2

const newtextReduser = (state, action) => {
  if (action.type === UPDATE_MESSAGE) {//             textarea
    state.newtext = action.newText
  }
  else if (action.type === UPDATE_MESSAGE_2) {//      textarea-2
    state.newtext2 = action.newText2
  }
  return state
}
export default newtextReduser
