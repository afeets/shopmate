import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducer/CartReducer";

// initial state
const initialState = {
    cartList: [],
    total: 0
}

// create context used everywhere
const CartContext = createContext(initialState);

// wrap with provider
export const CartProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        const updatedCart = state.cartList.concat(product);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCart
            }   
         })
    }

    const removeFromCart = (product) => {
        // removed product from list matching id
        const updatedCart = state.cartList.filter(current => current.id !== product.id);

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCart
            }
        })
    }

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart
    };

    return (
        <CartContext.Provider value = {value}>
            { children }
        </CartContext.Provider>
    );
}

// help component access values
export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}