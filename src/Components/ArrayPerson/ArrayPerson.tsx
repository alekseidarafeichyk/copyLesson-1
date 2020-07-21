import React, {useReducer} from 'react';
import {hwReducer} from '../../reducers/homeWorkReducer';
import ButtonNya from '../ButtonNya/ButtonNya';

function ArrayPerson() {

    const arrPerson = [
        {id: '1', name: 'Victor', age: 30},
        {id: '2', name: 'Alex', age: 17},
        {id: '3', name: 'Sergey', age: 22},
        {id: '4', name: 'Valera', age: 6},
        {id: '5', name: 'Kim', age: 33},
        {id: '6', name: 'Andrey', age: 16},
        {id: '7', name: 'Yan', age: 5},
    ];

    let  [state,dispatch] = useReducer(hwReducer,arrPerson)

    const ascSort = () => {
        dispatch({type: 'SORT', payload: 'asc'})
    }
    const descSort = () => {
        dispatch({type: 'SORT', payload: 'desc'})
    }

    const checkSort = () => {
        dispatch({type: 'CHECK', payload: 18})
    }

    return (
        <div>
            {state.map(el => el.name + ' ')}
            <ButtonNya onClick={ascSort}>ascSort</ButtonNya>
            <ButtonNya onClick={descSort}>descSort</ButtonNya>
            <ButtonNya onClick={checkSort}>checkSort</ButtonNya>
        </div>

    )
}

export default ArrayPerson