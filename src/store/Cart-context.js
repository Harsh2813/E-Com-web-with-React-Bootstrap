import React from "react";

const CartContext = React.createContext({
    items: [],
    addItem: (data) => {},
    removeItem: (id) => {},
})

export default CartContext;