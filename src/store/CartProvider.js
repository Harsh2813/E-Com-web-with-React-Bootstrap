import React, { useState, useContext } from "react";
import CartContext from "./Cart-context";
import axios from "axios";
import AuthContext from "./auth-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const authCxt = useContext(AuthContext);

  const addItemToCartHandler = async (gotData) => {
    try {
      const userEmail = authCxt.userEmail;
      const response = await axios.post(
        `https://crudcrud.com/api/0f047e23a60142ae870715fe674e6f3b/cart/test1testcom`,
        gotData,
        {
          // Additional headers for proxy server or browser extension
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000'
          }
        }
      );
      if (response.status === 200) {
        setItems((prevData) => {
          let existItem = prevData.find((item) => item.id === gotData.id);
          if (existItem) {
            return prevData.map((item) =>
              item.id === gotData.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            return [...prevData, { ...gotData, quantity: 1 }];
          }
        });
      } else {
        console.error("Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const removeItemToCartHandler = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItemToCartHandler = (id) => {
    setItems((prevItems) => {
      const updateItems = prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      return updateItems.filter((item) => item.quantity > 0);
    });
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    updateItem: updateItemToCartHandler,
  };

  return (
    <>
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
