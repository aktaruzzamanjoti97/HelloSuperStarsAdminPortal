import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import calendar from '../../../../../assets/images/meetupEvent/calendar.png'
import Clock from '../../../../../assets/images/meetupEvent/clock-icon.png'
import Fly from '../../../../../assets/images/Souvenir/unsplash_Z4RYz52ljts.png'
import { Markup } from "interweave";
import './MarketEdit.css'
import swal from 'sweetalert';


const SuperstarConfirmEditMarketplace = () => {

    let history = useHistory();

    // function handleClick() {
    //     // history.push('/superstar-admin/souvenir/live-biddings');
    //     history.push('/superstar/souvenir/product-list');
    // }
    
    const { id } = useParams();

    const [title, setTitle] = useState("")
    const [unit_price, setUnitPrice] = useState("")
    const [total_items, setTotalItems] = useState("")
    const [keywords, setKeywords] = useState("")
    const [image, setImage] = useState()
    const [description, setDescription] = useState("")

    

    useEffect(() => {
        axios.get(`/api/star/marketplace/product-edit/${id}`).then(res => {
        // console.log('res ', res.data.approved);
            if(res.data.status === 200)
            {
                setTitle(res.data.editData.title);
                setUnitPrice(res.data.editData.unit_price);
                setTotalItems(res.data.editData.total_items);
                setImage(res.data.editData.image);
                setKeywords(res.data.editData.keywords);
                setDescription(res.data.editData.description);
            }
        });
    
    }, []);

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log('You clicked submit.');
    //   }

    
    const approvedStarMarketplace = async (e) => {

        console.log('Done');
        e.preventDefault();

        axios.get(`/api/star/marketplace/product-approved/${id}`).then(res => {
            if(res.data.status === 200)
            {
                console.log('Done');

                swal("Welcome",res.data.message,"success");
            }
        });
    }

    
    const declineStarMarketplace = async (e) => {

        console.log('Done');
        e.preventDefault();

        axios.get(`/api/star/marketplace/product-decline/${id}`).then(res => {
            if(res.data.status === 200)
            {
                console.log('Done');

                swal("Welcome",res.data.message,"success");
            }
        });
    }

    return (
        <div>
            <div className="row my-3">
                <div className="col-md-4 ">
                    <img src={`http://localhost:8000/${image}`} alt="Pineapple" className='img-fluid Cricket-Img mb-2' />
                    
                    <div className="DesktopEdit">
                    <button onClick={approvedStarMarketplace} className='btn btnInfo Cri-btn border-warning fw-bold px-5 mx-3'>Approved</button>
                    <button onClick={declineStarMarketplace} className='btn Cri-btn-x border-warning fw-bold px-5'>Declined </button>
                    </div>
                </div>
                <div className="col-md-8 mb-5 ">
                    <div className="card event-card2 shadow">
                        <div className="card-body">
                            <h5 className="text-light mb-3">
                                {title}
                            </h5>
                            <p className="text-light">
                            <Markup content= {description}/>
                            </p>
                            {/* <p className="text-light ">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p> */}
                        </div>
                    </div>

                    <div className=" d-flex mt-5 cricket-jersey ">
                        <div className="d-flex p-4 buTon-EMN">
                            <div className="mt-2  mx-3 ">
                                <span className="text-light"> <img src={calendar} alt="" className='PriceTage' /></span>
                            </div>
                            <div className=" mx-1">
                                <span className="text-light">Units</span>
                                <br></br>
                                <span className="text-warning BtnTextNMP Usd fw-bold">{total_items} Pieces</span>
                            </div>
                        </div>

                        <div className=" d-flex p-4 buTon-EMN ">
                            <div className=" mt-2 mx-3">
                                <span className="text-light"> <img src={Clock} alt="" className='PriceTage' /></span>
                            </div>
                            <div className=" mx-1 ">
                                <span className="text-light">Unit Price</span>
                                <br></br>
                                <span className="text-warning  BtnTextNMP Usd fw-bold">{unit_price} $</span>
                            </div>
                        </div>
                    </div>



                </div>

                <div className="col-md-6 mobileEdit">
                {/* <form onSubmit={handleSubmit}>
                <button className='btn btnInfo Cri-btn border-warning fw-bold px-5 mx-3'>Submit</button>
                </form> */}
                {/* onClick={confirmHandle} */}
                    <button onClick={approvedStarMarketplace} className='btn btnInfo Cri-btn border-warning fw-bold px-5 mx-3'>Approved</button>
                    <button onClick={declineStarMarketplace} className='btn Cri-btn-x border-warning fw-bold px-5'>Declined </button>
                    {/* <button className='btn border-warning fw-bold mx-3  px-5 Cri-btn'>Edit</button> */}
                </div>


            </div>
        </div>
    )
}

export default SuperstarConfirmEditMarketplace;