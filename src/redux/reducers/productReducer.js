import { ActionTypes } from "../constants/action-types";

const initialstate = {
    products:[],
    carts:[],
};

export const productReducer = (state = initialstate,{type,payload}) => {
    switch(type){
        case ActionTypes.GET_PRODUCTS:
            return {...state, products: payload};
            default:
            return state; 
    }

};

export const ProductDetailReducer = (state = {},{type,payload}) => {
    switch(type){
        case ActionTypes.VIEW_PRODUCT_DETAIL:
            return {...state, ...payload};
            default:
            return state; 
    }

};

export const AddtoCartReducer = (state = initialstate, {type,payload}) => {
    switch(type){
        case ActionTypes.ADD_CART:
            const quantity = 0;
            return {
                ...state, carts: [...state.carts, payload]
            };
        case ActionTypes.REMOVE_CART:
            const data = state.carts.filter((e) => e.id !== payload)  
            return{
                ...state, carts: data
            };  
            default:
                return state;
    }
}