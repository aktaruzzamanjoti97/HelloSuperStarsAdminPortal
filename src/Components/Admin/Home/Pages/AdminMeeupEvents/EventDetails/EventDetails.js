import React from 'react';
import './EventDetails.css';
import hotel from '../../../../../../assets/images/meetupEvent/unsplash_MXbM1NrRqtI.png';
import clock from '../../../../../../assets/images/meetupEvent/clock.png'
const EventDetails = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="card event-card">
                     <img src={hotel} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>





            <div className="row my-4">
                <div className="col-md-12">
                    <div className="card event-card2 shadow">
                     <div className="card-body">
                     <h5 className="text-light p-2">Le Meridian with SAK 75      <sub className='text-warning'>(offline)</sub></h5>
                <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia deserunt fugit animi repellat corrupti fuga labore reiciendis natus repellendus, vitae iusto beatae placeat aliquam ducimus reprehenderit pariatur tempora itaque iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id odit aliquam labore repellat eaque error quibusdam similique at in explicabo quidem pariatur esse aliquid, debitis cum voluptate eveniet. Harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptate ipsum facilis excepturi tempore debitis, omnis praesentium exercitationem libero odio necessitatibus doloremque deserunt earum minus provident. Deserunt doloribus nostrum vero. </p>
                <p className="text-light fw-bold">
                    21 September 2021 | 10:00 PM-11:00 PM
                </p>
                     </div>
                     
                    </div>
                </div>
            </div>




       <div className="card event-card2">
           <div className="row">
           <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img src={clock} className="img-fluid p-3" alt="" />
             </div>
             <div className="col-md-6 d-flex align-items-center">
         <div>
         <h2 className='text-warning'>Event Details submitted</h2>
            <p className='text-light'>Waiting for <span className="fw-bold">
           SuperStar Approval</span></p>
         </div>
             </div>
           </div>
     
       </div>
    
        </div>
    );
};

export default EventDetails;