import React, { useState, useEffect  } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Route, Redirect, useHistory} from 'react-router-dom';
import avatarImage from '../../../../../../assets/images/profileAvatar/Avater.png';
import './AddSuperStarModal.css';
import axios from "axios";
import swal from 'sweetalert';


const AddSuperStarModal = (props) => {

  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const [users, setUser] = useState([]);
  
  const [subcategory, setSubcategory] = useState([]);
  const [category, setCategory] = useState([]);
  const [file, setFile] = useState('');
  const [imagedata, setImagedata] = useState('');

  const [registerInput, setRegister] = useState({
        first_name: '',
        last_name: '',
        subcategory_id: '',
        error_list: []
    });

    // Fetch Category In Options
  useEffect(() => {
    axios.get(`/api/view-category`).then(res =>{
      console.log(res.data.category);
      if(res.status === 200)
      {
        setUser(res.data.category)
      }
      setLoading(false);
    });
    }, []);

    


    // Code for Select city on State click
    const selectState =  (e) => {
        let value = e.target.value;
        var data = value;
    
        axios.get(`/api/fetch-subcategory/${data}`).then(res =>{
            console.log(res.data.category);
            if(res.status === 200)
            {
                setSubcategory(res.data.category)
            }
            setLoading(false);
          });

        setCategory(data);
    };

    
    const handleInput = (e) => {
        const {name,value}=e.target;
        setRegister((prev)=>{
            return({...prev,[name]:value});
        })
        // e.persist();
        // setRegister({...registerInput, [e.target.name]: e.target.value});
    }


    const handleChange = (file) => {
        setFile(URL.createObjectURL(file[0]));
        setImagedata(file[0]);
    }


    const registerSubmit = (e) => {
        e.preventDefault();

        //alert(registerInput.first_name);

        const fData = new FormData();

        fData.append('image', imagedata);
        fData.append('first_name', registerInput.first_name);
        fData.append('last_name', registerInput.last_name);
        fData.append('category_id', category);
        fData.append('subcategory_id', registerInput.subcategory_id);


        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/star_register`, fData).then(res => {
                if(res.data.status === 200)
                {
                    //history.push('/superstar-admin/superstars');


                    // document.getElementById('input_form').reset();   
                    swal("Success",res.data.message,"success");

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


                    <form onSubmit={registerSubmit} id="input_form" encType="multipart/form-data">
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
                                                        <img src={ file === "" ? avatarImage : file}  className="img-fluid avatar-img-src" alt="profile-pic"/>
                                                    </div>
                                                    <div className="upload-input text-center my-2">
                                                        <div className="parent-div">
                                                            <button className="btn btn-dark btn-upload">
                                                                Upload Profile Picture
                                                            </button>
                                                            <input type="file" className="btn" onChange={(e) => handleChange(e.target.files)} id="image" name="image"/>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mx-auto mb-3">
                                    <div className="d-flex justify-content-center">
                                        <div className="col-md-10">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <big style={{ color: '#f5e445' }} >Select Category</big>
                                                    
                                                    <select onChange={selectState} name="stateName" className="form-control reply-control input-overlay" id='category_id' name='category_id' value={registerInput.category_id}>
                                                        <option className="text-whaite" value="">Choose One</option>
                                                        {users.map((user, index) => (
                                                        <option className="text-whaite" value={user.id}>{user.name}</option>
                                                        ))}
                                                    </select>

                                                </div>

                                                <div className="col-md-6">
                                                    <big style={{ color: '#f5e445' }} >Select Sub Category</big>
                                                            
                                                    <select onChange={handleInput} name="cityName" className="form-control reply-control input-overlay" name='subcategory_id' name='subcategory_id' value={registerInput.subcategory_id}>
                                                    <option className="text-whaite" value="">Choose One</option>
                                                    {subcategory.map((user, index) => (
                                                        <option className="text-white" value={user.id}>{user.name}</option>
                                                        ))}
                                                    </select>
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



