import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../store/Cart-context";
import { Button, Card } from "react-bootstrap";
import Modal from "../UI/Modal";
import "./Cart.css";
import axios from "axios";
import AuthContext from "../../store/auth-context";

const Cart = (props) => {
  const cartCxt = useContext(CartContext);
  const authCxt = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCartItems = async () => {
      try {
        const userEmail = authCxt.userEmail;
        const response = await axios.get(
          `https://crudcrud.com/api/0f047e23a60142ae870715fe674e6f3b/cart/test1testcom`
        );
        if (response.status === 200) {
          let data = response.data; //data hme as object mila hoga to use array me rakhna padega pr object ko
          let cartItems = []; //ye array of object fir cartProvider me deke items me set kr denge get kiye to api se
          for (let key in data) {
            cartItems.push({
              id: key,
              ...data[key],
            }); //For each key in the data object, it creates a new object representing a cart item. This object has an id property set to the current key and other properties copied from the corresponding data[key].
          }
          cartCxt.addItem(cartItems); //sare cart ke items/object ke liye cartItems me push krke set kr diye
        } else {
          console.log("failed to fetch cart Items");
        }
      } catch (error) {
        console.log("failed to fetch data", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (authCxt.isLoggedIn) {
      fetchCartItems();
    } else {
      //agar userloggin h to hi cartFetch hoga ni to ni hoga
      setIsLoading(false);
    }
  }, [authCxt.isLoggedIn, authCxt.userEmail, cartCxt.setItems]);

  let totalAmount = cartCxt.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Modal onHideCart={props.onHideCart}>
        {isLoading && <p>Loading cart...</p>}
        {!isLoading && (
          <ul>
            {cartCxt.items.map((item) => (
              <li key={item.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Text>
                      Price:{item.price} Quantity:{item.quantity}x
                      <button onClick={() => cartCxt.updateItem(item.id)}>
                        -
                      </button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </li>
            ))}
            <Card.Text>{totalAmount.toFixed(2)}</Card.Text>
            <Button onClick={props.onHideCart} variant="primary">
              Close
            </Button>
          </ul>
        )}
      </Modal>
    </>
  );
};

export default Cart;
