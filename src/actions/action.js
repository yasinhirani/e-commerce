import { GET_PRODUCTS, GET_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART } from '../constants/index';

export const getProducts = (data) => {
    return{
        type : GET_PRODUCTS,
        data : data
    }
}

// export const getProduct = (data) => {
//     return{
//         type : GET_PRODUCT,
//         data : data
//     }
// }

export const addToCart = (data) => {
    return{
        type : ADD_TO_CART,
        payload : data
    }
}

export const removeFromCart = (data) => {
    return{
        type : REMOVE_FROM_CART,
        payload : data
    }
}