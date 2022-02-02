import React from 'react'
import person from "../../../../../src/assets/images/meetupEvent/picci.png";

const StarUserPortal = () => {
  return (
    <>
       <div className="card  my-3 chatting-card text-light">
        <div className="card-body ">
            <div id="maincontainer">
                <div id="childcontainer">
                    <div className="d-flex mb-3">
                        <img src={person} alt="" height="40px" width="40px" className="chat-person-name" />
                        <div className="live-info">
                            <h6 className="mx-2 my-0  p-0 chat-person-name">
                                Samsul Haque
                            </h6>
                            <small className="mx-2 my-0 p-0 text-muted fw-bold">
                                Vai swing er beper tah abar bolen!
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default StarUserPortal
