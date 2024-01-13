import React, {useContext} from 'react'
import { Navbar, Container, Button, Nav } from 'react-bootstrap'
import { NavLink, Link } from "react-router-dom/cjs/react-router-dom";
import CartContext from '../../store/Cart-context'

const NavBar = (props) => {

    const cartCxt = useContext(CartContext);

    let cartQuantity = 0;
    cartCxt.items.forEach((item) => {
        return cartQuantity = cartQuantity + Number(item.quantity);
    });

  return (
    <>
      <Navbar bg="dark" expand="md" variant='dark'>
        <Container>
            <Nav className="me-auto">
                <NavLink to="/" style={{color: 'white'}}>Home</NavLink>{" "}
                <NavLink to ="/Store" style={{color: 'white'}}>Store</NavLink>
                <NavLink to="/Movie" style={{color: 'white'}}>Movie</NavLink>
                <NavLink to="/About" style={{color: 'white'}}>About</NavLink>
                <NavLink to="/Contact" style={{color: 'white'}}>Contact US</NavLink>
                <Link to='/auth' style={{color: 'white'}}>Login</Link>
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
