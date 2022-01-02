import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import { Link } from 'react-router-dom';
import MeetUpEventNave from '../MeetUpEventNave';
import './AddMeetUp.css';
import { Editor } from "react-draft-wysiwyg";
import Form from "react-vanilla-form";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const AddMeetUp = () => {

    const [activity, setActivity] = React.useState('');

    const handleChange = (event) => {
        setActivity(event.target.value);
    };

    function CustomInput(props) {
        return (
            <>
                <input hidden {...props} />
                <Editor {...props} />
            </>
        );
    }

    return (
        <>
            <div className="AS">
                {/* <MeetUpEventNave /> */}

                <div className="greetingsFormBorder">
                    <div className="greetingsPadding addMeetUpPadding">
                        <div className="d-flex">
                            <div className="addIconGreetings">
                                <i style={{ color: '#ffc107' }} class="far fa-plus-square mx-2"></i>
                            </div>
                            <h3 className="text-warning text-bold">Create Meetup</h3>
                        </div>
                        <form action="">
                            <div className="row my-4">
                                <div className="d-flex col-md-5 text-white eventType">
                                    {/* <label className='eventType' for="selectOnlineOffline"><big>Event Type</big></label>
                                    <select className="input-gray" name="online-offline" id="selectOnlineOffline">
                                        <option value="online">Online</option>
                                        <option value="offline">Offline</option>
                                    </select> */}

                                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select> */}

                                    <div className="row">
                                        <div className="col-md-3">
                                            <p className=""><big>Event type</big></p>
                                        </div>
                                        <div className="col-md-6">
                                            <Box className="mx-3 selectActivity" sx={{ minWidth: 300 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label text-white">Set Activity</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={activity}
                                                        label="Age"
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={10}>Online</MenuItem>
                                                        <MenuItem value={20}>Offline</MenuItem>

                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </div>
                                    </div>







                                </div>
                                <div className="col-md-7 px-3">
                                    <div className="d-flex">
                                        <div className="col-md-2 text-white">
                                            <p><big>Event name</big></p>
                                        </div>
                                        <input className="form-control input-gray" type="text" />
                                    </div>



                                </div>
                            </div>

                            <div className="row my-4">
                                <div className="col-md-1 text-white">
                                    <p><big>Description</big></p>
                                </div>
                                <div className="col-md-11">
                                    {/* <textarea className="form-control input-gray me-4" type="text" /> */}
                                    <Form
                                        data={{ editor: "" }}
                                        onChange={(data, errors) => {
                                            try {
                                                console.log(draftToHtml(data.editor));
                                            } catch (e) {
                                                console.error(e);
                                            }
                                        }}
                                    >
                                        <CustomInput name="editor" />

                                    </Form>
                                </div>
                            </div>

                            <div className="row my-4">
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <p className="text-white"><big>Date & Time</big></p>
                                        </div>
                                        <div className="col-md-6">
                                            <input className="form-control input-gray text-white" type="date" />
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
                                                    <input className="form-control input-gray text-white" type="time" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <p className="text-white"><big>To</big></p>
                                                </div>
                                                <div className="col-md-6">
                                                    <input className="form-control input-gray text-white" type="time" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {
                                activity === 10 ? null : (
                                    <>
                                        <div className="row my-4">
                                            <div className="col-md-1 text-white">
                                                <p><big>Venue</big></p>
                                            </div>
                                            <div className="col-md-11">
                                                <input className="form-control input-gray me-4" type="text" />
                                            </div>
                                        </div>

                                        <div className="row my-4">
                                            <div className="col-md-1 text-white">
                                                <p><big>Slots</big></p>
                                            </div>
                                            <div className="col-md-2">
                                                {/* <textarea className="form-control input-gray me-4" type="text" /> */}
                                                <input className="form-control input-gray" type="number" />
                                            </div>
                                        </div>
                                    </>
                                )
                            }

                            {
                                activity === 10 ? (
                                    <>
                                        <div className="row my-4">
                                            <div className="col-md-2 text-white">
                                                <p><big>Upload Banner</big></p>
                                            </div>
                                            <div className="col-md-10">
                                                <input type="file" name="file" id="file" className="inputfile" />
                                                <label for="file"><i class="fas fa-cloud-upload-alt"></i> Upload</label>

                                            </div>
                                        </div>
                                        <div className="row my-4">
                                            <div className="col-md-2 text-white">
                                                <p><big>Upload Video</big></p>
                                            </div>
                                            <div className="col-md-10">
                                                <input type="file" name="file" id="file" className="inputfile" />
                                                <label for="file"><i class="fas fa-cloud-upload-alt"></i> Upload</label>
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
                                                        <input type="file" name="file" id="file" className="inputfile" />
                                                        <label for="file"><i class="fas fa-cloud-upload-alt"></i> Upload</label>

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






                            <div className="my-3">
                                <Link to="/superstar-admin/greetings/details">
                                    <button className="btn btn-warning save-greetings-button py-2"><big><b>Confirm</b></big></button>
                                </Link>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AddMeetUp