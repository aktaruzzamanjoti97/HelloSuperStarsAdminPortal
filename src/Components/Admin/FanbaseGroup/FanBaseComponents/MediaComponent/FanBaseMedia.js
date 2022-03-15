import React from 'react';
import './FanBaseMedia.css';
import img1 from '.././../../../../assets/images/Fanbase-img/1.png';
import img2 from '.././../../../../assets/images/Fanbase-img/2.png';
import img3 from '.././../../../../assets/images/Fanbase-img/3.png';
import img4 from '.././../../../../assets/images/Fanbase-img/4.png';
import img5 from '.././../../../../assets/images/Fanbase-img/9.png';
import img6 from '.././../../../../assets/images/Fanbase-img/6.png';
import img7 from '.././../../../../assets/images/Fanbase-img/7.png';
import img8 from '.././../../../../assets/images/Fanbase-img/8.png';
import img10 from '.././../../../../assets/images/Fanbase-img/10.png';
const mediaData=[img1,img2,img3,img4,img5,img6,img7,img8,img10,img1,img2,img3];

const FanBaseMedia = () => {
    return (
        <div className='card my-3 bg-dark'>
           <div className="card-boy">
               <h4 className='text-light p-3'>Media Files</h4>
               <div className="container p-3">
                   <div className="row">
                       {mediaData.map((img)=>{
                           return  <div className="col-md-3 mb-4" >
                           <div className="content-1" style={{ border:'2px solid gold',borderRadius:'10px',cursor:'pointer' }}>
                              <img src={img} className='img-fluid w-100' alt="" style={{ borderRadius:'10px' }}/>
                           </div>
                       </div>
                       })}
                  

                   
                   </div>
                   
               </div>
           </div>
        </div>
    );
};

export default FanBaseMedia;