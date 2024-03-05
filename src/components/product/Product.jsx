import React, { useContext } from 'react'

import '../../styles/product.css'
import { ShopContext } from '../../context/context';

const Product = (props) => {

  const {id,productName,productImage,productPrice} = props.data;
  const {cartItems,addTocart,removeFromCart,} = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  
  return (
    <div className='product'>

      <div className="image-div">
        <img src={productImage} alt={`image${id}`} />
      </div>
     <div className="product-name">
      <h3>{productName}</h3>
     </div>
    <div className="product-price">
      <p>₹ {productPrice}</p>
    </div>

    <div className="button-part">
      <button className='addTocart button' 
      onClick={()=>addTocart(id)}
      >Add to cart
        {
      cartItemAmount>0 && <>({cartItemAmount})</>

    }
      </button>
      <button className='removeFromcart button' onClick={()=>removeFromCart(id)}>Remove from cart</button>
    </div>
    </div>

  )
}

export default Product;