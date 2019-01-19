import axios from '../../axios-order';

export const addItemHandler = (item) => {
    return {
        type: 'ADD_ITEM',
        item: item
    }
}

export const reduceItemHandler = (item) => {
    return {
        type: 'REDUCE_ITEM',
        item: item
    }
}



export const setIngredients = (ingredients) => {
    return {
        type: 'SET_INGREDIENTS',
        ingredients: ingredients,
        loading: false
    }
}


export const getIngredients = () => {
    return (dispatch) => {
        axios.get('https://react-burger-builder-7a891.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data))
            })
            .catch(e => {
                return {
                    type: 'ERROR_LOADING_INGREDIENTS',
                    error: null,
                    loading: false
                }
            });
    }
}


export const toggleModalHandler = () => {

}