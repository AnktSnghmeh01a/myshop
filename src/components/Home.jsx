import React from 'react';
import Electronics from './Electronics';
import Clothing from './Clothing';
import '../styles/app.css'
const Home = () => {
  return (
    <div className='home'>
      <div className="electronics-part">
         <h1>Electronics Products</h1>
     <Electronics/> 
      </div>
     
     <div className="clothes-part">
      <h1>Clothing Products</h1>
           <Clothing/>

     </div>
 
    </div>
  )
}

export default Home