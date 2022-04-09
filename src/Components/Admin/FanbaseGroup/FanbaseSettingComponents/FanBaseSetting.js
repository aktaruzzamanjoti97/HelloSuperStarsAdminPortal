import React, { useEffect, useState } from 'react';
import './FanBaseSetting.css'
import { Table } from 'react-bootstrap';
import vectior3 from "../../../../assets/images/fanGroup/unknown.png";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

const FanBaseSetting = () => {
  const [joinFanGroup, setJoinFanGroup] = useState('');
  const [postFanGroup, setPostFanGroup] = useState('');
  // const [postFanGdroup, setPostFanGroupd] = useState([]);
  // console.log('postFanGdroup', postFanGdroup);

  let { slug } = useParams();

  useEffect(() => {
    axios.get(`/api/admin/fan/group/show/${slug}`).then((res) => {
      if (res.status === 200) {
        // setPostFanGroupd(res.data.fanDetails);
        setJoinFanGroup(res.data.fanDetails.join_approval_status);
        setPostFanGroup(res.data.fanDetails.post_approval_status);
      }
    });
  }, [slug]);

  function handleApprove() {

    if(joinFanGroup){
      axios.post(`/api/admin/fan-group/join/${slug}/${joinFanGroup}`).then((res) => {
        if (res.status === 200) {
          console.log('Done');
    
          swal("Welcome", res.data.message, "success");
          // history.push('/superstar-admin/fan-group');
        }
      });
    }
    
  }
  

  function handlePost() {
    if(postFanGroup){
      axios.post(`/api/admin/fan-group/post/${slug}/${postFanGroup}`).then((res) => {
        if (res.status === 200) {
          console.log('Done');
    
          swal("Welcome", res.data.message, "success");
          // history.push('/superstar-admin/fan-group');
        }
      });
    }

  }
  return (
    <div>
      <div className="row my-3">
        <div className="container-fluid">
          <div className="card bg-dark">
            <div className="card-body">
              <h5 className="text-light">Top members</h5>

              {/* table content here */}
              <Table striped bordered hover variant="dark" style={{ fontSize: '12px' }}>
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
          <h5>Join Approval</h5>
            <select class="form-select bg-dark text-light" aria-label="Default select example" value={joinFanGroup} onClick={handleApprove()} onChange={(e) => setJoinFanGroup(e.target.value)}>
              <option selected>-- Select --</option>
              <option value='0'>Approve by Admin/Star</option>
              <option value='1'>Anyone can Join</option>
            </select>

            {/* <div className="d-flex justify-content-end my-2" >
              <button className='btn btn-warning px-4'>Save</button>
            </div> */}

          </div>
        </div>
      </div>

      <div className="container-fluid m-0 p-0 my-3">
        <div className="card bg-dark">
          
          <div className="card-body">
          <h5>Post Approval</h5>
            <select class="form-select bg-dark text-light" aria-label="Default select example" value={postFanGroup} onClick={handlePost()} onChange={(e) => setPostFanGroup(e.target.value)}>
              <option selected>-- Select --</option>
              <option value='0'>Approve by Admin/Star</option>
              <option value='1'>Anyone can post</option>
            </select>

            {/* <div className="d-flex justify-content-end my-2" >
              <button className='btn btn-warning px-4'>Save</button>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default FanBaseSetting;