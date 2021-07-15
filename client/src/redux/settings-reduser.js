/* reduser - чистая функция которая принимает (state, action) 
если нужно action применяет к state
и возвращает новый state */
const ADD_LANG = 'ADD-LANG'//                             Lang

const settingsReduser = (state, action) => {
  if (action.type === ADD_LANG) {//                       Lang
    state = action.newLang
    // console.log(state)
  }
  return state
}
export const MyLangActionCreator = (lang) => {//              lang
  //                        из store
  return { type: ADD_LANG, newLang: lang }
}

export default settingsReduser
