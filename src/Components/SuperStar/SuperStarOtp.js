import React, { useState,useEffect } from 'react';
import Logo from "../../assets/images/helloSuperStar.png";
import { Card, Form, Container } from "react-bootstrap";
import $ from 'jquery';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const AdminOTP = () => {

$(".inputs").keyup(function () {
if (this.value.length === this.maxLength) {
$(this).next('.inputs').focus();
}
});

const history = useHistory();

const [loginInput, setLogin] = useState({
otp1: '',
otp2: '',
otp3: '',
otp4: '',
otp5: '',
otp6: '',
});

const handleInput = (e) => {
e.persist();
setLogin({...loginInput, [e.target.name]: e.target.value});
}

const loginSubmit = (e) => {
e.preventDefault();
const data = {
otp: loginInput.otp1 + loginInput.otp2 + loginInput.otp3 + loginInput.otp4 + loginInput.otp5 + loginInput.otp6
}

let otp = data.otp;

if(otp.length === 6)
{
axios.post(`/api/star_otp_verify`, data).then(res => {
if(res.data.status === 200)
{
localStorage.setItem('auth_otp', 'yes');

swal("Success",res.data.message,"success");
history.push('/superstar/dashboard');
}
else if(res.data.status === 401)
{
swal("Warning",res.data.message,"warning");
}
else{
setLogin({ ...loginInput,error_list: res.data.validation_errors });
}
});
}
else{
console.log("less");
swal("Warning","Enter 6 digit OTP first","warning");
}
}

// otp countdown start
const [counter, setCounter] = useState(30);

const [maskingNumber, setMaskingNumber] = useState();

useEffect(() => {

const number = localStorage.auth_phone;
const musking_num = `${number.substring(0, 3)} ${'****'} ${number.substring(6, number.length)}`;

setMaskingNumber(musking_num);

const timer =
counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
return () => clearInterval(timer);

}, [counter]);

function handleResend(){
axios.get(`/api/resend_otp`).then(res => {
if(res.data.status === 200)
{
setCounter(30);
}
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
                            <div className="w-100 SP-S_long">
                                <Card className="logIn-bg-sp">
                                    <Card.Body>
                                        <div className="d-flex justify-content-center parent-border">
                                            <h4 className="text-center mb-4 logIn-header">
                                                OTP Verify
                                            </h4>
                                        </div>
                                        <br />

                                        <Form className="text-center" onSubmit={loginSubmit}>

                                            <button className="btn  w-100 disabled" style={{ color: "goldenrod" }}
                                                placeholder="Next ">
                                                <p>We have sent an SMS to your Phone Number {maskingNumber}</p>
                                                <b>Time left {counter}s</b> <br /><br />
                                            </button>
                                            <div className="otpS align-items-center justify-content-center">
                                                <input type="text" className="inputs" name="otp1" maxLength="1"
                                                    onChange={handleInput} value={loginInput.otp1} />
                                                <input type="text" className="inputs" name="otp2" maxLength="1"
                                                    onChange={handleInput} value={loginInput.otp2} />
                                                <input type="text" className="inputs" name="otp3" maxLength="1"
                                                    onChange={handleInput} value={loginInput.otp3} />
                                                <input type="text" className="inputs" name="otp4" maxLength="1"
                                                    onChange={handleInput} value={loginInput.otp4} />
                                                <input type="text" className="inputs" name="otp5" maxLength="1"
                                                    onChange={handleInput} value={loginInput.otp5} />
                                                <input type="text" className="inputs" name="otp6" maxLength="1"
                                                    onChange={handleInput} value={loginInput.otp6} />
                                            </div>

                                            <br />

                                            <div className="d-flex  justify-content-around mt-5 OTP-SP-Log ">

                                                {counter===0 ? ( <span className='btn btn-warning OPT'
                                                    onClick={handleResend}>Resend</span> )
                                                : (
                                                <button className="btn btn-warning OPT" placeholder="Next"
                                                    type="submit">
                                                    Next
                                                </button>
                                                ) }
                                            </div>

                                        </Form>
                                    </Card.Body>

                                    <div className="text-center Login_SP_Footer">
                                        Already have an account?{" "}
                                        <Link to='/superstar-admin/login'>
                                        <a href="#" className="Login_SP_Footer-btn">
                                            Log in
                                        </a>
                                        </Link>
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
);
};

export default AdminOTP;