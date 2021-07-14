const ADD_LANG = 'ADD-LANG'//                             Lang

const settingsReduser = (state, action) => {
  if (action.type === ADD_LANG) {//                       Lang
    state = action.newLang
  }
  return state
}
export default settingsReduser
