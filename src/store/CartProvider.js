import React, {useState} from 'react'
import CartContext from './Cart-context'

const CartProvider = (props) => {

    const [items, setItems] = useState([]);

    const addItemToCartHandler = (gotData) => {
        setItems((prevData) =>{
            let existItem = prevData.find((item) => item.id === gotData.id);
            if(existItem){
                return prevData.map((item) => item.id === gotData.id ? {...item, quantity: item.quantity + 1} : item);
            }else{
                return [...prevData, {...gotData, quantity: 1}];
            }
        });
    }

    const removeItemToCartHandler = (id) => {
        setItems(items.filter((item) => item.id !== id));
    }

    const cartContext = {
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    }

  return (
    <>
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    </>
  )
}

export default CartProvider
