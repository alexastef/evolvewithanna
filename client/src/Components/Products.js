import React, { useState } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";

function Products(props) {
  const [showProduct, setProduct] = useState({});
  const [availableSizes, setSizes] = useState([]);
  const [productPrice, setPrice] = useState();
  const [showModal, setShow] = useState(false);
  const [cartProduct, setCartProduct] = useState({
    _id: "",
    image: "",
    title: "",
    price: "",
    size: "",
    checkoutId: ""
  })

  function openModal(product) {
    setProduct(product);
    setSizes(product.availableSizes);
    setPrice(product.price);
    setShow(true);
  }

  function closeModal() {
    setProduct({});
    setShow(false);
  }

  function setCartItems(evt) {
    evt.preventDefault();

    const size = evt.target.id;

    setCartProduct({
      _id: showProduct._id,
      image: showProduct.image,
      title: showProduct.title,
      price: productPrice,
      size: size,
      checkoutId: showProduct._id + size
    })
  }

  return (
    <div className="product-wrapper">
      <Fade bottom cascade>
        <ul className="products">
          {props.products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={"#" + product._id} onClick={() => openModal(product)}>
                  <img src={product.image} alt={product.title} />
                  <p><strong>{product.title}</strong></p>
                </a>
                <div className="product-price">
                  <p>{formatCurrency(product.price)}</p>
                  <button
                    className="button primary select-size"
                    onClick={() => openModal(product)}
                  >
                    Select Size
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Fade>
        <Modal isOpen={showModal} onRequestClose={closeModal} className="product-modal">
        <Zoom>
          <button className="close-modal" onClick={closeModal}>x</button>
          <div className="product-details">
            <img src={showProduct.image} alt={showProduct.title} />
            <div className="product-details-description">
              <p><strong>{showProduct.title}</strong></p>
              <p>{showProduct.description}</p>
              <p>
                {availableSizes.map((size) => (
                <span> { " " } <button className="button size-button" id={size} onClick={(evt) => setCartItems(evt)}>{size}</button></span>)
                )}     
              </p>
              <div className="product-details-price">
                <p>
                  ${productPrice}
                </p>
                <button className="button primary add-to-cart" onClick={() => {
                  props.addToCart(cartProduct);
                  closeModal();
                }}>Add to Cart</button>
              </div>
            </div>
          </div>
        </Zoom>
      </Modal>
    </div>
  );
}

export default Products;
