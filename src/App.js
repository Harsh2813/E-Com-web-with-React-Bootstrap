import React,{useState} from 'react'
import List from './components/List'
import NavBar from './components/Navbar/Navbar';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import Movies from './components/movie/Movies';

const App = () => {

  const [cartShown, setCartShown] = useState(false);
  const [movieShown, setMovieShown] = useState(false);

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

  const movieShownHandler = () => {
    setMovieShown(true);
  }
  const movieHideHandler = () => {
    setMovieShown(false);
  }

  return (
    <>
    {movieShown && <Movies onShowMovies={movieShownHandler} onHideMovies={movieHideHandler}/>}
    <RouterProvider router={router}/>
    <CartProvider>
      <NavBar onShowCart={showCartHandler} onShowMovies={movieShownHandler}/>
      <List/>
      {cartShown && <Cart onHideCart={hideCartHandler}/>}
    </CartProvider>
    </>
  )
}

export default App
