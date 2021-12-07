import React from 'react'
import { Link} from 'react-router-dom'
import Logo from '../../assets/images/helloSuperStar.png'
import {Card,Form,Container} from 'react-bootstrap'

const SuperStarLogin = () => {
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
                                            <h4 className="text-center mb-4 logIn-header"> Log in</h4>
                                        </div>
                                        <br />
                                        <br />

                                        <Form className='text-center'>

                                            <input className="btn btn-warning btn-sp-register-ad" placeholder="Email or Phone " />
                                            <input className="btn btn-warning btn-sp-register-ad" placeholder="Password " />
                                            
                                            <div className="d-flex  justify-content-around mt-5 "> 
                                                <Link to='/superstar-admin/otp'><button className="btn btn-warning" placeholder="Next" type="submit">Login</button></Link>
                                            </div>

                                        </Form>
                                    </Card.Body>

                                    <div className="text-center Login_SP_Footer">
                                       <Link to='/superstar-admin/registration'><a className="Login_SP_Footer-btn">Create an account</a></Link>
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

export default SuperStarLogin;