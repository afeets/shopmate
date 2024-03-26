import { createContext, useContext } from "react"

// initial state
const initialState = {
    cartList: [],
    total: 0
}

// create context used everywhere
const CartContext = createContext(initialState);

// wrap with provider
export const CartProvider = ({ children }) => {
    const value = {
        total: 0,
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