import { GET_PRODUCTS, GET_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART } from '../constants/index';

const initialState = {
    products:[],
    cart:[]
}
const productData = (state=initialState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            // console.log(action.data);
            return{...state, products:action.data}
            break;
        case ADD_TO_CART:
            // console.log(action.payload);
            state.cart.push(action.payload);
            return{...state}
            break;
        case REMOVE_FROM_CART:
            // console.log(action.payload);
            state.cart.splice(action.payload, 1);
            return{...state}
            break;
        default:
            return state;
    }
};

export default productData;