import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const CertificateModal = (props) => {
return (
<>
  <Modal {...props} size="m" aria-labelledby="contained-modal-title-vcenter" centered>

    <Modal.Body className='bg-dark rounded-3 border-0' >
      <form>
        <div className="form-group row justify-content-center my-3">
          <label for="Audition" className="col-sm-4 col-form-label textYtM">Audition Title</label>
          <div className="col-sm-8">
            <input type="text" className="form-control MoInBg" id="Audition" />
          </div>
        </div>
        <div className="form-group row justify-content-center my-3">
          <label for="Audition" className="col-sm-4 col-form-label textYtM">The Name</label>
          <div className="col-sm-8">
            <input type="text" className="form-control MoInBg" id="Audition" />
          </div>
        </div>
        <div className="form-group row justify-content-center my-3">
          <label for="Audition" className="col-sm-4 col-form-label textYtM">Position</label>
          <div className="d-flex col-sm-8 justify-content-end">
            <div className='col-sm-3 classSa'>
            <input type="text" className="form-control MoInBg" id="Audition" />
            </div>
          </div>
        </div>
        <div className="form-group row justify-content-center my-3">
          <label for="Audition" className="col-sm-4 col-form-label textYtM">Certificate Content</label>
          <div className="col-sm-8">
            <input type="text" className="form-control MoInBg" id="Audition" />

          </div>
        </div>

        <center>
          <button type="" className='btn px-4 fw-bold mt-4 mb-2 btnModalR'> Done</button>
        </center>

      </form>
    </Modal.Body>
    
  </Modal>
</>
)
}

export default CertificateModal