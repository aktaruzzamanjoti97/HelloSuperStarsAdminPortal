import React, { useEffect, useState } from 'react';
import fanbase from '../../../../../../assets/images/Fanbase-img/fanBaseApprove/c7mgygu5 1.png';
import fanbase1 from '../../../../../../assets/images/Fanbase-img/fanBaseGroup/1.png';
import { DropdownButton,Dropdown } from 'react-bootstrap';
import DeclineModalStar from './DeclineModalStar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import moment from 'moment';

// import './ApproveComponenStart.css'
// import DeclineModal from './DeclineModal';
const ApproveComponenStart = () => {
const [modalShow, setModalShow] = React.useState(false);

let { slug } = useParams();

  const [fanPost, setFanPost] = useState([]);
  console.log('fanPost ', fanPost)

  useEffect(() => {
    axios.get(`/api/star/fan/group/show/${slug}`).then((res) => {
      if (res.status === 200) {
        setFanPost(res.data.fanPost);
      }
    });
  }, [slug]);

  
  function approveMember(id){
    console.log("id is ", id);

    axios.post(`/api/star/fan/member/post/${id}`).then((res) => {
      if (res.status === 200) {
        console.log('Done');
  
        swal("Welcome", res.data.message, "success");
        // history.push('/superstar-admin/fan-group');
      }
    });
  }

  function handleIdWarning(id, fanId){
    console.log("id is ", id);
    console.log("id is ", fanId);

    axios.post(`/api/star/fan/group/approval/warning/${id}/${fanId}`).then((res) => {
      if (res.status === 200) {
        console.log('Done');
  
        swal("Welcome", res.data.message, "success");
        // history.push('/superstar-admin/fan-group');
      }
    });
  }


return (
<div>
    <div className="container">
        <div className="parent-divFan">
            <div className="child-divFan">

            {fanPost.map((post,i)=>(
                <div className="card bg-dark postFancard my-4">
                    <div className="card-body">
                        <div className="container">
                            <div className="d-flex">
                                <img src={`http://localhost:8000/${post.user?.image}`} className="img-fluid mx-2" style={{width: '40px', height: '40px'}} alt="" />
                                <div className=" w-75">
                                    <h6 className="m-0">{post.user?.first_name} {post.user?.last_name}</h6>
                                    <small style={{ color: "#A7A7A7" }}>
                                        <span>{moment(post.created_at).format('LT')} </span> <span className="mx-2">{moment(post.created_at).format('LL')}</span>{" "}
                                        <span>{ post.star_name }</span>
                                    </small>
                                </div>
                                <div>
                                    <div className='starDropdown'>
                                        <DropdownButton variant='dark' className='bg-dark text-light'
                                            id="dropdown-basic-button" title=".....">
                                            <Dropdown.Item href="#/action-1" className='text-light' onClick={()=>handleIdWarning(post.user_id, post.fan_group_id)}><i
                                                    class="fa-solid fa-triangle-exclamation mx-1"></i>Give Warning
                                            </Dropdown.Item>

                                        </DropdownButton>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="container my-2">
                            <p>{post.description}</p>
                            <img src={`http://localhost:8000/${post.image}`}  className="img-fluid w-100" alt="" />
                            <div className="row my-2">
                                <div className="col-6 text-center">
                                    <button className='btn approve-btn w-100 text-light py-3' onClick={()=>approveMember(post.id)}><i
                                            class="fa fa-check mx-1" aria-hidden="true"></i>Approve</button>

                                </div>
                                <div className="col-6 text-center">
                                    <button className='btn approve-btn2 w-100 text-light py-3' onClick={()=>
                                        setModalShow(true)} ><i class="fa fa-ban mx-1"
                                            aria-hidden="true"></i>Decline</button>
                                    <DeclineModalStar show={modalShow} onHide={()=> setModalShow(false)}
                                        />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ))}

            </div>
        </div>

    </div>
</div>
);
};

export default ApproveComponenStart;