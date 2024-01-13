import React,{useState} from 'react'
import List from './components/List'
import NavBar from './components/Navbar/Navbar';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';
//import { createBrowserRouter, RouterProvider } from 'react-router-dom'; we are not using react-bootstrap@6
import { Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom";//we now using version 5 of react-bootsrap
import About from './Pages/About';
import HomePage from './Pages/HomePage';
import Movies from './components/movie/Movies';
import ProductDetail from './Pages/ProductDetail';
import ContactUs from './Pages/ContactUs';
import AuthForm from './Pages/AuthForm';

const App = () => {

  const [cartShown, setCartShown] = useState(false);



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



  async function addMovieHandler(movie) {
    const response = await fetch('https://react-bootsrap-ecom-fetch-api-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: { 'Content-Type': 'application/json'}
    });
    const data = await response.json();
    console.log(data);
  }

  const contactFormHandler = async (userIssue) =>{
    const response = await fetch('https://react-bootsrap-ecom-fetch-api-default-rtdb.firebaseio.com/issues.json',{
      method: 'POST',
      body: JSON.stringify(userIssue),
      headers: {'Content-Type' : 'application/json'}
    })
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
    <CartProvider>
      <NavBar onShowCart={showCartHandler}/>
      {cartShown && <Cart onHideCart={hideCartHandler}/>}
      <Switch>
        <Route exact path= '/'> <HomePage/></Route>
        <Route path='/Store/:productId'> <ProductDetail/> </Route>
        <Route path= '/Store'><List/></Route>
        <Route path= '/Movie'> <Movies onAddMovie={addMovieHandler}/> </Route>
        <Route path= '/About'><About/></Route>
        <Route path='/Contact'> <ContactUs contactFormHandler={contactFormHandler} /> </Route>
        <Route path = '/auth'> <AuthForm/> </Route>
      {/* <Route path="/Store" component={List} /> if above Route syntax not work so we can use like this*/}
      </Switch>
    </CartProvider>
    </>
  )
}

export default App
