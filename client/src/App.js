import React from "react";
import data from "./data.json";
import Products from "./Components/Products";
import About from "./Components/About";
import Logo from "./Components/Logo";
// import Cart from "./Components/Cart";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";


import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// always call loadstripe promise outside of render function
const stripePromise = loadStripe("pk_test_51Hqno3CUbxqSHspvtJFJ7XYSpm1CfaCU5sjo24bJCeKZ1uWNOXQlzaEfrMGiHGdBAPzf4J5KuRrfdMTwektSgy15009hCPZZGq");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      size: "",
      count: 0,
      showModal: true
    };
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  createOrder = (order) => {
    alert("Need to save order for " + order.name);
  };

  removeFromCart = (evt) => {
    const filterId = evt.target.id;
    const cartItems = this.state.cartItems.slice();
    const finalCart = cartItems.filter((item) => item.checkoutId !== filterId);

    this.setState({ cartItems: finalCart });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((item) => item.checkoutId !== filterId))
    );
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;

    cartItems.forEach((item) => {
      if (item._id === product._id && item.size === product.size) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }

    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  render() {
    return (
      <div className="grid-container">
        <header>
          <Link
            to="about-section"
            className="header-left"
            activeClass="active"
            spy={true}
            smooth={true}
          >
            <strong>
              <span className="welcome">Evolve with Anna</span>
            </strong>
          </Link>
          <Link
            to="cart"
            className="header-right"
            activeClass="active"
            spy={true}
            smooth={true}
          >
            <i className="fas fa-shopping-cart fa-lg" />
          </Link>
        </header>
        <Elements stripe={stripePromise}>
          <main>
            <div className="content">
              <div className="main">
                <About />
                <Products
                  products={this.state.products}
                  addToCart={this.addToCart}
                ></Products>
                <Modal
                  isOpen={this.state.showModal}
                  onRequestClose={this.closeModal}
                  className="home-modal-wrapper"
                >
                  <Zoom>
                    <div className="modal-text">
                      <p>
                        Hi there! The Evolve With Anna x Vuori t-shirt campaign ended Friday 12/18. We are no longer taking orders, but feel free to read about Anna's story and view the shirt offerings.
                      </p>
                      <p>
                        If you are still interested in purchasing a shirt, would like to use the logo, or have any other questions, please reach out to Ashleigh or Alexa.
                      </p>
                      <p>
                        <ul>
                          <li className="email">copas5983@gmail.com</li>
                          <li className="email">alexa.c.stef@gmail.com</li>
                        </ul>
                      </p>
                      <img
                        src="https://i.imgur.com/k0xxxom.jpg"
                        className="thankyou-photo"
                        alt="Chris & Anna Thank You!"
                      />
                      <p>Thank you all so much for your love and support!</p>
                    </div>
                  </Zoom>
                </Modal>
              </div>
              <div className="sidebar">
                <Logo />
                {/* <Cart
                  cartItems={this.state.cartItems}
                  size={this.state.size}
                  removeFromCart={this.removeFromCart}
                  createOrder={this.createOrder}
                /> */}
              </div>
            </div>
          </main>
        </Elements>
        <footer>Alexa Stef Creative</footer>
      </div>
    );
  }
}

export default App;
