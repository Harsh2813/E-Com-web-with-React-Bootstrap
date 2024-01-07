import React from 'react'

const Cart = (props) => {
  return (
    <>
      <ul>
        {props.list}
        <button onClick={props.onCartHide}>Hide Cart</button>
      </ul>
    </>
  )
}

export default Cart
