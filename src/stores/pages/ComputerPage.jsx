import React from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const ComputerPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
    const uniqueCompanies = [...new Set(computerData.map(item => item.company))];
  const companyHandler=(product)=>{
    if(selectedProduct.includes(product)){
      setSelectedProduct(selectedProduct.filter((item)=>item!==product))}
      else{
        setSelectedProduct([...selectedProduct,product])
      }}
      const filteredProduct = selectedProduct.length===0 ? 
      computerData : computerData.filter((orange) => selectedProduct.includes(orange.company)); 
  return (
    <>
    <Navbar/>
    <div className="fullpage">
      <div className="pro-selected">
      {uniqueCompanies.map((company)=>
      {
        return(
          <div className='pro-input'>
            <label>
              <input type='checkbox'
              checked={selectedProduct.includes(company)}
              onChange={()=>companyHandler(company)}/>
              {company}
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
                      <Link to={`/computers/${item.id}`}>  
                    <div className="pageImage">
                        <img src={item.image} alt=''/>
                    </div>
                    </Link>
                    <div className='proModel'>
                         {item.company}, {item.model}
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
export default ComputerPage