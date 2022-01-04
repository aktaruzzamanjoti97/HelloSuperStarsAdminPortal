import React, { useRef, useState } from 'react';
import Logo from '../../../../../assets/images/helloSuperStar.png'
import {Card,Form,Container} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';

import OTPModalsp from './OTPModalsp'
export default function (props) {

    const [modalShow, setModalShow] = React.useState(false);
    function handleClickModal(e){
        e.preventDefault();
        setModalShow(true);
    }
return (
<>
    <div className="login-Super-body">
        <section id="header" className="d-flex align-items-center">
            <div className=" col-md-12 ">
                <div className="row">
                    <div className="col-md-8 flex-column logIn-bg-left Login-Super-Left">
                        <center>
                            <img src={Logo} alt="" className="logIn-bg-left-img" />
                        </center>
                    </div>

                    <div className="col-lg-4 header-img">
                        <Container className="d-flex align-items-center justify-content-center login-super-right">

                            <div className="w-100 SP-S_long" >
                                <Card className='logIn-bg-sp'>
                                    <Card.Body>

                                        <div className="d-flex justify-content-center parent-border">
                                            <h4 className="text-center mb-4 logIn-header"> Registration</h4>
                                        </div>
                                        <br />
                                        <br />

                                        <Form className='text-center'>

                                            <input className="btn btn-warning btn-sp-register-ad" placeholder="Email"name='email' />

                                            <input className="btn btn-warning btn-sp-register-ad" placeholder="Phone" name='phone' />

                                            <input className="btn btn-warning btn-sp-register-ad" placeholder="Password" name='password' />
                                            
                                            <input className="btn btn-warning btn-sp-register-ad" placeholder="Confirm Password" />
                                            
                                            <div className="d-flex  justify-content-around mt-5 "> 
                                                <button className="btn btn-warning " placeholder="Next" type="submit" onClick={handleClickModal} >Next</button>
                                                <OTPModalsp show={modalShow} onHide={() => setModalShow(false)} />
                                            </div>

                                        </Form>
                     
                                    </Card.Body>


                                    <div className="text-center Login_SP_Footer">
                                       
                                    </div>

                                </Card>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </section>

    </div>
</>
)
}