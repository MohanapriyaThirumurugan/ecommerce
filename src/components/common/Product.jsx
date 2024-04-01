import React, { useEffect } from 'react'
import { useNavigate ,Link} from 'react-router-dom'

function Product(props) {
  let {title,description,price,thumbnail,stock,id}=props.product
  let navigate=useNavigate()
  // useEffect(()=>{
  //   const handle= () => {
  //     if (stock > 0) {
  //       navigate(`/product/${id}`);
  //     }
  //   };
  // })
  const handle= (id,stock) => {
    // console.log(id,stock);
    if (stock > 0) {
        // console.log(id,stock);
      navigate(`/Product/${id}`);
      //  console.log(id,stock);
      

    }
  }
  return (
    //redirect home page product page
 
     <div className='cardwrapper' onClick={()=>handle(id,stock)}>
      <div className='imagecontainer'>
        <img src={thumbnail} alt="phoneimage" style={{height:'100%', width:'100%'}} />
      </div>
      <div className='content'>
        <h3>{title}</h3>
        <p>{stock>0?<></>:<p><strong>out of stock</strong></p>}</p>
        <p>{description}</p>
        <p>Rs:{price}</p>
      </div>

    </div>
    // </Link>
    
  )

}

export default Product