import { robot } from '../Container/robot';

const initialState = {
    robot: robot,
    searchfield: ''
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_FIELD_CHANGE':
            console.log(action.value);
            return {
                ...state,
                searchfield: action.value
            };
        default: return state;
    }
}

export default reducer;