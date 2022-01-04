import React, { useState,useEffect } from 'react';
import { Modal,Button,Card } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
import swal from 'sweetalert';


export default function OTPModalsp(props) {


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
                    history.push('/hello-superstar-admin-panel');
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
const [counter, setCounter] =useState(10);

useEffect(() => {
    const timer =
    counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
}, [counter]);


function handleResend(){
    axios.get(`/api/resend_otp`).then(res => {
        if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setCounter(20);
            }
            else{
                setLogin({ ...loginInput,error_list: res.data.validation_errors });
            }
    });
}



    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Body className="bg-dark">
        <Card.Body> 
        <div className="d-flex justify-content-center parent-border bg-dark">
            <h4 className="text-center mb-4 logIn-header">
                OTP Verify
            </h4>
        </div>
        <br />

        <form className="text-center bg-dark">
            <button className="btn  w-100 disabled" style={{ color: "goldenrod" }}
                placeholder="Next ">
                We have sent an SMS to your Phone Number
                +88017*******876
            </button>
            <div className="otpS align-items-center justify-content-center bg-dark">
              <input type="text" className="inputs" name="otp1"  maxLength="1" onChange={handleInput} value={loginInput.otp1}/>
              <input type="text" className="inputs" name="otp2"  maxLength="1" onChange={handleInput} value={loginInput.otp2}/>
              <input type="text" className="inputs" name="otp3" maxLength="1" onChange={handleInput} value={loginInput.otp3}/>
              <input type="text" className="inputs" name="otp4" maxLength="1" onChange={handleInput} value={loginInput.otp4}/>
              <input type="text" className="inputs" name="otp5" maxLength="1" onChange={handleInput} value={loginInput.otp5}/>
              <input type="text" className="inputs" name="otp6" maxLength="1" onChange={handleInput} value={loginInput.otp6}/>
            </div>

            <br />
            <button className="btn  w-100 disabled OTP-time-sp-ad-e "
                style={{ color: "goldenrod" }} placeholder="Next ">
                Time remaining: 0:45
            </button>
            <button className="btn  w-100 disabled OTP-time-sp-ad"
                style={{ color: "goldenrod" }} placeholder="Next ">
                Resend
            </button>

            <div className="d-flex  justify-content-around mt-5 OTP-SP-Log ">
                <Link to='/'>
                <button className="btn btn-warning OPT" placeholder="Next" onClick={loginSubmit}
                    type="submit">
                    Next
                </button>
                </Link>
            </div>
        </form>
    </Card.Body>
        </Modal.Body>
       
      </Modal>
    );
  }
  