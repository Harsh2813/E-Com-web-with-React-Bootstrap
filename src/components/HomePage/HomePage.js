import { Navbar, Nav, Container, Card, Button } from 'react-bootstrap';

import React from 'react'

const HomePage = () => {
  return (
    <>
      <Navbar bg="dark" expand="md" variant='dark'>
        <Container>
            <Nav className="me-auto">
                <Nav.Link href="#home" style={{color: 'white'}}>Home</Nav.Link>
                <Nav.Link href="#link" style={{color: 'white'}}>Store</Nav.Link>
                <Nav.Link href="#link" style={{color: 'white'}}>About </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <h1 style={{background: 'grey', color: 'white', display: 'flex', justifyContent: 'center', marginTop: '2px'}}>The Generics</h1>

    <Container fluid className="text-center">
      <img src="/logo.png" alt="The Generics" className="img-fluid mb-4" />
      <h1 className="display-4">The Generics</h1>
      <p className="lead">Catch us on tour!</p>
      <Button variant="primary">Get our Latest Album</Button>
    </Container>

    {/* <Container>
      <h2 className="mb-4">Upcoming Tour Dates</h2>
      <Card.Group>
        {tourDates.map((tourDate) => (
          <Card key={tourDate.id}>
            <Card.Body>
              <Card.Title>{tourDate.city}</Card.Title>
              <Card.Text>{tourDate.venue}</Card.Text>
              <Button variant="primary">Buy Tickets</Button>
            </Card.Body>
          </Card>
        ))}
      </Card.Group>
    </Container> */}

    <Container>
      <p className="text-center text-muted">Copyright &copy; 2023 The Generics</p>
    </Container>
    </>
  )
}

export default HomePage
