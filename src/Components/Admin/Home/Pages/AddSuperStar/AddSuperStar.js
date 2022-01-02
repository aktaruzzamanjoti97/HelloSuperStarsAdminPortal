import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './AddSuperStar.css';
import { Link } from 'react-router-dom';
import AddUser from '../../../../../assets/images/AddUser/AddUser.png'
import './AddSuperStar.css'
// import { dummyData } from '../../../../../dummyData/dummyData';
// import SuperstarList from './SupestarList/SuperstarList';
import purnima from '../../../../../assets/images/SuperStar/purnima.jpg'
import ferdous from '../../../../../assets/images/SuperStar/ferdous.jpg'
import mukesh from '../../../../../assets/images/SuperStar/mukesh-ambani.jpg'
import AddSuperStarModal from './AddSuperStarModal/AddSuperStarModal';
import axios from "axios";
import swal from 'sweetalert';



const AddSuperStar = () => {

    const [loading, setLoading] = useState(true);
    const [file, setFile] = useState('');
    const [starList, setStarList] = useState([]);

    const [modalShow, setModalShow] = useState(false);

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    };

    // Fetch Stars Added By Admin
    useEffect(() => {

        axios.get(`/api/admin/star_list`).then(res =>{

          if(res.status === 200)
          {
            setStarList(res.data.category);
            //console.log(res.data.category);
          }
          setLoading(false);
        });
    }, [starList]);

    var stars = "";

    if(loading)
    {
        return <h1>...</h1>
    }
    else{
        stars = 
        starList.map((star, index) => (
            <span className="col-md-2" >
            <Card.Body className="border border-warning mb-2" style={{ background: '#000000', borderRadius: '10px' }}>
                <div className="avatar-img my-3 text-center">
                    <img
                        src={`http://localhost:8000/${star.image}`}
                        className="img-fluid avatar-img-src"
                        alt="profile-pic"
                        style={{ borderRadius: '50%' }}
                    />
                </div>
                <div className="text-center my-2">
                    <h5 className="text-white text-center" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{star.first_name} {star.last_name}</h5>
                    <p className="text-white">Actress</p>
                    <div className="parent-div">
                        

                        <Link to={`/superstar-admin/agreement-paper/${star.id}`}><button className="btn btn-warning btn-upload">
                            <i className="fas fa-calendar-day mx-2"></i>
                            Details
                        </button></Link>
                       
                    </div>
                </div>
            </Card.Body>
            </span>
        ))
    }



    return (
        <>
            <div>
                <Card className="border border-warning" style={{ width: '12rem', background: '#343434' }}>
                    <Card.Body>
                        <div className="avatar-img my-3 text-center">
                            <img
                                src={file === "" ? AddUser : file}
                                className="img-fluid avatar-img-src"
                                alt="profile-pic"
                            />
                        </div>
                        <div className="text-center my-2">
                            <div className="parent-div">
                                <button onClick={() => setModalShow(true)} className="btn btn-warning btn-upload">
                                    Add New
                                </button>
                                {/* <input type="file" className="btn" onChange={handleChange} /> */}
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <div>
                <AddSuperStarModal show={modalShow}
                    onHide={() => setModalShow(false)} />
            </div>

            <div style={{ background: '#343434' }} className="border border-warning mt-4 row">
                {/* <div className="row">
                   {
                       dummyData.map(star => <SuperstarList star={star}/>)d
                   }
               </div> */}
                <div className="p-4 row col-12">
                    


                    {stars}


                </div>
            </div>
        </>
    );
};

export default AddSuperStar;