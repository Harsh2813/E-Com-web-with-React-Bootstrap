import React,{useState} from 'react'
import List from './components/List'
import NavBar from './components/Navbar/Navbar';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';

const App = () => {

  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  }
  const hideCartHandler = () => {
    setCartShown(false);
  }

  return (
    <CartProvider>
      <NavBar onShowCart={showCartHandler}/>
      <List/>
      {cartShown && <Cart onHideCart={hideCartHandler}/>}
    </CartProvider>
  )
}

export default App
