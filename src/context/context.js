import { useState,createContext } from "react";
import { clothingProducts, electronicsProducts } from "../PRODUCT";

const finalLength = clothingProducts.length + electronicsProducts.length;

const CombinedItems = clothingProducts.concat(electronicsProducts);


export const ShopContext = createContext(null);

const defaultCard = () => {
  let card = {};

  for (let i = 1; i <= finalLength; i++) {
    card[i] = 0;
  }
  return card;
};


export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(defaultCard());

  const addTocart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };
  
  const overallProducts =()=>{
    let itemQuantity = 0;
    for (const itemId in cartItems) {
    
     itemQuantity+=cartItems[itemId];
    
    }  
   return itemQuantity;
  
  }
  // remove from cart
  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 1) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    } else {
      // If the quantity is 1 or less, you might want to remove the item completely from the cart
      // or handle it according to your logic. For now, let's set it to 0.
      setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    }
  };

 const updateCartItemAmount = (newAmount,itemId)=>{

  setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));

 }

 const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const itemId in cartItems) {
    const itemQuantity = cartItems[itemId];
    const item = CombinedItems.find((product) => product.id === parseInt(itemId));
    if (item) {
      totalAmount += item.productPrice * itemQuantity;
    }
  }
  return totalAmount;
};

  const contextValue = {
    cartItems,
    addTocart,
    removeFromCart,
    updateCartItemAmount ,
    getTotalCartAmount ,
    overallProducts
  };

  return (

    <ShopContext.Provider value={contextValue}>
       {props.children}
    </ShopContext.Provider>
  );

};
