import React, { useState } from 'react';
import './FanBaseSetting.css'
import { Table } from 'react-bootstrap';
import vectior3 from "../../../../assets/images/fanGroup/unknown.png";

const FanBaseSetting = () => {
const [joinFanGroup, setJoinFanGroup] = useState('');
// const [one, setOne] = useState(0);
// const [two, setTwo] = useState(1);

  function handleApprove(){
    console.log('joinFanGroup ', joinFanGroup);
  }
    return (
        <div>
            <div className="row my-3">
        <div className="container-fluid">
          <div className="card bg-dark">
            <div className="card-body">
              <h5 className="text-light">Top members</h5>
        
        {/* table content here */}
        <Table striped bordered hover variant="dark" style={{ fontSize:'12px' }}>
  <thead>
    <tr>
      <th>Members Name</th>
      <th>Ammount</th>
      <th>Date</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src={vectior3} className='img-fluid mx-1' alt="" /> Shoyib Mallick</td>
      <td>4  </td>
      <td>19|02|22 </td>
      <td> <span className='btn btn-sm btn-success'><i class="fa-solid fa-circle-check"></i></span><span className='btn btn-sm btn-danger mx-2'><i class="fas fa-minus"></i></span> </td>
    </tr>
    <tr>
      <td><img src={vectior3} className='img-fluid mx-1' alt="" /> Shoyib Mallick</td>
      <td>4  </td>
      <td>19|02|22 </td>
      <td> <span className='btn btn-sm btn-success'><i class="fa-solid fa-circle-check"></i></span><span className='btn btn-sm btn-danger mx-2'><i class="fas fa-minus"></i></span> </td>
    </tr>
    <tr>
      <td><img src={vectior3} className='img-fluid mx-1' alt="" /> Shoyib Mallick</td>
      <td>4  </td>
      <td>19|02|22 </td>
      <td> <span className='btn btn-sm btn-success'><i class="fa-solid fa-circle-check"></i></span><span className='btn btn-sm btn-danger mx-2'><i class="fas fa-minus"></i></span> </td>
    </tr>

   
  </tbody>
</Table>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid m-0 p-0 my-3">
          <div className="card bg-dark">
              <div className="card-body">
              <select class="form-select bg-dark text-light" aria-label="Default select example" onClick={handleApprove}>
                <option selected>-- Select Approval--</option>
                <option value='0' onChange={(event)=>{ setJoinFanGroup(event.target.value) }}>Approve by Admin/Star</option>
                <option value='1' onChange={(event)=>{ setJoinFanGroup(event.target.value) }}>Anyone can Join</option>
              </select>

<div className="container p-0 mt-3 ">
    <div className="card ms-auto w-75" style={{ background:'#373737' }}>
    <div className="card-body">
       <h6 className="text-light ">Any one can post</h6>
       </div>
    </div>
</div>
<div className="container p-0  ">
    <div className="card ms-auto w-75" style={{ background:'#373737' }}>
    <div className="card-body">
       <h6 className="text-light ">Any one can post</h6>
       </div>
    </div>
</div>


    <div className="d-flex justify-content-end my-2" >
    <button className='btn btn-warning px-4'>Save</button>
    </div>

              </div>
          </div>
      </div>
        </div>
    );
};

export default FanBaseSetting;