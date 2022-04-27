import React, { useState, useEffect } from "react";
import EventsNav from "./EventsNav";
import cup from "../../../../../../../../assets/images/page 1.png";
import { Form } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CreateEventAudition = () => {
  let history = useHistory();
  const [file, setFile] = useState("");
  const [imageData, setImageData] = useState("");
  const [errors, setErrors] = useState([]);
  const [fileVideo, setFileVideo] = useState("");


  const [convertedContent, setConvertedContent] = useState(null);

  let { slug } = useParams();

  const [event, setEvent] = useState({});
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios.get(`/api/audition-admin/audition/${slug}`).then((res) => {
      if (res.data.status === 200) {
        setEvent(res.data.event);
        setTitle(res.data.event.title);
        console.log("Single pending event", res.data.event);
      }
    });
  }, [slug]);

  const handleChange = (file) => {
    setFile(URL.createObjectURL(file[0]));
    setImageData(file[0]);
  };
  const handleVideoChange = (file) => {
    setFileVideo(file[0]);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const fData = new FormData();
    
    fData.append('audition_id', event.id);
    fData.append('banner', imageData);
    fData.append('video', fileVideo);
    fData.append('title', title);
    fData.append('description', convertedContent);

    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`/api/audition-admin/audition/add`, fData).then(res => {
            if(res.data.status === 200)
            {
              // alert('ok');
                history.push('/audition-admin/audition/event/request-approve');
            }
            else{
              alert('not ok');
                setErrors(res.data.validation_errors);
            }
        });
    });      
}

  return (
    <>
      <div className="as">
        <EventsNav />

        <div className="liveMeetupBorder ">
          <div className="d-flex px-4">
            <div className="faTrophy">
              <img src={cup} alt="" className="mt-1" width={20} />{" "}
              <span className="text-white p-2 fontBlued">Pending Event</span>
            </div>
          </div>

          <div className="my-2">
          <form onSubmit={formSubmit} id="input_form" encType="multipart/form-data">
              <div className="row ms-5">
                <div class="form-group row mt-3">
                  <label
                    for="staticEmail"
                    class="col-sm-2 col-form-label text-light "
                  >
                    Create Event
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control Frombtns"
                      value={title}
                      onChange={(e)=>{ setTitle(e.target.value) }}
                    />
                  </div>
                </div>

                <div class="form-group row mt-3">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-form-label text-light "
                  >
                    Description
                  </label>
                  <div class="col-sm-8">
                    <CKEditor
                      editor={ClassicEditor}
                      data={event.description}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setConvertedContent(data);
                        // console.log( { data } );
                      }}
                      onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                      }}
                      onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                      }}
                    />
                  </div>
                </div>


                {event.assign_judge?.map((judge) => (
                <div class="form-group row mt-3">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-form-label text-light "
                  ></label>
                  <div class="col-sm-4 mb-2">
                    <input
                      type="text"
                      class="form-control Frombtns"
                      value={judge.user?.first_name + ' ' + judge.user?.last_name}
                      disabled
                    />
                  </div>
                  <div class="col-sm-4 mb-2">

                  <input
                      type="text"
                      class="form-control Frombtns"
                      value={judge.user?.admin?.first_name}
                      disabled
                    />


                    {/* <Form.Select
                      aria-label="Default select example"
                      className="Frombtns"
                    >
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select> */}
                  </div>
                </div>
                ))}


                <div class="form-group row mt-3">
                  <label
                    for="staticEmail"
                    class="col-sm-2 col-form-label text-light "
                  >
                    Upload File
                  </label>

                  <div class="col-sm-4 mb-2">
                    <div className="row my-4">
                      <div className="col-md-2 text-white">
                        <img
                          src={file}
                          className="img-fluid avatar-img-src"
                          alt=""
                        />
                      </div>
                      <div className="col-md-10">
                        <input
                          type="file"
                          name="file"
                          id="file"
                          className="inputfile w-25"
                          onChange={(e) => handleChange(e.target.files)}
                        />
                        <label for="file">
                          <i class="fas fa-cloud-upload-alt"></i> Upload Banner
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4 mb-2">
                    <div className="row my-4">
                      <div className="col-md-2 text-white">
                        <img
                          src={fileVideo}
                          className="img-fluid avatar-img-src"
                          alt=""
                        />
                      </div>
                      <div className="col-md-10">
                        <input
                          type="file"
                          name="file"
                          id="setFile"
                          className="inputfile w-25"
                          onChange={(e) => handleVideoChange(e.target.files)}
                        />
                        <label for="setFile">
                          <i class="fas fa-cloud-upload-alt"></i> Upload Video
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-end mb-4">
                  <div className="col-md-3 text-left">
                      <button className="btn btn-warning mx-4" type="submit">Confirm</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEventAudition;
