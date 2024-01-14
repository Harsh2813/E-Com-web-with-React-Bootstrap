import React, { useState, useContext } from "react";
import List from "./components/List";
import NavBar from "./components/Navbar/Navbar";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/CartProvider";
//import { createBrowserRouter, RouterProvider } from 'react-router-dom'; we are not using react-bootstrap@6
import { Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom"; //we now using version 5 of react-bootsrap
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
import Movies from "./components/movie/Movies";
import ProductDetail from "./Pages/ProductDetail";
import ContactUs from "./Pages/ContactUs";
import AuthForm from "./Pages/AuthForm";
import AuthContext from "./store/auth-context";

const App = () => {
  const [cartShown, setCartShown] = useState(false);

  const authCxt = useContext(AuthContext);

  // const router = createBrowserRouter([
  //   {path: '/', element: <HomePage/>},
  //   {path: '/About', element: <About/>},
  //   {path: '/Store', element: <List/>}
  // ]);

  const showCartHandler = () => {
    setCartShown(true);
  };
  const hideCartHandler = () => {
    setCartShown(false);
  };

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-bootsrap-ecom-fetch-api-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  const contactFormHandler = async (userIssue) => {
    const response = await fetch(
      "https://react-bootsrap-ecom-fetch-api-default-rtdb.firebaseio.com/issues.json",
      {
        method: "POST",
        body: JSON.stringify(userIssue),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <CartProvider>
        <NavBar onShowCart={showCartHandler} />
        {cartShown && <Cart onHideCart={hideCartHandler} />}
        <Switch>
          <Route exact path="/">
            {authCxt.isLoggedIn && <HomePage />}
            {!authCxt.isLoggedIn && <Redirect to="/auth" />}
          </Route>
          <Route path="/Store/:productId">
            {authCxt.isLoggedIn && <ProductDetail />}
            {!authCxt.isLoggedIn && <Redirect to="/auth" />}
          </Route>
          <Route path="/Store">
            {authCxt.isLoggedIn && <List />}
            {!authCxt.isLoggedIn && <Redirect to="/auth" />}
          </Route>
          <Route path="/Movie">
            {authCxt.isLoggedIn && <Movies onAddMovie={addMovieHandler} />}
            {!authCxt.isLoggedIn && <Redirect to="/auth" />}
          </Route>
          <Route path="/About">
            {authCxt.isLoggedIn && <About />}
            {!authCxt.isLoggedIn && <Redirect to="/auth" />}
          </Route>
          <Route path="/Contact">
            {authCxt.isLoggedIn && (
              <ContactUs contactFormHandler={contactFormHandler} />
            )}
            {!authCxt.isLoggedIn && <Redirect to="/auth" />}
          </Route>
          {!authCxt.isLoggedIn && (
            <Route path="/auth">
              <AuthForm />
            </Route>
          )}
          {/* <Route path="/Store" component={List} /> if above Route syntax not work so we can use like this*/}
        </Switch>
      </CartProvider>
    </>
  );
};

export default App;
