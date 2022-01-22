import React from 'react'
import LearnSessionNaveStar from '../LearnSessionNaveStar'
import ApprovedRequestList from './ApprovedRequestList'

const LiveSessionLear = () => {
  return (
    <>
    <div className="AS">
        <LearnSessionNaveStar />

        <div className="liveMeetupBorder my-5">
            <div className="d-flex px-4 pt-3">
                <div className="faTrophy"><i class="fas fa-trophy"></i></div>
                <h4 className="mx-3 text-white p-2">Approved Learning Session</h4>
            </div>

            <div className="pb-3">
                <ApprovedRequestList />
            </div>

        </div>

        <div className="liveMeetupBorder my-5">
            <div className="d-flex px-4 pt-3">
                <div className="faTrophy"><i class="fas fa-trophy"></i></div>
                <h4 className="mx-3 text-white p-2">Approved Learning Events</h4>
            </div>

            <div className="pb-3">
                <ApprovedRequestList />
            </div>

        </div>
       
    </div>
      
    </>
  )
}

export default LiveSessionLear
