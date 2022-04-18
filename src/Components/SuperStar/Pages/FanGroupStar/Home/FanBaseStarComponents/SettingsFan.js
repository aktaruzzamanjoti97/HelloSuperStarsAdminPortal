import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import './Settings.css'
import { Table } from 'react-bootstrap';
import vectior3 from "../../../../../../assets/images/fanGroup/unknown.png";
import swal from 'sweetalert';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const SettingsFan = () => {

  const [joinFanGroup, setJoinFanGroup] = useState('');
  const [postFanGroup, setPostFanGroup] = useState('');
  const [fanWarning, setFanWarning] = useState([]);
  // const [postFanGdroup, setPostFanGroupd] = useState([]);
  // console.log('postFanGdroup', postFanGdroup);

  let { slug } = useParams();

  useEffect(() => {
    axios.get(`/api/star/fan/group/show/${slug}`).then((res) => {
      if (res.status === 200) {
        // setPostFanGroupd(res.data.fanDetails);
        setJoinFanGroup(res.data.fanDetails.join_approval_status);
        setPostFanGroup(res.data.fanDetails.post_approval_status);
        setFanWarning(res.data.fanWarning);
      }
    });
  }, [slug]);

  function handleApprove() {

    if(joinFanGroup){
      axios.post(`/api/star/fan-group/join/${slug}/${joinFanGroup}`).then((res) => {
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
      axios.post(`/api/star/fan-group/post/${slug}/${postFanGroup}`).then((res) => {
        if (res.status === 200) {
          console.log('Done');
    
          swal("Welcome", res.data.message, "success");
          // history.push('/superstar-admin/fan-group');
        }
      });
    }

  }

  function warningDelete(id) {
    console.log('what ', id);
    
    axios.get(`/api/star/fan/group/settings/delete/${id}`).then((res) => {
      if (res.status === 200) {
        console.log('Done');
  
        swal("Welcome", res.data.message, "success");
        // history.push('/superstar-admin/fan-group');
      }
    });
  }

  function fanNoWarning(id) {
    console.log('what ', id);
    
    axios.post(`/api/star/fan/group/settings/no-warning/${id}`).then((res) => {
      if (res.status === 200) {
        console.log('Done');
  
        swal("Welcome", res.data.message, "success");
        // history.push('/superstar-admin/fan-group');
      }
    });
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
                {fanWarning.map((warning, i) => ( 
                  <tr>
                    <td><img src={vectior3} className='img-fluid mx-1' alt="" /> {warning.user.first_name} {warning.user.last_name}</td>
                    <td>{warning.warning_count} </td>
                    <td>{moment(warning.updated_at).format('LL')} </td>
                    <td> <span className='btn btn-sm btn-success'><i class="fa-solid fa-circle-check" onClick={()=>fanNoWarning(warning.id)}></i></span><span
                      className='btn btn-sm btn-danger mx-2'><i class="fas fa-minus" onClick={()=>warningDelete(warning.id)}></i></span> </td>
                  </tr>
                  ))}
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
            {/* <select class="form-select bg-dark text-light" aria-label="Default select example">
              <option selected>Approve by Admin</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select> */}
            <select class="form-select bg-dark text-light" aria-label="Default select example" value={joinFanGroup} onClick={handleApprove()} onChange={(e) => setJoinFanGroup(e.target.value)}>
              <option selected>-- Select --</option>
              <option value='0'>Approve by Admin/Star</option>
              <option value='1'>Anyone can Join</option>
            </select>
            

            {/* <div className="container p-0 mt-3 ">
              <div className="card ms-auto w-75" style={{ background: '#373737' }}>
                <div className="card-body">
                  <h6 className="text-light ">Any one can post</h6>
                </div>
              </div>
            </div>
            <div className="container p-0  ">
              <div className="card ms-auto w-75" style={{ background: '#373737' }}>
                <div className="card-body">
                  <h6 className="text-light ">Any one can post</h6>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end my-2">
              <button className='btn btn-warning px-4'>Save</button>
            </div> */}

          </div>
        </div>
      </div>

      <div className="container-fluid m-0 p-0 my-3">
        <div className="card bg-dark">
          <div className="card-body">
          <h5>Post Approval</h5>
            {/* <select class="form-select bg-dark text-light" aria-label="Default select example">
              <option selected>Approve by Admin</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select> */}
            <select class="form-select bg-dark text-light" aria-label="Default select example" value={postFanGroup} onClick={handlePost()} onChange={(e) => setPostFanGroup(e.target.value)}>
              <option selected>-- Select --</option>
              <option value='0'>Approve by Admin/Star</option>
              <option value='1'>Anyone can Post</option>
            </select>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsFan;