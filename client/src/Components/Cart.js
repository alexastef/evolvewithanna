import React, {useState} from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";

function Cart(props) {
  const { cartItems } = props;
  const [showCheckout, setShowCheckout] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    address: ""
  });
  console.log("in cart", cartItems);

  function createOrder(evt) {
    evt.preventDefault();

    const newOrder = {
      name: userInfo.name,
      email: userInfo.email,
      address: userInfo.address,
      cart: cartItems
    }

    props.createOrder(newOrder);
  }

  function handleInput(evt) {
    setUserInfo({ ...userInfo, [evt.target.name]: evt.target.value })
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
                          {/* {formatCurrency(item.price*item.count)} */}
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
                Total:{" "}
                {formatCurrency(
                  cartItems.reduce((a, c) => a + c.price * c.count, 0)
                )}
              </div>
              <button className="button primary" onClick={() => setShowCheckout(true)}>Proceed</button>
            </div>
          </div>
          {showCheckout && (
            <Fade right cascade>
            <div className="cart">
              <form onSubmit={createOrder}>
                <ul className="form-container">
                  <li>
                    <label>Email</label>
                    <input name="email" type="email" required onChange={handleInput}></input>
                  </li>
                  <li>
                    <label>Name</label>
                    <input name="name" type="text" required onChange={handleInput}></input>
                  </li>
                  <li>
                    <label>Address</label>
                    <input name="address" type="text" required onChange={handleInput}></input>
                  </li>
                  <li>
                    <button className="button primary" type="submit">Checkout</button>
                  </li>
                </ul>
              </form>
            </div>
            </Fade>
          )}
        </>
      )}
    </>
  );
}

export default Cart;
