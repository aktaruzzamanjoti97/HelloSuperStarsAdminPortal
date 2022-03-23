import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import decline from '../../../assets/images/declined.png';
import sign from '../../../assets/images/sign.png';
import "./AdminAuditionVideo.css";
import { fakeVideoData } from './fakeVideoData';

const AdminAuditionVideo = () => {

  let history = useHistory();

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [clickVideoLink, setClickVideoLink] = useState([]);
  const [multiSelectArrays, setMultiSelectArrays] = useState([]);



  function handleSelectVideo(index) {
    if (!clickVideoLink.includes(fakeVideoData[index])) {
      setClickVideoLink([...clickVideoLink, fakeVideoData[index]])
    }
  }

  console.log(clickVideoLink);

  function clickMultipleSelectVideo() {
    setMultiSelectArrays(clickVideoLink)
  }

  console.log(multiSelectArrays);



  return (
    <div>

      <div className='videoSliderBorder d-flex justify-content-center'>
        <div className="videoSliderStyle py-5 px-3">
          <div>
            <h2 className="text-warning"> Video Filtering </h2>

            <Slider {...settings}>

              {
                fakeVideoData.map((singleVideo, index) => (
                  <div className="" >
                    <div className="videos bg-success p-4 mx-4" onClick={() => handleSelectVideo(index)} key={singleVideo.id}>
                      <ReactPlayer url={singleVideo.link} className="img-fluid w-100" />
                    </div>
                  </div>
                ))
              }

            </Slider>




          </div>

          <div className='my-3'>
            <button onClick={() => clickMultipleSelectVideo()} className='buttonStyle' type="button"><img className='img-fluid' width='40px' src={sign} alt="" /></button>
            <button className='ms-3 buttonStyle' type="button"><img className='img-fluid' width='40px' src={decline} alt="" /></button>
          </div>

          <div className="row mt-4">
            <div className="col-md-4">
              <input type="text" className='form-control input-gray' placeholder='Comment' />
            </div>
            <div className="col-md-1">
              <button className='form-control btn btn-warning'>Done</button>
            </div>
          </div>
        </div>
      </div>


      <div className='my-4'>

        <div className='filterVideoBorder d-flex justify-content-center'>

          <div className="filteredVideoWidth py-5 px-2">
            <h2 className='text-warning'>Filtered Video</h2>
            {/* 
            <div className="d-flex">
              <div key={imageSelect.key} className='p-4'>
                <img className="img-fluid" src={imageSelect.imgUrl} alt="" />
              </div>
            </div> */}

            {/* <Slider {...settings2}> */}

            {/* {
                imageSelect.map((i) => (
                  <div key={i.id} className='p-4'>
                    <img className="img-fluid" src={i.imgUrl} alt="" />
                  </div>
                ))
              } */}

            <Slider {...settings2}>
              {
                multiSelectArrays.map((video) => (
                  <div key={video.id} className='p-2'>
                    <ReactPlayer className="img-fluid" url={video.link} />
                  </div>
                ))
              }
            </Slider>





            {/* {console.log(imageSelect)} */}



            {/* <div className='p-4'>
                <img className="img-fluid" src='https://i.ibb.co/0sB4XhY/unplash.png' alt="" />    
              </div>
              <div className='p-4'>
                <img className="img-fluid" src='https://i.ibb.co/0sB4XhY/unplash.png' alt="" />
      
              </div>
              <div className='p-4'>
                <img className="img-fluid" src='https://i.ibb.co/0sB4XhY/unplash.png'alt="" />
              </div>
              <div className='p-4'>
                <img className="img-fluid" src='https://i.ibb.co/0sB4XhY/unplash.png' alt="" />
              </div>
              <div className='p-4'>
                <img className="img-fluid" src='https://i.ibb.co/0sB4XhY/unplash.png' alt="" />
              </div>
              <div className='p-4'>
                <img className="img-fluid" src='https://i.ibb.co/0sB4XhY/unplash.png' alt="" />
              </div>
              <div className='p-4'>
              <img className="img-fluid" src='https://i.ibb.co/0sB4XhY/unplash.png' alt="" />
              </div> */}
            {/* </Slider> */}




            <div onClick={() => {
              history.push('/audition-admin/audition/audition-video-show')
            }} className='d-flex justify-content-center mt-4'>
              <button className='btn btn-warning w-25'><b>Open to Vote</b></button>
            </div>
          </div>

        </div>





      </div>
    </div>
  );
};

export default AdminAuditionVideo;
