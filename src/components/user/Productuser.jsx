import React, { useContext, useState }from 'react'
import {ProductContext }from '../../Context/ProductContextComponet.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Action from '../../Context/Action.jsx'

function Productuser() {
 const {id}=useParams()
  let navigate=useNavigate()
  let {state,dispacth}=useContext(ProductContext)
  // console.log(state);
  const [product,setproduct]=useState({})
  // to set toggle for add to cart
 let[toggle,settoggle]=useState(true)
 const handletoaddcard=()=>{
  if(toggle){
     dispacth({type:Action.add_to_cart, playload:{count,id}})
     settoggle(false)
  }
  else{
    dispacth({type:Action.Remove_from_cart, playload:{count,id}})
    settoggle(true)
  }

 }


  // to handle the increment and decreament
  let [count,setcount]=useState(1)
  function handle ({type}) {
    if(count<product.stock  && type==='increment'){
    setcount(count+1)
    }
    if(count>1 && type==='decrement'){
      setcount(count -1 )
      }
  }


  useEffect(()=>{
  let index
  for(let i=0;i<state.products.length;i++){
   if(id==state.products[i].id){
  index=i
  break
}
  }
  if(index){
    setproduct(state.products[index])
  }
  else{
    navigate('/')
  }
  
  },[])
  return (
    <>
     <div className='producthome'>
      <div className='imagesection'>
       {product.images?<Imagesection images={product.images}/>:<></>}
       </div>
        <div className='divcontent'>
          <h2>{product.title}</h2>
          <p>{product.brand}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          {/* </div> */}
        <div className='addtocart'>
        <button className='counter' onClick={()=>handle({type:'increment'})}>+</button>
        {count}
        <button className='counter' onClick={()=>handle({type:'decrement'})}>-</button>
        </div>
        <div>
          <button className='counter' onClick={()=>handletoaddcard()}>{toggle?<>add to card</>:<>remove from cart</>}</button>
        </div>
      </div>
      </div>
      
      

     
    </>
  )
}
export default Productuser

function Imagesection({images}){
  let [currentimage,setimage]=useState(0)
  
  return<>
  <div className='productimgae'>
  <img src={images[0]}/>
  </div>
  
      {/* <img src={images[0]}/> */}
      <div className='listimages'>
  {/* {
    images.map((e,i)=>{
      return <img src={e} key={i} onClick={()=>setimage(i)}></img>
    })

    } */}
  

      </div>
  </>

}
