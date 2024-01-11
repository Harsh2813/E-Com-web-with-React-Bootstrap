import React, {useContext} from 'react'
import { Navbar, Container, Button, Nav } from 'react-bootstrap'
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import CartContext from '../../store/Cart-context'

const NavBar = (props) => {

    const cartCxt = useContext(CartContext);

    let cartQuantity = 0;
    cartCxt.items.forEach((item) => {
        return cartQuantity = cartQuantity + Number(item.quantity);
    });

    const handleMoviesClick = () => {
      props.onShowMovies(); // Notify App component to show Movies
    };

  return (
    <>
      <Navbar bg="dark" expand="md" variant='dark'>
        <Container>
            <Nav className="me-auto">
                <NavLink to="/" style={{color: 'white'}}>Home</NavLink>{" "}
                <NavLink to ="/Store" style={{color: 'white'}}>Store</NavLink>
                <NavLink to="/Movie" style={{color: 'white'}}>Movie</NavLink>
                <NavLink to="/About" style={{color: 'white'}}>About</NavLink>
                {/* <Nav.Link href="/About" style={{color: 'white'}}>About </Nav.Link> this we using in botsrap@6*/}
                <Button onClick={props.onShowCart} style={{marginLeft: '800px'}}variant="primary">Cart{cartQuantity}</Button>
            </Nav>
        </Container>
      </Navbar>
      <h1 style={{background: 'grey', color: 'white', display: 'flex', justifyContent: 'center', marginTop: '2px'}}>The Generics</h1>
    </>
  )
}

export default NavBar;
