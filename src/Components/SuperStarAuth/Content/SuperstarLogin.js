import React from 'react'
import Logo from '../../../assets/images/helloSuperStar.png'

import {Card,Form,Container,Button } from 'react-bootstrap'
import '../CSS/SuperStarHome.css'
import '../CSS/login.css'
import { Link } from 'react-router-dom'
const SuperstarLogin = () => {
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
                        <Container className="d-flex align-items-center justify-content-center login-super-right"
                            style={{ minHeight: "100vh" }}>

                            <div className="w-100 SP-S_long" style={{ maxWidth: "480px" ,}}>
                                <Card className='logIn-bg-sp'>
                                    <Card.Body>

                                        <div className="d-flex justify-content-center parent-border">
                                            <h4 className="text-center mb-4 logIn-header"> Registration</h4>
                                        </div>
                                        <br />

                                        <Form className='text-center'>

                                            <input className="btn btn-warning w-75"
                                                placeholder="Enter QR Code Number" />

                                            <div className="d-flex  justify-content-around mt-5 ">
                                                
                                                <button className="btn btn-warning w-25" placeholder="Next"
                                                    type="submit">Next</button>
                                            </div>
                                        </Form>
                                    </Card.Body>

                                    <div className="text-center Login_SP_Footer">
                                    Already have an account? <a href="#" className="Login_SP_Footer-btn">LOG IN</a>
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

export default SuperstarLogin