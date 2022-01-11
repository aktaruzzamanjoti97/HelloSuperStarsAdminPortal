import React from 'react';
import Slider from "react-slick";
import jersey1 from '../../../../../assets/images/Souvenir/jersey-1.png';
import jersey2 from '../../../../../assets/images/Souvenir/jersey-2.png'
import './CricketJersey.css'

const CricketJersey = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,

    
      };
    return (
       <div className="container-fluid ">
           <div className='container-fluid parentSlider '>
      
        <Slider  {...settings}>
          <div>
            <img src={jersey1} alt="" className='img-fluid' />
          </div>
          <div >
          <img src={jersey2} alt="" className='img-fluid' />
          </div>
          <div >
          <img src={jersey1} alt="" className='img-fluid' />
          </div>
          <div >
          <img src={jersey2} alt="" className='img-fluid' />
          </div>
        </Slider>
      </div>


      <div className="container my-4">
          <div className="text-center">
              <h5 className='text-light'>Cricket Jersery</h5>
              <p className='text-warning'>Souviner</p>

              <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fuga, aliquam modi suscipit iusto tempora obcaecati libero quod ipsa fugit at. Voluptates suscipit molestiae nihil non assumenda, et eligendi animi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quam molestias repellendus voluptatibus maiores corporis? Laboriosam id eos quaerat ipsa quam tempora, ratione debitis ipsum voluptatem, eveniet, fuga molestias sed!</p>
              <p className='fw-bold text-muted'>Deadline 20th Oct 2021</p>
              <button className='btn btn-warning'>Approve</button>
              <button className='btn btn-outline-warning mx-2'>Decline</button>
          </div>
      </div>
       </div>
    );
};

export default CricketJersey;