import {combineReducers, createStore} from 'redux';
import {loaderReducer} from './loaderReducer';


const rootReducer = combineReducers({
    loader : loaderReducer,
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>