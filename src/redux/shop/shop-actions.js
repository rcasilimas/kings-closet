import ShopActionTypes from './shop-types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase'

export const fetchProductPage = (item) => ({
    type: ShopActionTypes.FETCH_PRODUCT_PAGE,
    payload: item
})

export const removeProductPage = () => ({
    type: ShopActionTypes.REMOVE_PRODUCT_PAGE
})

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        
    }
}