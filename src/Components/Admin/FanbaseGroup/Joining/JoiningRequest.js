import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import './joiningRequest.css'
import swal from 'sweetalert';

import JoinImg from "../../../../assets/images/fanGroup/unknown.png";
import JoiningRequestModal from './JoiningRequestModal';

const JoiningRequest = () => {
const [modalShow, setModalShow] = React.useState(false);


let {slug} = useParams();

const [fanMember, setFanMember] = useState([]);
console.log('fanMember check', fanMember)

useEffect(() => {
  axios.get(`/api/admin/fan/group/show/${slug}`).then((res) => {
    if (res.status === 200) {
      setFanMember(res.data.fanMember);
    }
  });
}, [slug]);

function handleIdCheck(id){

  axios.post(`/api/admin/fan/member/approve/${id}`).then((res) => {
    if (res.status === 200) {
      console.log('Done');

      swal("Welcome", res.data.message, "success");
      // history.push('/superstar-admin/fan-group');
    }
  });
}

return (
<>
  <div className="row my-3">
    <div className="container-fluid">
      <div className="card bg-dark">
        <div className="card-body">
          <h5 className="text-light">Warned</h5>

          <Table striped bordered hover variant="dark" style={{ fontSize:'12px' }}>
            <thead>
              <tr>
                <th>Members Name</th>
                <th>Own Star Name</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              {fanMember.map((member ,i) => (
                <tr>
                  <td><img src={`http://localhost:8000/${member.user?.image}`} className='mx-1 ProImgx' alt="" /> {member.user?.first_name} {member.user?.last_name}</td>
                  <td className='pt-3'>{ member.star_name }</td>
                  <td className='text-center'> <i class="btn fa-solid fa-eye text-warning " onClick={()=>
                      setModalShow(true)} ></i> <i class="fa-solid fa-square-plus text-success btn" title='Approve Now' onClick={()=>handleIdCheck(member.id)}></i> <i
                      class="fa-solid fa-trash-can text-danger btn  "></i>
                    <JoiningRequestModal show={modalShow} onHide={()=> setModalShow(false)}
                      />
                  </td>
                </tr>
              ))}
              
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  </div>
</>
)
}

export default JoiningRequest