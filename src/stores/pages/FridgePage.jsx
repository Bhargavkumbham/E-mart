import React from 'react';
import {fridgeData} from '../data/fridge'
import Navbar from '../components/Navbar';
const FridgePage =()=>{
    return(
        <>
        <Navbar/>
        <div className='pageSection'>
            {
            fridgeData.map((item)=>
            {
                return(
                    <div>
                        <div className='pageImage'>
                            <img src={item.image} alt=''/>
                        </div>
                        <div className='proModel'>
                            {item.brand}, {item.model}
                        </div>
                    </div>
                )
            })}
        </div>
            </>
    )
}
export default FridgePage;