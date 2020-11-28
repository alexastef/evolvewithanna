import React from "react";
import data from "./data.json";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
      size: "",
      count: 0
    };
  }

  createOrder = (order) => {
    alert("Need to save order for " + order.name);
  };

  removeFromCart = (evt, product) => {
    const filterId = evt.target.id;
    const cartItems = this.state.cartItems.slice();
    const finalCart = cartItems.filter(item =>  item.checkoutId !== filterId);

    this.setState({ cartItems: finalCart });
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(item =>  item.checkoutId !== filterId)));
   
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;

    cartItems.forEach(item => {
      if (item._id === product._id && item.size === product.size) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart){
      cartItems.push({...product, count: 1});
    }

    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/"><strong>ANNA'S KULA</strong></a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products} addToCart={this.addToCart}></Products>
            </div>
            <div className="sidebar">
              <Cart 
              cartItems={this.state.cartItems}
              size={this.state.size} 
              removeFromCart={this.removeFromCart}
              createOrder={this.createOrder} />
            </div>
          </div>
        </main>
        <footer>
         Alexa Stef Creative
        </footer>
      </div>
    );
  }
}

export default App;
