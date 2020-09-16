import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../../redux/store';

export const JuniorPlusDecorator = (storyFn : any) => {
    return <Provider store={store}>
        {storyFn()}
    </Provider>
}