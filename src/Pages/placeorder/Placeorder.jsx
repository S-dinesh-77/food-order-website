import React, { useState } from 'react'
import "./Placeorder.css"
import { StoreContext } from '../../Context/StoreContext';
import { useContext } from 'react';
const Placeorder = () => {
  const[placeorder,setplaceorder]=useState(false)
  const {  gettotalCartAmount } = useContext(StoreContext);


  const handleOrderClick = () => {
    setplaceorder(true);
    setTimeout(() => {
      setplaceorder(false); // Hide message after 3 seconds
    }, 5000);
  };

  return (
   <form action="" className="place-order">
    <div className="place-order-left">
      <p className="title">Delivery Information </p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code ' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="number" placeholder='Phone'/>
     
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${gettotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Develivery Fee</p>
            <p>${2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>${gettotalCartAmount()+2}</p>
          </div>
          <button onClick={handleOrderClick}>PROCEED TO PAYMENT</button>
        </div>
        {placeorder && (
        <div className="success-message">
          Order sent successfully!
        </div>
      )}
      </div>
     
   </form>
  )
}

export default Placeorder