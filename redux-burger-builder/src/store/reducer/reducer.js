const initialState = {

    ingredients: null,
    price: 4.0,
    loading: false,
    error: null

}

const itemPrice = {
    meat: 1.4,
    cheese: 0.5,
    salad: 0.3,
    bacon: 0.9
}

const updatePriceHandler = (state, ingredients) => {
    const items = ['meat', 'cheese', 'salad', 'bacon'];
    let oldPrice = 4;
    const updatedIngredients = { ...ingredients };
    items.map((item) => {
        oldPrice = oldPrice + (updatedIngredients[item] * itemPrice[item]);
        return [];
    });
    return {
        ...state,
        ingredients: updatedIngredients,
        price: oldPrice
    }
}





const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_INGREDIENTS': {
            return {
                ...state,
                ingredients: action.ingredients,
                loading: action.loading
            }

        }

        case 'ERROR_LOADING_INGREDIENTS': {
            return {
                ...state,
                error: action.error,
                loading: action.loading
            }
        }

        case 'ADD_ITEM': {
            let oldCount = state.ingredients[action.item];
            let updatedCount = oldCount + 1;
            let updatedIngredients = { ...state.ingredients }
            updatedIngredients[action.item] = updatedCount;
            return updatePriceHandler(state, updatedIngredients)
        }

        case 'REDUCE_ITEM': {
            let oldCount = state.ingredients[action.item];
            if (oldCount <= 0) {
                return {
                    ...state
                };
            }
            let updatedCount = oldCount - 1;
            let updatedIngredients = { ...state.ingredients }
            updatedIngredients[action.item] = updatedCount;
            return updatePriceHandler(state, updatedIngredients);
        }

        default: return state
    }



}


export default reducer;