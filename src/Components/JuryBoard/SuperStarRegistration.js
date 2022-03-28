import React, { useRef, useState } from 'react';
import Logo from '../../assets/images/helloSuperStar.png'
import {Card,Form,Container} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import axios from "axios";
import swal from 'sweetalert';

const SuperStarRegistration = () => {

    const ConfirmPasswordRef = useRef();
    //const { signup } = useAuth();

    // const [loading, setLoading] = useState(false);
    const loading=false;
    const [changeIcon, setChange] = useState(false);
    const [changIcon1, setChangeIcon1] = useState(false);



    function handleChangeIcon() {
        setChange(!(changeIcon));

    }

    function handleChangeIcon1() {
        setChangeIcon1(!(changIcon1));
    }


    const history = useHistory();
    const [registerInput, setRegister] = useState({
        email: '',
        phone: '',
        password: '',
        error_list: []
    });
    //const [regvalue,setRegValue]=useState('');

    const handleInput = (e) => {
        const {name,value}=e.target;
        setRegister((prev)=>{
            return({...prev,[name]:value});
        })
        // e.persist();
        // setRegister({...registerInput, [e.target.name]: e.target.value});
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: localStorage.auth_id,
            email: registerInput.email,
            phone: registerInput.phone,
            password: registerInput.password,
        }


        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/superStar/register`, data).then(res => {
                if(res.data.status === 200)
                {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.name);
                    localStorage.setItem('auth_id', res.data.id);
                    localStorage.setItem('auth_type', res.data.auth_type);

                    swal("Success",res.data.message,"success");
                    if (res.data.auth_type === 'star') {
                        history.push('/superstar_registration/otp');
                    }
                    history.push('/jury-board-registration/otp');

                }
                else{
                    setRegister({ ...registerInput,error_list: res.data.validation_errors });
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
                                        <br />

                                        <Form onSubmit={registerSubmit} className='text-center'>

                                            <input className="btn btn-warning btn-sp-register-ad" onChange={handleInput} name='email' value={registerInput.email} placeholder="Email" required/>
                                            <span>{registerInput.error_list.email}</span>
                                            <input className="btn btn-warning btn-sp-register-ad" onChange={handleInput} name='phone' value={registerInput.phone} placeholder="Phone" required/>
                                            <span>{registerInput.error_list.phone}</span>
                                            <input type="password" className="btn btn-warning btn-sp-register-ad" placeholder="Password" onChange={handleInput}  name='password' value={registerInput.password} required/>
                                            <span>{registerInput.error_list.password}</span>
                                            
                                            <input type="password" className="btn btn-warning btn-sp-register-ad" placeholder="Confirm Password" required/>
                                            
                                            <div className="d-flex  justify-content-around mt-5 "> 
                                                <button className="btn btn-warning " placeholder="Next" type="submit">Next</button>
                                            </div>

                                        </Form>
                                    </Card.Body>

                                    <div className="text-center Login_SP_Footer">
                                        {/* Already have an account? <Link to='/superstar-admin/superstar/login'><a className="Login_SP_Footer-btn">Log in</a></Link> */}
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

export default SuperStarRegistration