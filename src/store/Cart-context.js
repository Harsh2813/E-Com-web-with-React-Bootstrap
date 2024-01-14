import React from "react";

const CartContext = React.createContext({
    items: [],
    addItem: (data) => {},
    removeItem: (id) => {},
    updateItem: (id) => {},
})

export default CartContext;