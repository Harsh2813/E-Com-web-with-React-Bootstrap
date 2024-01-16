import { Navbar, Nav, Container, Card, Button } from "react-bootstrap";

import React from "react";

const HomePage = () => {
  return (
    <>
      <Container
        fluid
        className="text-center"
        style={{
          color: "white",
          textAlign: "center",
          margin: "0",
          padding: "0px",
          paddingBottom: "30px",
          background: "#777",
        }}
      >
        <Button variant="primary">Get our Latest Album</Button>
        <p className="lead">Play/Pause!</p>
      </Container>
      <Container className="text-center">
        <h2>Tours</h2>
        <br />
        <ul>
          <li>
            {" "}
            JUL16 - DETROIT, MI DTE ENERGY MUSIC -{" "}
            <Button> THEATRE BUY TICKETS - </Button>{" "}
          </li>
          <li>
            {" "}
            JUL19 - TORONTO,ON BUDWEISER STAGE -{" "}
            <Button>THEATRE BUY TICKETS</Button> -{" "}
          </li>
          <li>
            {" "}
            JUL 22 - BRISTOW, VA JIGGY LUBE LIVE -{" "}
            <Button>THEATRE BUY TICKETS</Button> -{" "}
          </li>
          <li>
            {" "}
            JUL 29 - PHOENIX, AZ AK-CHIN PAVILION -{" "}
            <Button>THEATRE BUY TICKETS</Button> -{" "}
          </li>
          <li>
            {" "}
            AUG 2 - LAS VEGAS, NV T-MOBILE ARENA -{" "}
            <Button>THEATRE BUY TICKETS</Button> -{" "}
          </li>
          <li>
            {" "}
            AUG 7 - CONCORD, CA CONCORD PAVILION -{" "}
            <Button>THEATRE BUY TICKETS</Button> -{" "}
          </li>
        </ul>
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

      <Container
        style={{
          background: "blue",
          color: "white",
        }}
      >
        <h1 className="text-center text-muted">
          Copyright &copy; 2023 The Generics
        </h1>
      </Container>
    </>
  );
};

export default HomePage;
