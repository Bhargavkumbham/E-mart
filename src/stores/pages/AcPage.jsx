import React from "react";
import {acData} from '../data/ac'
import Navbar from '../components/Navbar';
const AcPage = ()=>{
    return(
        <>
        <Navbar/>
        <div className='pageSection'>
            {
                    acData.map((item) => {
                        return(
                        <div>
                            <div className='pageImage'>
                                <img src={item.image} alt=''/>
                             </div>
                             <div calssName='proModel'>
                                {item.brand}, {item.model}
                             </div>
                         </div>
                        );
                    })
                }
        </div>
        </>
    )
}
export default AcPage;