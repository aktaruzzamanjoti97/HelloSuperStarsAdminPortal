import axios from "axios";
import React, { useEffect, useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './AddSessionTextEditor.css';
import Nav from '../Nav';




export default function AddSession() {
  const history = useHistory();

  const [videoData, setVideoData] = useState("");
  const [starList, setStarList] = useState([]);


  const [registerInput, setRegister] = useState({

    admin_id: '',
    star_id: '',
    title: '',
    video_url: '',
    star_approval: '',
    status: ''

  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => {
      return ({ ...prev, [name]: value });
    })
    // e.persist();
    // setRegister({...registerInput, [e.target.name]: e.target.value});
  }


  // Fetch Stars Added By Admin
  useEffect(() => {

    axios.get(`/api/admin/star_list`).then(res => {

      if (res.status === 200) {
        setStarList(res.data.category);
        console.log(res.data.category);
      }
    });
  }, []);



  const handleVideoChange = (file) => {
    console.log('Video File',file[0]);
    setVideoData(file[0]);
  };
  



  const promoSubmit = (e) => {
    e.preventDefault();

    // console.log(registerInput.description);


    const fData = new FormData();

    fData.append('title', registerInput.title);
    fData.append('video_url',videoData );
    fData.append('star_id', registerInput.star_id);


    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/admin/promoVideo/store`, fData).then(res => {
        if (res.data.status === 200) {
          // document.getElementById('input_form').reset();   
          swal("Success", res.data.message, "success");
          history.push("/superstar-admin/pending/promoVideo");
        } else {

          //setModalShow(true);
          setRegister({ ...registerInput, error_list: res.data.validation_errors });
        }
      });
    });

  };




  return (
    <>
<Nav/>
          <div
            className="my-4"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <div className="Modal-js-body">
              <div className="container">
                <form
                  className="p-3"
                  onSubmit={promoSubmit}
                  id="input_form"
                  encType="multipart/form-data"
                >
                  <div className="form-group row my-4">
                    <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch">
                      Select Star
                    </label>
                    <div className="col-sm-7">
                      <select
                        onChange={handleInput}
                        name="star_id"
                        className="form-control reply-control input-overlay"
                        value={registerInput.star_id}
                      >
                        <option className="text-whaite" value="">
                          Choose One
                        </option>
                        {starList.map((user, index) => (
                          <option className="text-whaite" value={user.id}>
                            {user.first_name} {user.last_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group row my-4">
                    <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                      Title
                    </label>
                    <div className="col-sm-7">
                      <input
                        type="text"
                        className="form-control form-control-sm input-in-lv-ch"
                        placeholder="Enter title here...!"
                        onChange={handleInput}
                        name="title"
                        value={registerInput.title}
                      />
                    </div>
                  </div>
                  <div className="form-group row my-4">
                    <label for="video_url" className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                      Upload Video
                    </label>
                    <div className="col-sm-7">
                      <input
                        type="file"
                        className="form-control form-control-sm input-in-lv-ch"
                        placeholder="Enter title here...!"
                        onChange={(e) => handleVideoChange(e.target.files)}
                        name="video_url"
                        value={registerInput.video_url}
                      />
                    </div>
                  </div>

                  <div className="form-group row my-3">
                    <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                      <button
                        className="btn btn-warning w-100 text-dark con-text-bfo"
                        type="submit"
                      >
                        Submit
                      </button>
                    </label>
                  </div>
                </form>

              </div>

          </div>
        </div>
     
    </>
  );
}
