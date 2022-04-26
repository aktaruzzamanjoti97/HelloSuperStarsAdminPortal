import React from 'react'
import { Spinner } from 'react-bootstrap'

const PendingAuditiontest = () => {
  return (
    <>
     <div className="container">
        <div
          className="card bg-dark "
          style={{ height: "300px", width: "100%" }}
        >
          <div className="card-body d-flex justify-content-center align-items-center">
            <div>
              <div className="text-center">
                <Spinner
                  animation="border"
                  variant="warning"
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
              <h3 className="text-warning">Pending for Jury update</h3>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default PendingAuditiontest
