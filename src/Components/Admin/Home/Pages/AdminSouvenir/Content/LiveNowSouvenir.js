import React, { useEffect, useState } from 'react'
import SouvenirNav from '../SouvenirNav'
import LiveIcon from '../../../../../../assets/images/Souvenir/live.png'
import LiveI from '../../../../../../assets/images/Souvenir/LivwNow.png'
import Man from '../../../../../../assets/images/Souvenir/3201.png'
import Men from '../../../../../../assets/images/Souvenir/bid.png'

import './Souvenir-Live.css'
import axios from 'axios'
import moment from 'moment'
import { Link } from 'react-router-dom'



const LiveNowSouvenir = () => {

    const [liveProduct,setLiveProduct] = useState([]);

    useEffect(() => {

        axios.get(`/api/admin/live/allProduct`).then((res) => {
    
          if (res.status === 200) {
            console.log('from api',res.data.products)
            setLiveProduct(res.data.products);
     
          }
          
        });
    
        console.log();
      }, []);


return (
<>
    <div className="AS m-3">
        <SouvenirNav />
        <div className="d-flex mb-4 mt-5">

            <div className=" d-flex">
                <img src={LiveIcon} className=' SouvenirIcon' alt="" />
            </div>

            <div className=" d-flex text-light fw-bold mt-1 mx-3 ">
                Live Now
            </div>
        </div>
       


        <div className="row">
            
            {liveProduct.map((product) =>(
            <div className="d-flex  Souvenir-Live col-md-3 m-2 NewEitd">
    
                <div className="SouvenirI d-flex">
                    <img src={`http://localhost:8000/${product.product_image}`} className='img-fluid VX-S' alt="" />
                </div>
    
                <div className="SouvenirI mx-4 mt-3">
    
                    <div className="mb-4">
                        <div className="text-light fw-bold mt-1 mx-2">
                            <h3>{product.name}</h3>
                        </div>
                        <div className="text-light  mt-1 mx-2 ">
                            <small>{moment(product.bid_to).format('LL')}</small>
                        </div>
                    </div>
    
                    <div className="d-flex  p-2 mb-2">
                        <img src={Man} className=' SouvenirIcon' alt="" />
    
                        <div className=" d-flex text-light  mt-1 mx-3 fw-bold ">
                            108
                        </div>
                    </div>
    
                    <div className="d-flex p-2">
                        <img src={Men} className=' SouvenirIcon' alt="" />
    
                        <div className=" d-flex text-light mt-1 mx-3 fw-bold ">
                            145000
                        </div>
                    </div>
    
                </div>
    
            </div>
      ))}
                </div>
        

    </div>
</>
)
}

export default LiveNowSouvenir