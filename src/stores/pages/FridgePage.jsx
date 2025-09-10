import React from 'react'
import { fridgeData } from '../data/fridge'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const FridgePage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
    const uniqueCompanies = [...new Set(fridgeData.map(item => item.brand))];
  const companyHandler=(product)=>{
    if(selectedProduct.includes(product)){
      setSelectedProduct(selectedProduct.filter((item)=>item!==product))}
      else{
        setSelectedProduct([...selectedProduct,product])
      }}
      const filteredProduct = selectedProduct.length===0 ? 
      fridgeData : fridgeData.filter((orange) => selectedProduct.includes(orange.brand)); 
  return (
    <>
    <Navbar/>
    <div className="fullpage">
      <div className="pro-selected">
      {uniqueCompanies.map((brand)=>
      {
        return(
          <div className='pro-input'>
            <label>
              <input type='checkbox'
              checked={selectedProduct.includes(brand)}
              onChange={()=>companyHandler(brand)}/>
              {brand}
            </label>

            </div>
        )
      })}
    </div>
    <div className='pageSection'>
        {
            filteredProduct.map((item)=>{
                return(
                    <div>
                      <Link to={`/fridges/${item.id}`}>  
                    <div className="pageImage">
                        <img src={item.image} alt=''/>
                    </div>
                    </Link>
                    <div className='proModel'>
                         {item.brand}, {item.model}
                    </div>
                    </div>
                )
        }
  )
}

</div></div>page
</>
  )
}
export default FridgePage