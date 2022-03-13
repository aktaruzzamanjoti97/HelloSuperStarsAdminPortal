import React, { useEffect, useState } from 'react'
import Man from '../../../../../../assets/images/Souvenir/3201.png'
import Men from '../../../../../../assets/images/Souvenir/bid.png'
import LiveIcon from '../../../../../../assets/images/Souvenir/live.png'
import LiveI from '../../../../../../assets/images/Souvenir/LivwNow.png'
// import SuperstarSouvenirNav from './SupestarSouvenirNav/SuperstarSouvenirNav'
// import SuperstarSouvenirNav from '../SupestarSouvenirNav/SuperstarSouvenirNav'
import axios from 'axios'
import moment from 'moment'
import SouvenirNav from '../SouvenirNav'


const SoldProductList = () => {

    const [soldProduct,setSoldProduct] = useState([]);

    useEffect(() => {

        axios.get(`/api/admin/sold/auction/product`).then((res) => {
    
          if (res.status === 200) {
            console.log('from api',res.data.sold_product)
            setSoldProduct(res.data.sold_product);
     
          }
          
        });
    
      }, []);



return (
<>
    <div className="AS m-3">
        <SouvenirNav />
        {/* <SuperstarSouvenirNav /> */}
        <div className="d-flex mb-4 mt-5">

            <div className=" d-flex">
                <img src={LiveIcon} className=' SouvenirIcon' alt="" />
            </div>

            <div className=" d-flex text-light fw-bold mt-1 mx-3 ">
                Sold Product
            </div>
        </div>

        <div className="row">
            
        {soldProduct.map((product) =>(
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

export default SoldProductList