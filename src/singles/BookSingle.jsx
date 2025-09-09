import React from 'react'
import { booksData } from '../stores/data/books'
import { useParams } from 'react-router-dom';
import Navbar from '../stores/components/Navbar';
import{ useCart } from '../stores/context/CartContext';
const   BookSingle = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = booksData.find((item) => item.id === id || item.id === Number(id));

    if (!product) {
        return (
            <>
                <Navbar />
                <div className="ind-section">
                    <p>Product not found.</p>
                </div>
            </>
        );
    }
    return (
    <>
    <Navbar/>
    <div className="ind-section">
        <div className="ind-image">
            <img src={product.image} alt=''/>
        </div>
        <div className="ind-details space">
            <div className="ind-company">
            <h2>{product.title}</h2>
            </div>
            <div className="ind-model">
            <h3>{product.author}</h3> 
        </div>
        <div className="ind-price">
            <h3>{product.price}</h3>
        </div>
        <div className="ind-desc">
            <p>{product.description}</p>
    </div>
    <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
    </div>
    </>
  )
}

export default BookSingle