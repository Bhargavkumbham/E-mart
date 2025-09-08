import React from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
const ComputerPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {
            computerData.map((item)=>{
                return(
                    <div>
                    <div className="pageImage">
                        <img src={item.image} alt=''/>
                    </div>
                    <div className='proModel'>
                         {item.company}, {item.model}
                    </div>
                    </div>
                )
        }
  )
}

</div>
</>
  )
}
export default ComputerPage