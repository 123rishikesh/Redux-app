import { ActionTypes } from "../constants/action-types";

export const getProducts = (products) => {

    return {
        type: ActionTypes.GET_PRODUCTS,
        payload: products,
    };
};

export const viewProductDetail = (product) => {

    return {
        type: ActionTypes. VIEW_PRODUCT_DETAIL,
        payload: product,
    };
};

export const ADD = (item) => {

    return {
        type:ActionTypes.ADD_CART,
        payload:item
    }
}

export const DELETE = (id) => {

    return {
        type:ActionTypes.REMOVE_CART,
        payload:id
    }
}