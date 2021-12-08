import React from 'react';
import { Link } from 'react-router-dom';
export default function AddSession(props) {
return (
<div {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
  
  <div className="Modal-js-body">
    <div className="container">
      <form className="p-3">

        <div className="form-group row my-4">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
            Purpose of live
          </label>
          <div className="col-sm-3">
            <input type="text" className="form-control form-control-sm input-in-lv-ch"
              placeholder="write here.." />
          </div>
        </div>

        <div className="form-group row my-4">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
            Instruction
          </label>
          <div className="col-sm-3">
            <textarea type="text" className="form-control form-control-sm input-in-lv-ch"
              placeholder="instruction write here.." />
          </div>
        </div>

        
        <div className="form-group row my-3">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
            Banner
          </label>
          <div className="col-sm-3 file-x-i">
            <input type="file" className="form-control form-control-sm input-in-lv-ch" />
          </div>
        </div> 

        <div className="form-group row my-4">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
            Date
          </label>
          <div className="col-sm-3">
            <input type="date" className="form-control form-control-sm input-in-lv-ch"
              placeholder="John Doe" />
          </div>
        </div>

        <div className="form-group row my-3">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
            Time
          </label>
          <div className="col-sm-3">
            <input type="time" className="form-control form-control-sm input-in-lv-ch" />
          </div> to
          <div className="col-sm-3">
            <input type="time" className="form-control form-control-sm input-in-lv-ch" />
          </div>
        </div>

        <div className="form-group row my-3">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
            Per mnt
          </label>
          <div className="col-sm-3">
            <input type="text" className="form-control form-control-sm input-in-lv-ch"
              placeholder="1200 BDT" />
          </div>
        </div>

        <div className="form-group row my-3">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
            <Link to='/superstar-admin/live-chat/chat-star-profile'><button className="btn btn-warning w-100 text-dark con-text-bfo">
            Confirm
          </button></Link>
          
          </label>
        </div>
      </form>

    </div>
  </div>

</div>
);
}
