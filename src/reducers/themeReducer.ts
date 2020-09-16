export type themeStateType = {
    color: string
}

const themeState: themeStateType = {
    color: 'green'
}

export const themeReducer = (state:themeStateType = themeState, action: changeThemeActionType): themeStateType => {
    switch (action.type) {
        case 'CHANGE-BACKGROUND' :
            debugger
            return {
                ...state, color: action.theme

            }
        default :
            return state;
    }
}

export const changeThemeAC = (theme: string) => ({type: 'CHANGE-BACKGROUND', theme} as const)
type changeThemeActionType = ReturnType<typeof changeThemeAC>