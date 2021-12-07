import React from "react";
import Logo from "../../assets/images/helloSuperStar.png";
import { Card, Form, Container } from "react-bootstrap";
import $ from 'jquery';
import { Link} from 'react-router-dom'

const AdminOTP = () => {
$(".inputs").keyup(function () {
if (this.value.length === this.maxLength) {
$(this).next('.inputs').focus();
}
});
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

                                        <Form className="text-center">
                                            <button className="btn  w-100 disabled" style={{ color: "goldenrod" }}
                                                placeholder="Next ">
                                                We have sent an SMS to your Phone Number
                                                +88017*******876
                                            </button>
                                            <div className="otpS align-items-center justify-content-center">
                                                <input type="text" className="inputs" name="otp1" maxLength="1" />
                                                <input type="text" className="inputs" name="otp2" maxLength="1" />
                                                <input type="text" className="inputs" name="otp3" maxLength="1" />
                                                <input type="text" className="inputs" name="otp4" maxLength="1" />
                                                <input type="text" className="inputs" name="otp5" maxLength="1" />
                                                <input type="text" className="inputs" name="otp6" maxLength="1" />
                                            </div>

                                            <br />
                                            <button className="btn  w-100 disabled OTP-time-sp-ad-e"
                                                style={{ color: "goldenrod" }} placeholder="Next ">
                                                Time remaining: 0:45
                                            </button>
                                            <button className="btn  w-100 disabled OTP-time-sp-ad"
                                                style={{ color: "goldenrod" }} placeholder="Next ">
                                                Resend
                                            </button>

                                            <div className="d-flex  justify-content-around mt-5 OTP-SP-Log ">
                                                <Link to='/superstar-admin/dashboard'>
                                                <button className="btn btn-warning OPT" placeholder="Next"
                                                    type="submit">
                                                    Next
                                                </button>
                                                </Link>
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