import React,{useState} from 'react'
import List from './components/List'
import NavBar from './components/Navbar/Navbar';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';

const App = () => {

  const [cartShown, setCartShown] = useState(false);

  const router = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: '/About', element: <About/>}
  ]);

  const showCartHandler = () => {
    setCartShown(true);
  }
  const hideCartHandler = () => {
    setCartShown(false);
  }

  return (
    <>
    <RouterProvider router={router}/>
    <CartProvider>
      <NavBar onShowCart={showCartHandler}/>
      <List/>
      {cartShown && <Cart onHideCart={hideCartHandler}/>}
    </CartProvider>
    </>
  )
}

export default App
