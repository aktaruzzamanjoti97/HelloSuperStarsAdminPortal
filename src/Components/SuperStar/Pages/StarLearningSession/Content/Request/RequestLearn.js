import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './LearningSession.css'
import LearnSessionNaveStar from '../../LearnSessionNaveStar'
import RequestLearnSlide from './RequestLearnSlide'

const RequestLearn = () => {
  return (
    <>
    <div className="AS">
        <LearnSessionNaveStar />

        <div className="liveMeetupBorder my-5">
            <div className="d-flex px-4 pt-3">
                <div className="faTrophy"><i class="fas fa-trophy"></i></div>
                <h4 className="mx-3 text-white p-2">Requested Learning Session</h4>
            </div>

            <div className="pb-3">
                <RequestLearnSlide/>
            </div>
            <center><Link to='/superstar/learning-session/request-all'><Button className='btn bg-warning mt-3 mb-3 fw-bold text-dark ' > View All</Button></Link></center>

        </div>
       
    </div>
      
    </>
  )
}

export default RequestLearn
