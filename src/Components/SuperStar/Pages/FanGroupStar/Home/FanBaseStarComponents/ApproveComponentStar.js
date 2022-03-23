import React from 'react';
import fanbase from '../../../../../../assets/images/Fanbase-img/fanBaseApprove/c7mgygu5 1.png';
import fanbase1 from '../../../../../../assets/images/Fanbase-img/fanBaseGroup/1.png';
import { DropdownButton,Dropdown } from 'react-bootstrap';
// import './ApproveComponenStart.css'
// import DeclineModal from './DeclineModal';
const ApproveComponenStart = () => {
const [modalShow, setModalShow] = React.useState(false);
return (
<div>
    <div className="container">
        <div className="parent-divFan">
            <div className="child-divFan">
                <div className="card bg-dark postFancard my-4">
                    <div className="card-body">
                        <div className="container">
                            <div className="d-flex">
                                <img src={fanbase1} className="img-fluid mx-2" alt="" />
                                <div className=" w-75">
                                    <h6 className="m-0">Ajgar Ali</h6>
                                    <small style={{ color: "#A7A7A7" }}>
                                        <span>5:10pm </span> <span className="mx-2">15 Feb 2022</span>{" "}
                                        <span>Salman khan</span>
                                    </small>
                                </div>
                                <div>
                                    <div className='starDropdown'>
                                        <DropdownButton variant='dark' className='bg-dark text-light'
                                            id="dropdown-basic-button" title=".....">
                                            <Dropdown.Item href="#/action-1" className='text-light'><i
                                                    class="fa-solid fa-triangle-exclamation mx-1"></i>Give Warning
                                            </Dropdown.Item>

                                        </DropdownButton>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="container my-2">
                            <img src={fanbase} className="img-fluid w-100" alt="" />
                            <div className="row my-2">
                                <div className="col-6 text-center">
                                    <button className='btn approve-btn w-100 text-light py-3'><i
                                            class="fa fa-check mx-1" aria-hidden="true"></i>Approve</button>

                                </div>
                                <div className="col-6 text-center">
                                    {/* <button className='btn approve-btn2 w-100 text-light py-3' onClick={()=>
                                        setModalShow(true)} ><i class="fa fa-ban mx-1"
                                            aria-hidden="true"></i>Decline</button>
                                    <DeclineModal show={modalShow} onHide={()=> setModalShow(false)}
                                        /> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
</div>
);
};

export default ApproveComponenStart;