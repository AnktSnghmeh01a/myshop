import React, { useContext } from "react";
import { ShopContext } from "../../context/context";
import "../../styles/cartandItems.css";

const CartItems = (props) => {
  const { id, productName, productImage, productPrice } = props.data;
  const {
    cartItems,
    addTocart,
    removeFromCart,
    updateCartItemAmount,
  } = useContext(ShopContext);
  return (
    <div className="cart-items">
      <div className="image-and-product-name">
        <div className="product-image">
          <img src={productImage} alt="productImage" />
        </div>
        <div className="product-name">
          <h3>{productName}</h3>
        </div>
      </div>

      <div className="cart-items-buttons">
    
        <button className="minus" onClick={() => removeFromCart(id)}>
          -
        </button>

        <input
          className="quantity-input"
          type="text"
          value={cartItems[id]}
          onChange={(e) => updateCartItemAmount(Number(e.target.value), id)}
        />

        <button className="plus" onClick={() => addTocart(id)}>
          +
        </button>
      </div>

      <div className="product-price">
        <p>₹ {productPrice}</p>
      </div>
    </div>
  );
};

export default CartItems;
