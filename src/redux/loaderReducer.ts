const SET_LOADING = 'SET-LOADING';

export const InitialState: InitialStateType = {
    loading: false,
};

export type InitialStateType = {
    loading: boolean
}

type ActionType = {
    type: typeof SET_LOADING
}

export const loaderReducer = (state = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        default : return state;
    }
}

export const setLoadingAC = () : ActionType => {
    return {
        type : SET_LOADING,
    }
}