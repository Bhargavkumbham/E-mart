import React from 'react'
import { fridgeData } from '../data/fridge'
const Fridges = () => {
    const firstFiveImages = fridgeData.slice(0,5);
  return (
    <>
    <div className='proTitle'>Fridges</div>
    <div className='proSection'>{
        firstFiveImages.map((item)=>{
            return(
                <div className='imgBox'>
                    <img className='proImage' src={item.image} alt="fridge"/>
                </div>)}
            )
        }
    </div>
    </>)
}

export default Fridges