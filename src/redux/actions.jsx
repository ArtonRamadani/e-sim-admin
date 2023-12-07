// Action creators
export const setLogIn = (isLoggedIn) => ({
    type: 'setLogIn',
    payload: { data: isLoggedIn },
});

export const setAuth = (authData) => ({
    type: 'setAuth',
    payload: { data: authData },
});
export const setUserData = (userData) => ({
    type: 'setUserData',
    payload: { data: userData },
});
export const setSelectedLang = (selectedLang) => ({
    type: 'setSelectedLang',
    payload: { data: selectedLang },
});
export const setLangData = (langData) => ({
    type: 'setLangData',
    payload: { data: langData },
});
export const sidebarTogel = (state) => ({
    type: 'sidebarTogel',
    payload: { data: state },
});
