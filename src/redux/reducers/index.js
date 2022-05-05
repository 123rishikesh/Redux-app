import {combineReducers} from 'redux';
import { productReducer, ProductDetailReducer,AddtoCartReducer} from './productReducer';

 const reducers = combineReducers({
    allProducts:productReducer,
    product: ProductDetailReducer,
    AddtoCartReducer:AddtoCartReducer,
});

export default reducers;