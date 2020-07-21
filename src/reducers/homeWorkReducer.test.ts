import {hwReducer} from './homeWorkReducer'

test('should sort by name and ascending array', () => {
    const startState = [
        {id: '1', name: 'Victor', age: 30},
        {id: '2', name: 'Alex', age: 17},
        {id: '3', name: 'Sergey', age: 22},
        {id: '4', name: 'Valera', age: 6},
        {id: '5', name: 'Kim', age: 33},
        {id: '6', name: 'Andrey', age: 16},
        {id: '7', name: 'Yan', age: 5},
    ];
    const endState = hwReducer(startState, {type: 'SORT', payload: 'asc'})

    expect(endState[0]).toStrictEqual( {id: '2', name: 'Alex', age: 17})
    expect(endState[1]).toStrictEqual( {id: '6', name: 'Andrey', age: 16})
    expect(endState[2]).toStrictEqual({id: '5', name: 'Kim', age: 33})
    expect(endState[6]).toStrictEqual({id: '7', name: 'Yan', age: 5})

})

test('should sort in reverse order by name and ascending', () => {
    const startState = [
        {id: '1', name: 'Victor', age: 30},
        {id: '2', name: 'Alex', age: 17},
        {id: '3', name: 'Sergey', age: 22},
        {id: '4', name: 'Valera', age: 6},
        {id: '5', name: 'Kim', age: 33},
        {id: '6', name: 'Andrey', age: 16},
        {id: '7', name: 'Yan', age: 5},
    ];
    const endState = hwReducer(startState, {type: 'SORT', payload: 'desc'})

    expect(endState[0]).toStrictEqual({id: '7', name: 'Yan', age: 5})
    expect(endState[1]).toStrictEqual({id: '1', name: 'Victor', age: 30})
    expect(endState[2]).toStrictEqual( {id: '4', name: 'Valera', age: 6})
    expect(endState[6]).toStrictEqual({id: '2', name: 'Alex', age: 17})
})


test('should return an array of people over 18', () => {
    const startState = [
        {id: '1', name: 'Victor', age: 30},
        {id: '2', name: 'Alex', age: 17},
        {id: '3', name: 'Sergey', age: 22},
        {id: '4', name: 'Valera', age: 6},
        {id: '5', name: 'Kim', age: 33},
        {id: '6', name: 'Andrey', age: 16},
        {id: '7', name: 'Yan', age: 5},
    ];
    const endState = hwReducer(startState, {type: 'CHECK', payload: 18})

    expect(endState.length).toBe(3)
    expect(endState[0]).toStrictEqual({id: '1', name: 'Victor', age: 30})
    expect(endState[2]).toStrictEqual({id: '5', name: 'Kim', age: 33})
})