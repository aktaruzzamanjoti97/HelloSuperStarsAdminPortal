import React from "react";
import imageBgAppeal from "../../../assets/images/amrBg.png";
import Appeal1 from "../../../assets/images/Downloads/banner1.png";
import Appeal2 from "../../../assets/images/Downloads/banner2.png";
import './AdminRoundOneAppeal.css'

const AdminRoundOneAppeal = () => {
  return (
    <>
      <div className="imageBgAppeal">
        <img className="img-fluid w-100" src={imageBgAppeal} alt="" />
      </div>
      <div className="row bg-dark">
            <div className="col-md-6 py-5 d-flex justify-content-center align-items-center">
                <img className="img-fluid" src={Appeal2} alt="" />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-end">
                <button className='btn nameBg mb-5 roundTwo p-3'><span className='text-black fw-bold'>Go to Round 2</span></button>  
            </div>
      </div>

    </>
  );
};

export default AdminRoundOneAppeal;
