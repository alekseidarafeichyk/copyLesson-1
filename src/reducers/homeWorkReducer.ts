export const hwReducer = (state: Array<{ id: string, name: string, age: number }>, action: { type: string, payload: any }) => {
    switch (action.type) {

        case 'SORT' : {
            if (action.payload === 'asc') {
                return state.map(u => u).sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0)
            } else if (action.payload === 'desc') {
             return  state.map(el=>el).sort((a, b) => (a.name > b.name) ? -1 : (a.name < b.name) ? 1 : 0)
            }
        }
        case 'CHECK' :
            return state.filter(el => el.age > action.payload)
        default: return state
    }
    ;
};