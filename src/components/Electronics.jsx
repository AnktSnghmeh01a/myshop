import React from 'react';

import { electronicsProducts } from '../PRODUCT';
import Product from './product/Product';
import '../styles/electronics.css'

const Electronics = () => {
  return (
  <div className="electronic-products">
     {
      electronicsProducts.map((product)=>(<Product data={product} key={product.id}/>)
      )
     }
     </div>
  )
}

export default Electronics