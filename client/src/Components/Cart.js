import React, {useState} from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckout from "react-stripe-checkout";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

function Cart(props) {
  const { cartItems } = props;
  // const [cartItems, setCart] = useState(props.cartItems);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    address: ""
  });
  const [shipping, setShipping] = useState(8)
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  // function createOrder(evt) {
  //   evt.preventDefault();

  //   const newOrder = {
  //     name: userInfo.name,
  //     email: userInfo.email,
  //     address: userInfo.address,
  //     cart: cartItems
  //   }

  //   props.createOrder(newOrder);
  // }

  function closeSuccessModal() {
    setShowSuccess(false);
    cartItems.length = 0;
    localStorage.setItem(
      "cartItems",
      []);
  }

  function closeErrorModal() {
    setShowError(false);
  }

  function handleToken (token) {
    const product = cartItems;
    const amount =  (cartItems.reduce((a, c) => a + c.price * c.count, 0)+shipping) * 100
    console.log(token);
    const body = {
      token,
      product,
      amount
    }
    const headers = {
      "Content-Type": "application/json"
    }

    return fetch(`http://localhost:3001/payment`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    }).then(response => {
      const { status } = response;
      console.log("STATUS: ", status);
 
      setShowSuccess(true);

    }).catch(err => { 
      console.log(err);
      setShowError(true)
    });
  }

  return (
    <>
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            Shopping Cart
          </div>
        )}
      </div>
      {cartItems.length !== 0 && (
        <>
          <div>
            <div className="cart">
              <Fade left cascade>
              <ul className="cart-items">
                {cartItems.map((item) => {
                  return (
                    <li key={item._id}>
                      <div>
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div>
                        <p>{item.title}</p>
                        <p>
                          {item.size} x {item.count}{"  "}
                        </p>
                      </div>
                      <div className="right">
                        <button id={item._id + item.size} onClick={(evt) => props.removeFromCart(evt, item)}>
                          X
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
              </Fade>
            </div>
          </div>
          <div className="cart">
            <div className="total">
              <div>
                <p>
                Total:{" "}
                {formatCurrency(
                  cartItems.reduce((a, c) => a + c.price * c.count, 0)
                )}
                </p>
                <p>Shipping: {" "}{formatCurrency(shipping)}</p>
              </div>
              <StripeCheckout
                stripeKey="pk_test_51Hqno3CUbxqSHspvtJFJ7XYSpm1CfaCU5sjo24bJCeKZ1uWNOXQlzaEfrMGiHGdBAPzf4J5KuRrfdMTwektSgy15009hCPZZGq"
                token={handleToken}
                description="Evolve With Anna x Vuori"
                shippingAddress={true}
                billingAddress={true}
                product={cartItems}
                amount={
                  (cartItems.reduce((a, c) => a + c.price * c.count, 0)+shipping) * 100}>
                  <button className="button button primary">Checkout</button>
                </StripeCheckout>
            </div>
          </div>
          <Modal isOpen={showSuccess} onRequestClose={closeSuccessModal}>
            <Zoom>
              Thank you for your purchase! Anna and Chris appreciate your support and can't wait to see everyone rocking their tees.

              You can expect to receive your shirt in 3-4 weeks. Please reach out if you have any questions!
            </Zoom>
          </Modal>
          <Modal isOpen={showError} onRequestClose={closeErrorModal}>
            <Zoom>
              Oops, something went wrong. Try placing your order again later.
            </Zoom>
          </Modal>
        </>
      )}
    </>
  );
}

export default Cart;
