import React from 'react'
import { useContext } from 'react'
import{ProductContext}from '../../Context/ProductContextComponet.jsx'
import Product from '../common/Product.jsx'
function Home() {
  let {state}=useContext(ProductContext)
  // console.log(state);
  return <>
  <div className='homecard'>
    {
      state.products.map((e)=>{
        return <Product product={e} key={e.id}/>
        
      })
    }
  </div>
  </>
}
export default Home