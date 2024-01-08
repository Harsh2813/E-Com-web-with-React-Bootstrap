import React, {useContext} from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
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
                <Nav.Link href="#home" style={{color: 'white'}}>Home</Nav.Link>
                <Nav.Link href="#link" style={{color: 'white'}}>Store</Nav.Link>
                <Nav.Link href="#link" style={{color: 'white'}}>About </Nav.Link>
                <Button onClick={props.onShowCart} style={{marginLeft: '1000px'}}variant="primary">Cart{cartQuantity}</Button>
            </Nav>
        </Container>
      </Navbar>
      <h1 style={{background: 'grey', color: 'white', display: 'flex', justifyContent: 'center', marginTop: '2px'}}>The Generics</h1>
    </>
  )
}

export default NavBar;
