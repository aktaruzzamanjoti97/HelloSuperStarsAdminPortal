import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import Logo from '../../assets/images/helloSuperStar.png'
import { Button, Form, Container, Card } from 'react-bootstrap'
import axios from "axios";
import swal from 'sweetalert';

const AdminLogin = () => {

    const history = useHistory();
    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: []
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value});
    }


    const loginSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/star_login`, data).then(res => {

                    if(res.data.status === 200)
                    {
                        localStorage.setItem('auth_token', res.data.token);
                        localStorage.setItem('auth_name', res.data.name);
                        localStorage.setItem('auth_id', res.data.id);
                        localStorage.setItem('auth_phone', res.data.phone);
                        localStorage.setItem('auth_type', res.data.role);
                         
                        if(res.data.role == 'admin')
                        {
                            swal("Welcome",res.data.message,"success");
                            history.push('/superstar-admin/otp');
                        }
                        if(res.data.role == 'star')
                        {
                            swal("Welcome",res.data.message,"success");
                            history.push('/superstar/otp');
                        }
                        
                    }
                    else if(res.data.status === 403)
                    {
                        swal("Success",res.data.message,"success");
                        history.push('/otp');
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
                                            <h4 className="text-center mb-4 logIn-header"> Log in</h4>
                                        </div>
                                        <br />
                                        <br />

                                        <Form onSubmit={loginSubmit}  className='text-center'>


                                            <input className="btn btn-warning btn-sp-register-ad" name="email" onChange={handleInput} value={loginInput.email} placeholder="Email or Phone " />
                                            <br/><span className="text-light">{loginInput.error_list.email}</span>

                                            <input className="btn btn-warning btn-sp-register-ad" name="password" type="password" onChange={handleInput} value={loginInput.password} placeholder="Password " />
                                            <br/><span className="text-light">{loginInput.error_list.password}</span>

                                            <div className="d-flex  justify-content-around mt-5 "> 
                                                <button className="btn btn-warning" placeholder="Next" type="submit">Login</button>
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

export default AdminLogin;