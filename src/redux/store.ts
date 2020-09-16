import {combineReducers, createStore} from 'redux';
import {loaderReducer} from './loaderReducer';
import {themeReducer} from '../reducers/themeReducer';


const rootReducer = combineReducers({
    loader : loaderReducer,
    theme : themeReducer,
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>