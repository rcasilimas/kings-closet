
import ShopActionTypes from './shop-types';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined,
    product: {
        item: false,
        productPage: false,
    }
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            console.log(state.isFetching, 'start')
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS: 
            console.log(state.isFetching, 'success')
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            console.log(state.isFetching, 'failure')
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case ShopActionTypes.FETCH_PRODUCT_PAGE:
            return {
                ...state,
                product: {
                    productPage: true,
                    item: action.payload
                }
            }
        case ShopActionTypes.REMOVE_PRODUCT_PAGE:
            return {
                ...state,
                product: {
                    productPage: false,
                    item: null
                }
                
            }
        default: 
            return state;
    }
}

export default shopReducer;