import React, { useState } from 'react';
import Logo from '../../assets/images/helloSuperStar.png'
import {Card,Form,Container} from 'react-bootstrap' 
import { Link, useHistory } from 'react-router-dom'
import axios from "axios";
import swal from 'sweetalert';

const SuperStarQR = () => {

    const history = useHistory();
    const [loginInput, setLogin] = useState({
        qr_code: '',
        error_list: []
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value});
    }


    const qrSubmit = (e) => {
        e.preventDefault();
        const data = {
            qr_code: loginInput.qr_code,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/star_qr_verify`, data).then(res => {
                if(res.data.status === 200)
                    {
                        localStorage.setItem('auth_id', res.data.star_id);

                        swal("Success",res.data.message,"success");
                        history.push('/superstar/registration');
                    }
                    else if(res.data.status === 401)
                    {
                        swal("Warning",res.data.message,"warning");
                    }
                    else{
                        setLogin({ ...loginInput,error_list: res.data.validation_errors });
                    }
            });
        });
        
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

                                        <Form onSubmit={qrSubmit} className='text-center'>

                                            

                                            <input type="text" className="btn btn-warning btn-sp-register-ad" name="qr_code" onChange={handleInput} value={loginInput.qr_code} placeholder="Enter QR Code Number"/>
                                            <br/><span className="text-light">{loginInput.error_list.qr_code}</span>

                                            <div className="d-flex  justify-content-around mt-5 ">
                                                
                                                <button className="btn btn-warning " placeholder="Next" type="submit">Next</button>
                                            </div>
                                        </Form>
                                    </Card.Body>

                                    <div className="text-center Login_SP_Footer">
                                    Already have an account? <Link to='/superstar/login'><a className="Login_SP_Footer-btn">Log in</a></Link>
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

export default SuperStarQR