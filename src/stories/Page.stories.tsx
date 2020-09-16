import JuniorPlus from '../Components/Content/JuniorPlus/JuniorPlus';
import {JuniorPlusDecorator} from './decorators/JuniorPlusDecorators';
import {Meta} from '@storybook/react';
import React from 'react';

export default {
    title: 'Page example',
    component: JuniorPlus,
    decorators: [JuniorPlusDecorator],
}  as Meta;

export const PageChangeExample = () => {
    return <JuniorPlus/>
}