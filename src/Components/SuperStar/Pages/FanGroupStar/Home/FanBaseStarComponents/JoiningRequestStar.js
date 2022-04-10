import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

import JoinImg from "../../../../../../assets/images/fanGroup/unknown.png";
import JoiningRequestModalStar from './JoiningRequestModalStar';


const JoiningRequestStar = () => {
const [modalShow, setModalShow] = React.useState(false);

let {slug} = useParams();
const [fanMember, setFanMember] = useState([]);
console.log('fanMember ', fanMember)

useEffect(() => {
  axios.get(`/api/star/fan/group/show/${slug}`).then((res) => {
    if (res.status === 200) {
      setFanMember(res.data.fanMember);
    }
  });
}, [slug]);

function handleIdCheck(id){

  axios.post(`/api/star/fan/member/approve/${id}`).then((res) => {
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
              <tr >
                <td><img src={`http://localhost:8000/${member.user?.image}`}  className='mx-1' alt="" style={{width: '35px',
    height: '35px', borderRadius: '50%;'}} /> {member.user?.first_name} {member.user?.last_name}</td>
                <td className='pt-3'>{ member.star_name }</td>
                {/* <td className='text-center'> <i class="btn fa-solid fa-eye text-warning " onClick={()=>
                    setModalShow(true)} ></i> <i class="fa-solid fa-square-plus text-success btn "></i> <i
                    class="fa-solid fa-trash-can text-danger btn  "></i>
                  <JoiningRequestModalStar show={modalShow} onHide={()=> setModalShow(false)}  />
                </td> */}
                <td className='text-center'> <i class="btn fa-solid fa-eye text-warning " onClick={()=>
                      setModalShow(true)} ></i> <i class="fa-solid fa-square-plus text-success btn" title='Approve Now' onClick={()=>handleIdCheck(member.id)}></i> <i
                      class="fa-solid fa-trash-can text-danger btn  "></i>
                    <JoiningRequestModalStar show={modalShow} onHide={()=> setModalShow(false)}
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

export default JoiningRequestStar
