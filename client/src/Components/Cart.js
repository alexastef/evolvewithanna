import React, {useState} from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import StripeCheckout from "react-stripe-checkout";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

function Cart(props) {
  const { cartItems } = props;

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

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
    const amount =  cartItems.reduce((a, c) => a + c.price * c.count, 0) * 100
    console.log(token);
    const body = {
      token,
      product,
      amount
    }
    const headers = {
      "Content-Type": "application/json"
    }

    return fetch(`https://www.evolvewithanna.com/payment`, {
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
    <div>
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
              </div>
              <StripeCheckout
                stripeKey="pk_test_51Hqno3CUbxqSHspvtJFJ7XYSpm1CfaCU5sjo24bJCeKZ1uWNOXQlzaEfrMGiHGdBAPzf4J5KuRrfdMTwektSgy15009hCPZZGq"
                token={handleToken}
                description="Evolve With Anna x Vuori"
                shippingAddress={true}
                billingAddress={true}
                product={cartItems}
                amount={
                  cartItems.reduce((a, c) => a + c.price * c.count, 0) * 100}>
                  <button className="button button primary">Checkout</button>
                </StripeCheckout>
            </div>
          </div>
          <Modal isOpen={showSuccess} onRequestClose={closeSuccessModal} className="checkout-modal-wrapper">
            <Zoom>
              <h5 className="checkout-modal">
                Thank you for your purchase! Anna and Chris appreciate your support and can't wait to see everyone rocking their tees.
              </h5>
              <h5 className="checkout-modal">
                You can expect to receive your shirt in 3-4 weeks. Please reach out if you have any questions!
              </h5>
              <div className="checkout-modal">
                <img src="https://i.imgur.com/k0xxxom.jpg" className="thankyou-photo" alt="Chris & Anna Thank You!" />
              </div>
            </Zoom>
          </Modal>
          <Modal isOpen={showError} onRequestClose={closeErrorModal}>
            <Zoom>
              <h4 className="checkout-modal">
                Oops, something went wrong! Try placing your order again later or reach out to Ashleigh or Alexa.
              </h4>
            </Zoom>
          </Modal>
        </>
      )}
    </div>
  );
}

export default Cart;
