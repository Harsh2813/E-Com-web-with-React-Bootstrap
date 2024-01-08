import React, {useContext} from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import CartContext from "../store/Cart-context";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const List = () => {

  const cartCxt = useContext(CartContext);

  const addToCartHandler = (data) => {
    cartCxt.addItem(data);
  }

  return (
    <>
      <ul>
        <Container>
          <Row>
            {productsArr.map((item) => (
              <Col key={item.id} md={6} className="mb-5">
                <Card style={{ width: "18rem" }}>
                <Card.Title>{item.title}</Card.Title>
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Text>{item.price}</Card.Text>
                    <Button onClick={()=> addToCartHandler(item)} variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </ul>
    </>
  );
};

export default List;
