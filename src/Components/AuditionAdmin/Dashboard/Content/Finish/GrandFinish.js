import React from 'react'
import Banner from '../../../../../assets/images/Auditions/unLNo.png'
import Banner2 from '../../../../../assets/images/Auditions/finish.JPG'
import './GrandFinish.css'

const GrandFinish = () => {
return (
<>
    <div className="card m-3">
        <img src={Banner} alt="" className='Banner-SME-x' />
    </div>

    <div className="row m-3 d-flex mt-5 Finish-Grand  ">
        <div className="Grand_finish col-md-8 ">
            <img src={Banner2} alt="" className='img-fluid Banner-SME-finish pl-5' />
        </div>

        <div className=" col-md-4 gb-vcs">
            <div className='Finish-btn-bos'>
                <button className='btn fw-bolder Finish-btn-grand'>Finish</button>
            </div>
        </div>

    </div>

</>
)
}

export default GrandFinish