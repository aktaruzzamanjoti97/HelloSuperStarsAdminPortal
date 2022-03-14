import React from "react";
import imageBgAppeal from "../../../../../../assets/images/amrBg.png";
import Appeal1 from "../../../../../../assets/images/Downloads/banner1.png";
import Appeal2 from "../../../../../../assets/images/Downloads/banner2.png";
import './AdminRoundTwoAppeal.css'

const AdminRoundTwoAppeal = () => {
  return (
    <>
      <div className="imageBgAppeal">
        <img className="img-fluid w-100" src={imageBgAppeal} alt="" />
      </div>
      <div className="row bg-dark">
            <div className="col-md-6 py-5 d-flex justify-content-center align-items-center">
                <img className="img-fluid" src={Appeal1} alt="" />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-end">
                <div>

                <button className='btn nameBg mb-5 roundTwoWhite p-3'><span className='text-black fw-bold'>Go to Round 2</span></button>  
                <button className='btn nameBg mb-5 roundTwo p-3'><span className='text-black fw-bold'>Round 1 Appeal</span></button>  
                </div>
                
            </div>
      </div>

    </>
  );
};

export default AdminRoundTwoAppeal;
