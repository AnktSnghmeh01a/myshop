import React from 'react';
import { clothingProducts } from '../PRODUCT';
import Product from './product/Product';
import '../styles/clothing.css';
import '../styles/responsive.css';
const Clothing = () => {
  return (
    <div className='clothing'>

     {
      clothingProducts.map((product)=>(<Product data={product} key={product.id}/>)
      )
     }

    </div>
  )
}

export default Clothing