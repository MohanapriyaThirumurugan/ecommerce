import React, { Children } from 'react'
export const ProductContext=React.createContext(null)
import products from './product.json'
import { useReducer } from 'react'
import Action from './Action.jsx'
let  initialstate={
     products:products,
     cart:[]
}
function reducer (state,action){
   switch (action.type){
    case Action.add_to_cart:return addtocart(state,action.playload)
    case Action.Remove_from_cart: return removefromcart(state,action.playload)
    case Action.Remove_from_cart: return upatequantity(state,action.playload)
    case Action.reset:return reset()
    
}
}
function ProductContextComponet({children}) {
let [state,dispacth]=useReducer(reducer,initialstate)
    // console.log(state);
  return <ProductContext.Provider value={{state,dispacth,Action}}>
    {/* <Cart/> */}
    {children}
    {/* <Cart/> */}
  </ProductContext.Provider>

  
}

function findindex(array,id){
   console.log(id,array);
  let index
  for(let i=0;i<=array.length;i++){
     if(array[i].id==id){
      index=i
      break
     }
     
  }
  console.log(id);
  return index
}

const addtocart=(state,playload)=>{
  //find index of two products and cart
   let productindex=findindex(state.products,playload.id)
   console.log(productindex);

  let cardindex=findindex(state.cart,playload.id)
   // update the stcok value
   let products=structuredClone(state.products)
   let newcarts=structuredClone(state.cart)
   if(cardindex||cardindex===0){
    newcarts[cardindex].quantity+=playload.count
   }
   else{
    let selectedproduct=state.products[productindex]
    newcarts.push({
         id:selectedproduct.id,
        title:selectedproduct.title,
        price:selectedproduct.price,
        stock:selectedproduct.stock,
        quantity:playload.count,
        description:selectedproduct.description,
        image:selectedproduct.thumbnail
    })
   }
   return{
    ...state,
    products:products,
    newcarts: newcarts
   }
}


const removefromcart = (state,playload)=>{
  //find index value of products in product and cart array
    let productIndex = findindex(state.products,playload.id)
    let cartIndex = findindex(state.cart,playload.id)

  //update the stock value
  let products = structuredClone(state.products)
  let cart = structuredClone(state.cart)
  products[productIndex].stock += cart[cartIndex].quantity

  //remove item from cart
  cart.splice(cartIndex,1)

  return {
    ...state,
    products:products,
    cart:cart
  }
}
const upatequantity = (state,playload)=>{
  let cartIndex = findArrayIndex(state.cart,playload.id)
  let cart = structuredClone(state.cart)
  //update the quantity in cart
  cart[cartIndex].quantity += playload.count

  return {
    ...state,
    cart:cart
  }
}

const reset = ()=>{
  return initialValue
}
export default ProductContextComponet