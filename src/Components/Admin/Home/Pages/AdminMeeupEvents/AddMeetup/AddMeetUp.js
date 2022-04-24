import React, { useState, useEffect } from "react";
import { useHistory} from 'react-router-dom';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import MeetUpEventNave from '../MeetUpEventNave';
import './AddMeetUp.css';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import axios from "axios";
import swal from "sweetalert";
import EventLinkCreate from './EventLinkCreate';

const AddMeetUp = () => {
    const history = useHistory();
    const [starList, setStarList] = useState([]);
    const [imagedata, setImagedata] = useState("");
    const [videodata, setVideodata] = useState("");
    const [file, setFile] = useState("");
    const [modalShow, setModalShow] = useState("");

    const [meetupInput, setMeetup] = useState({
        event_name: "",
        event_link: "",
        star_id: '',
        date: '',
        start_time: "",
        end_time: "",
        venue: "",
        slots: ""
,        error_list: [],
      });

    const [activity, setActivity] = React.useState('');

    const handleChange = (event) => {
        setActivity(event.target.value);
    };

    const handleImageChange = (file) => {
        setFile(URL.createObjectURL(file[0]));
        setImagedata(file[0]);
      };
      const handleVideoChange = (file) => {
          console.log(file[0]);
        setVideodata(file[0]);
      };

    // Editor Funtionalities //
  const [convertedContent, setConvertedContent] = useState(null);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
    //console.log(convertedContent);
  };
  // End Editor Functionalies //

  

    function CustomInput(props) {
        return (
            <>
                <input hidden {...props} />
                <Editor {...props} />
            </>
        );
    }

    // Fetch Stars Added By Admin
    useEffect(() => {
        setActivity('Online');

        axios.get(`/api/admin/star_list`).then((res) => {
        if (res.status === 200) {
            setStarList(res.data.category);
            console.log(res.data.category);
        }
        });
    }, []);


    const handleInput = (e) => {
        e.persist();
        setMeetup({ ...meetupInput, [e.target.name]: e.target.value });
      };


      const meetupSubmit = (e) => {
        e.preventDefault();
    
        const fData = new FormData();
    
        fData.append("banner", imagedata);
        fData.append("video", videodata);
        fData.append("title", meetupInput.event_name);
        fData.append("event_link", meetupInput.event_link);
        fData.append("meetup_type", activity);
        fData.append("star_id", meetupInput.star_id);
        fData.append("date", meetupInput.date);
        fData.append("start_time", meetupInput.start_time);
        fData.append("end_time", meetupInput.end_time);
        fData.append("description", convertedContent);
        fData.append("venue", meetupInput.venue);
        fData.append("slots", meetupInput.slots);
        fData.append("fee", meetupInput.fee);

        console.log(meetupInput.event_name);
    
    
        axios.get("/sanctum/csrf-cookie").then((response) => {
          axios.post(`api/admin/add_meetup`, fData).then((res) => {
            if (res.data.status === 200) {
              
              
              swal("Success", res.data.message, "success");
              history.push(`/superstar-admin/meetup-events/pending`);
              
            } else {
              //setModalShow(true);
              setMeetup({
                ...meetupInput,
                error_list: res.data.validation_errors,
              });
            }
          });
        });
    
        
      };
    

    return (
        <>
            <div className="AS">
                <MeetUpEventNave />

                <div className="greetingsFormBorder">
                    <div className="greetingsPadding addMeetUpPadding">
                        <div className="d-flex">
                            <div className="addIconGreetings">
                                <i style={{ color: '#ffc107' }} class="far fa-plus-square mx-2"></i>
                            </div>
                            <h3 className="text-warning text-bold">Create Meetup</h3>
                        </div>
                        <form action="" onSubmit={meetupSubmit} id="input_form" encType="multipart/form-data">

                        <div className="row my-4">
                            <div className="col-md-2 text-white">
                                <p><big>Select Super Star</big></p>
                            </div>
                                 <div className="col-md-10">
                                            <select
                                            onChange={handleInput}
                                            name="star_id"
                                            className="form-control reply-control input-overlay"
                                            value={meetupInput.star_id}
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




                            <div className="row my-4">
                                <div className="d-flex col-md-6 text-white eventType">

                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className=""><big>Event type</big></p>
                                        </div>
                                        <div className="col-md-6">
                                            <Box className="mx-3 selectActivity" sx={{ minWidth: 300 }}>
                                                <FormControl fullWidth>
                                                
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={activity}
                                                        label="Age"
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value='Online'>Online</MenuItem>
                                                        <MenuItem value='Offline'>Offline</MenuItem>

                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </div>
                                    </div>

                                </div>


                                <div className="col-md-6 px-3">
                                    <div className="d-flex">
                                        <div className="col-md-2 text-white">
                                            <p><big>Event name</big></p>
                                        </div>
                                        <input className="form-control input-gray" type="text" onChange={handleInput} name="event_name" value={meetupInput.event_name} />
                                    </div>
                                </div>

                            </div>


                            {activity === "Online" ? (
                                <>
                                  <div className='row w-50 mx-auto bg-warning createLink' onClick={() => setModalShow(true)}>
                                  <h3 className='text-center' > Click Here to generate Meetup LiveStream Link</h3>
                              </div>
                              <EventLinkCreate
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                              </>
                            ) : null }

                            {activity === "Online" ? (
                                <>
                                <div className="row w-50 mx-auto bg-warning pasteLink">
                                        <input className="form-control bg-dark text-white" type="text" onChange={handleInput} name="event_link" value={meetupInput.event_link} placeholder="Paste Generated Meetup LiveStream Link Here" />
                                    </div>
                              </>
                            ) : null }
                            

                            <div className="row my-4">
                                <div className="col-md-1 text-white">
                                    <p><big>Description</big></p>
                                </div>
                                <div className="col-md-11">
                                    {/* <textarea className="form-control input-gray me-4" type="text" /> */}
                                    <Editor
                                        editorState={editorState}
                                        onEditorStateChange={handleEditorChange}
                                        wrapperClassName="wrapper-class"
                                        editorClassName="editor-class"
                                        toolbarClassName="toolbar-class"
                                    />
                                </div>
                            </div>

                            <div className="row my-4">
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <p className="text-white"><big>Date & Time</big></p>
                                        </div>
                                        <div className="col-md-6">
                                            <input className="form-control input-gray text-white" type="date" onChange={handleInput} name="date" value={meetupInput.date}/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <p className="text-white"><big>From</big></p>
                                                </div>
                                                <div className="col-md-6">
                                                    <input className="form-control input-gray text-white" type="time" onChange={handleInput} name="start_time" value={meetupInput.start_time}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <p className="text-white"><big>To</big></p>
                                                </div>
                                                <div className="col-md-6">
                                                    <input className="form-control input-gray text-white" type="time" onChange={handleInput} name="end_time" value={meetupInput.end_time}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {
                                activity === 'Online' ? null : (
                                    <>
                                        <div className="row my-4">
                                            <div className="col-md-1 text-white">
                                                <p><big>Venue</big></p>
                                            </div>
                                            <div className="col-md-11">
                                                <input className="form-control input-gray me-4" type="text" onChange={handleInput} name="venue" value={meetupInput.venue}/>
                                            </div>
                                        </div>

                                        <div className="row my-4">
                                            <div className="col-md-1 text-white">
                                                <p><big>Slots</big></p>
                                            </div>
                                            <div className="col-md-2">
                                                {/* <textarea className="form-control input-gray me-4" type="text" /> */}
                                                <input className="form-control input-gray" type="number" onChange={handleInput} name="slots" value={meetupInput.slots}/>
                                            </div>
                                        </div>
                                    </>
                                )
                            }

                            {
                                activity === 'Online' ? (
                                    <>
                                        <div className="row my-4">
                                            <div className="col-md-2 text-white">
                                                <p><big>Upload Banner</big></p>
                                            </div>
                                            <div className="col-md-10">
                                            <img src={file}  className="img-fluid avatar-img-src" alt=""/>
                                            <input type="file" className="btn" onChange={(e) => handleImageChange(e.target.files)} id="image" name="image"/>

                                            </div>
                                        </div>
                                        <div className="row my-4">
                                            <div className="col-md-2 text-white">
                                                <p><big>Upload Video</big></p>
                                            </div>
                                            <div className="col-md-10">
                                                {/* <label for="video"><i class="fas fa-cloud-upload-alt"></i></label> */}
                                            <input type="file" className="btn" onChange={(e) => handleVideoChange(e.target.files)} id="video" name="video"/>
                                            </div>
                                        </div>
                                    </>
                                ) :
                                    (
                                        <div className="row my-4">
                                            <div className="col-md-4">
                                                <div className="row">
                                                    <div className="col-md-4 text-white">
                                                        <p><big>Upload Banner</big></p>
                                                    </div>
                                                    <div className="col-md-5">
                                                        {/* <input type="file" name="file" id="file" className="inputfile" />
                                                        <label for="file"><i class="fas fa-cloud-upload-alt"></i> Upload</label> */}

                                                        <img src={file}  className="img-fluid avatar-img-src" alt=""/>
                                                        <input type="file" className="btn" onChange={(e) => handleImageChange(e.target.files)} id="image" name="image"/>

                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-4">
                                                <div className="row">
                                                    <div className="col-md-4 text-white">
                                                        <p><big>Upload Video</big></p>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <input type="file" name="file" id="file" className="inputfile" />
                                                        <label for="file"><i class="fas fa-cloud-upload-alt"></i> Upload</label>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    )
                            }


                            <div className="row my-4">
                                            <div className="col-md-1 text-white">
                                                <p><big>Fee</big></p>
                                            </div>
                                            <div className="col-md-2">
                                                {/* <textarea className="form-control input-gray me-4" type="text" /> */}
                                                <input className="form-control input-gray" type="number" onChange={handleInput} name="fee" value={meetupInput.fee}/>
                                            </div>
                                        </div>






                            <div className="my-3">
                                {/* <Link to="/superstar-admin/meetup-events">
                                    <button className="btn btn-warning save-greetings-button py-2"><big><b>Confirm</b></big></button>
                                </Link> */}
                                <button type="submit" className="btn btn-warning save-greetings-button py-2"><big><b>Confirm</b></big></button>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AddMeetUp