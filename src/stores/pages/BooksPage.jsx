import React from 'react'
import { booksData } from '../data/books'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const BooksPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
    const uniqueBooks = [...new Set(booksData.map(item => item.category))];
  const companyHandler=(product)=>{
    if(selectedProduct.includes(product)){
      setSelectedProduct(selectedProduct.filter((item)=>item!==product))}
      else{
        setSelectedProduct([...selectedProduct,product])
      }}
      const filteredProduct = selectedProduct.length===0 ? 
      booksData : booksData.filter((orange) => selectedProduct.includes(orange.category)); 
  return (
    <>
    <Navbar/>
    <div className="fullpage">
      <div className="pro-selected">
      {uniqueBooks.map((category)=>
      {
        return(
          <div className='pro-input'>
            <label>
              <input type='checkbox'
              checked={selectedProduct.includes(category)}
              onChange={()=>companyHandler(category)}/>
              {category}
            </label>

            </div>
        )
      })}
    </div>
    <div className='pageSection'>
        {
            filteredProduct.map((item)=>{
                return(
                    <div className="pageImage">
                      <Link to={`/books/${item.id}`}>  
                    <div>
                        <img src={item.image} alt=''/>
                        console.log(item.image)
                    </div>
                    </Link>
                    <div className='proModel'>
                         {item.title}, {item.author}
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

export default BooksPage;