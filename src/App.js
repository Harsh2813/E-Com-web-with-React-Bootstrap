import React,{useState} from 'react'
import List from './components/List'
import NavBar from './components/Navbar/Navbar';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';
//import { createBrowserRouter, RouterProvider } from 'react-router-dom'; we are not using react-bootstrap@6
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";//we now using version 5 of react-bootsrap
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import Movies from './components/movie/Movies';
import AddMovie from './components/movie/AddMovie';

const App = () => {

  const [cartShown, setCartShown] = useState(false);
  const [movieShown, setMovieShown] = useState(false);
  const [addMovieShown, setAddMovieShown] = useState(false);

  // const router = createBrowserRouter([
  //   {path: '/', element: <HomePage/>},
  //   {path: '/About', element: <About/>},
  //   {path: '/Store', element: <List/>}
  // ]);

  const showCartHandler = () => {
    setCartShown(true);
  }
  const hideCartHandler = () => {
    setCartShown(false);
  }

  const movieShownHandler = () => {
    setMovieShown(true);
    setAddMovieShown(true);
  }
  const movieHideHandler = () => {
    setMovieShown(false);
    setAddMovieShown(false);
  }

  async function addMovieHandler(movie) {
    const response = await fetch('https://react-bootsrap-ecom-fetch-api-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: { 'Content-Type': 'application/json'}
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
    <CartProvider>
      <NavBar onShowCart={showCartHandler} onShowMovies={movieShownHandler}/>
      {cartShown && <Cart onHideCart={hideCartHandler}/>}
      <Switch>
      <Route exact path= '/'> <HomePage/></Route>
      <Route path= '/Store'><List/></Route>
      <Route path= '/Movie'> <Movies/> </Route>
      <Route path= '/About'><About/></Route>
      {/* <Route path="/Store" component={List} /> if above Route syntax not work so we can use like this*/}
      </Switch>
    </CartProvider>
    {addMovieShown && <AddMovie onAddMovie={addMovieHandler}/>}
    <br/>
    {movieShown && <Movies onShowMovies={movieShownHandler} onHideMovies={movieHideHandler}/>}
    {/* <RouterProvider router={router}/> */}
    </>
  )
}

export default App
