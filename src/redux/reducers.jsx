const initialState = {
  logged_in: false,
  auth: "",
  selected_lang: "AL",
  langData: [],
  isNavOpen: false
};

export default function rootReducer(
  state = initialState,
  action
) {
  // console.log('action redux t', action)
  switch (action.type) {
    case 'setLogIn':
      return { ...state, logged_in: action.payload.data };
    case 'setAuth':
      return { ...state, auth: action.payload.data };
    case 'setUserData':
      return { ...state, user_data: action.payload.data };
    case 'setSelectedLang':
      return { ...state, selected_lang: action.payload.data };
    case 'setLangData':
      return { ...state, langData: action.payload.data };
    case 'sidebarTogel':
      return { ...state, isNavOpen: action.payload.data };
    default:
      return state;
  }
}
