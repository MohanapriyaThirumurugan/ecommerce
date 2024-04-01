import React, { useContext } from 'react'
import ProductContext from '../../Context/ProductContextComponet.jsx'

function Cart() {
  let {state,dispatch}=useContext(ProductContext)
  console.log(state);
  return (
    <div>Cart</div>
  )
}

export default Cart