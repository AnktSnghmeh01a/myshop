import { useContext} from "react";
import { ShopContext } from "../../context/context";
import {AiFillCaretDown} from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import emptycardImage from '../../asserts/empty-cart-image.png';
import { clothingProducts, electronicsProducts } from "../../PRODUCT";
import "../../styles/cartandItems.css";
import '../../styles/responsive.css';
import CartItems from "./CartItems";
const CombinedArray = clothingProducts.concat(electronicsProducts);
const Cart = () => {
  const { cartItems, getTotalCartAmount, overallProducts } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="left-cart">
        {totalAmount > 0 ? (
          <h1 className="bag-items">Your bag ({overallProducts()} items)</h1>
        ) : (

          <div className="cartEmpty">
                
           <h1>Your cart is Empty</h1>
            
            <div className="empty-cart-image">
      
                <img src={emptycardImage} alt="no-image" />
            </div>
         
            <div className="continue-shopping-div">
              <button className="continue-shopping-button"  onClick={() => {
        
              navigate("/home");
            }}>Continue Shopping</button>
            </div>

          </div>

)}

        {CombinedArray.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} key={product.id} />;
          }
        })}
      </div>

      <div className="right-cart">
        {totalAmount > 0 ? (
          <div className="total-amount">
            <div className="upper-div-amount-part">
              <h1 className="total">Total</h1>

              <div className="subtotalDiv">
                <p>Subtotal</p>
                <p>₹ {getTotalCartAmount()}</p>
              </div>

              <div className="delivery-part">
                <p>Delivery</p>
                <p>free</p>
              </div>

              <div className="totalamount">
                <p>Total(Tax included)</p>
                <p>₹ {getTotalCartAmount()}</p>
              </div>

              <div className="button-div-checkout">
                <button className="goto-checkout-button">Go to Checkout</button>
              </div>
            </div>

            <div className="lower-div-amount-part">
              <div className="text-part">
                <p>Add a voucher <span>(Optional)</span></p>
              </div>
             <AiFillCaretDown className="down-angle-arrow-icon"/>
            </div>
          </div>
        ) : ('')}
      </div>
    </div>
  );
};

export default Cart;
