import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./Cart.css"
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux";
import { removeItem , resetCart} from '../../redux/cartReducer';
import {makeRequest} from "../../makeRequest"
import {loadStripe} from "@stripe/stripe-js"

const Cart = () => {
  const products = useSelector(state=>state.cart.products)
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe('pk_test_51Mnl09SHF27CkqzNsC6j5TAmCV5tewVG66m7arxCgqm9X6B7vQ3bwHMADCIPpUpvRNxMmAsBfxlGimu4RSBFXbIM00jinyal5n');
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map(item=>(
         <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL+item.img} alt=""/>
          <div className='details'>
          <h1>{item.title}</h1>
          <p>{item.desc?.substring(0,100)}</p>
          <div className='price'>{item.quantity} X ${item.price}</div>

          </div>
          <DeleteOutlineIcon className='delete' onClick={() => dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className='reset' onClick={() => dispatch(resetCart())}>RESET CART</span>
      
      
    </div>
  )
}

export default Cart
