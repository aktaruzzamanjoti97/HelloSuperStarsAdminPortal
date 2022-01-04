import React from 'react'
import Banner from '../../../../../../../assets/images/Auditions/unLNo.png'
import './GrandFinal.css'
import { Link } from 'react-router-dom'
import GrandFinalCarosuel from './GrandFinalCarosuel'

const AuditionsGrandFinal = () => {
return (
<>
    <div className="card m-3">
        <img src={Banner} alt="" className='Banner-SME-b' />
        <div class="centered ">
            <div className="MENbtn d-flex ">
                <div className="btn-l-1"><button className='btn btn-light mx-2 MENbtn-text fw-bold'>2</button> <br />
                    <span className='mx-2 text-light'>hours</span></div>
                <div className="btn-l-1"><button className='None-Btn'>-</button></div>
                <div className="btn-l-1"><button className='btn btn-light mx-2 MENbtn-text fw-bold'>30</button> <br />
                    <span className='mx-2 text-light'>minutes</span></div>
            </div>
        </div>
    </div>

    <div className='m-3 mt-4 mb-3'>
        <h4 className='GrandF fw-bold  mb-2 '>
            Guitar for the beginners - Grand Final
        </h4>
        <p className=' '>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
        </p>
    </div>

    <div className='m-3  mb-2'>
       <GrandFinalCarosuel/>
    </div>
    
</>
)
}

export default AuditionsGrandFinal