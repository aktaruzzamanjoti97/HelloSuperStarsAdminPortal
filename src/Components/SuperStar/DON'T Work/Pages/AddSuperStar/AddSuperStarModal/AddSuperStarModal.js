import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import avatarImage from '../../../../../../assets/images/profileAvatar/Avater.png';
import './AddSuperStarModal.css';
import axios from "axios";
import swal from 'sweetalert';


const AddSuperStarModal = (props) => {

    const [file, setFile] = useState('');

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    const handleClick =(e)=>{
        e.preventDefault()
    }


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
        first_name: '',
        last_name: '',
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
            first_name: registerInput.first_name,
            last_name: registerInput.last_name,
        }


        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/star_register`, data).then(res => {
                if(res.data.status === 200)
                {
                    document.getElementById('input_form').reset();
                  
                    swal("Success",res.data.message,"success");
                    // setModalShow(false);
                
                }
                else{
                    //setModalShow(true);
                    setRegister({ ...registerInput,error_list: res.data.validation_errors });
                }
            });
        });
      
    }

    const [modalShow, setModalShow] = React.useState(false);
    function handleClickModal(e){
        e.preventDefault();
        setModalShow(true);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            // className="modalBg"  
            centered>

            <Modal.Body className="modalBg">
                <div className="d-flex justify-content-end">
                    <Button onClick={props.onHide}>X</Button>
                </div>

                <div>
                    <h1 className="text-center text-white">Star Profile Registration</h1>
                </div>
                <div className="">


                    <form onSubmit={registerSubmit} id="input_form">
                        <div className="row">
                            <div className="form-group mb-3">

                            
                                <div className="row mx-auto mb-3">
                                    <div className="d-flex justify-content-center">
                                        <div className="col-md-10">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="my-2">
                                                        <big style={{ color: '#f5e445' }} >First Name</big>
                                                        <input type="text" className="form-control reply-control input-overlay" onChange={handleInput} name='first_name' value={registerInput.first_name}/>
                                                    </div>

                                                    <div className="my-2">
                                                        <big style={{ color: '#f5e445' }} >Last Name</big>
                                                        <input type="text" className="form-control reply-control input-overlay" onChange={handleInput} name='last_name' value={registerInput.last_name}/>
                                                    </div>

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="avatar-img my-3 text-center">
                                                        <img src={ file === "" ? avatarImage : file} className="img-fluid avatar-img-src" alt="profile-pic"/>
                                                    </div>
                                                    <div className="upload-input text-center my-2">
                                                        <div className="parent-div">
                                                            <button className="btn btn-dark btn-upload">
                                                                Upload Profile Picture
                                                            </button>
                                                            <input type="file" className="btn" onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row mx-auto my-3">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="col-md-10">
                                            <big style={{ color: '#f5e445' }} >Terms and Conditions</big>
                                            <textarea type="text" className="form-control reply-control input-overlay" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row mx-auto my-3">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="col-md-10">
                                            <big style={{ color: '#f5e445' }} >Star Profile File</big>
                                            <input type="file" className="form-control reply-control input-overlay" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row mx-auto my-3">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="col-md-10">
                                            <big style={{ color: '#f5e445' }} >Star Profile File</big>
                                            <input type="file" className="form-control reply-control input-overlay" />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="text-center">
                            <button  type="submit" className=" btn btn-warning w-25">Save</button>
                        </div>

                    </form>
                </div>
            </Modal.Body>

            
        </Modal>
    );
};

export default AddSuperStarModal;