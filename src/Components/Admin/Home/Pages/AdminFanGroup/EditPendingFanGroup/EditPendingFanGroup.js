import { MobileDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { convertToHTML } from "draft-convert";
import { EditorState } from "draft-js";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";
import swal from 'sweetalert';

const EditPendingFanGroup = () => {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));
  const [dateValue, setDateValue] = useState(new Date());
  const [endDateValue, setEndDateValue] = useState(new Date());

  let {slug} = useParams();
  const history = useHistory();
  
  console.log('slug is ', slug);

  const [file, setFile] = useState("");
  // const [imagedata, setImagedata] = useState("");

  // const handleImageChange = (file) => {
  //   console.log("This is image file", file[0]);
  //   // setFile(URL.createObjectURL(file[0]));
  //   setImagedata(file[0]);
  // };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [convertedContent, setConvertedContent] = useState(null);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const handleStartDateChange = (newValue) => {
    setDateValue(newValue);
    console.log('Start Date', dateValue)
  };
  const handleEndDateChange = (newValue) => {
    setEndDateValue(newValue);
    console.log('End Date', endDateValue)
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
    console.log(convertedContent);
  };
  
  const [fanDetails, setFanDetails] = useState([]);
  const [group_name, setGroupName] = useState('');
  const [min_member, setMinMember] = useState('');
  const [max_member, setMaxMember] = useState('');
  const [banner, setBanner] = useState('');

  console.log('group_name ', group_name);
  console.log('slug', banner);

  useEffect(() => {
    axios.get(`/api/admin/fan/group/show/${slug}`).then((res) => {
      if (res.status === 200) {
        setFanDetails(res.data.fanDetails);
        setConvertedContent(res.data.fanDetails.description);
        setDateValue(res.data.fanDetails.start_date);
        setEndDateValue(res.data.fanDetails.end_date);
        setGroupName(res.data.fanDetails.group_name);
        setMinMember(res.data.fanDetails.min_member);
        setMaxMember(res.data.fanDetails.max_member);
      }
    });
  }, [slug]);
  
  const updateFanGroup = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('group_name', group_name);
    formData.append('description', convertedContent);
    // formData.append('start_date', dateValue);
    // formData.append('end_date', endDateValue);
    formData.append('start_date', moment(dateValue).format("yyyy-MM-DD HH:mm:ss"))
    formData.append('end_date', moment(endDateValue).format("yyyy-MM-DD HH:mm:ss"))
    formData.append('min_member', min_member);
    formData.append('max_member', max_member);
    formData.append('banner', banner);



    axios.post(`/api/admin/fan/group/update/${slug}`, formData).then(res => {
      if (res.data.status === 200) {
        console.log('Done');
        // setTitle('')
        // setUnitprice('')
        // setItems('')
        // setKeywords('')

        swal("Welcome", res.data.message, "success");
        history.push('/superstar-admin/fan-group');
        
      }
    });
  }

  return (
    <div className="AS m-3">
      <div className="greetingsFormBorder">
        <div className="greetingsPadding addMeetUpPadding">
          <div className="d-flex">
            <div className="addIconGreetings">
              <i
                style={{ color: "#ffc107" }}
                class="far fa-plus-square mx-2"
              ></i>
            </div>
            <h3 className="text-warning text-bold">Edit Fan Group ({ fanDetails.group_name })</h3>
          </div>

          <form onSubmit={updateFanGroup}>
            <div className="row my-4">
              <div className="col-md-2">
                <p className="text-white">Group Name</p>
              </div>
              <div className="col-md-6">
                <input className="form-control input-gray" type="text" value={group_name} onChange={(event)=>{ setGroupName(event.target.value) }}/>
              </div>
            </div>

            <div className="row my-4">
              <div className="col-md-2 text-white">
                <p>Group Motive</p>
              </div>

              <div className="col-md-10">
                <CKEditor
                  data={convertedContent}
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    setConvertedContent(editor.getData());
                  }}
                />
              </div>
            </div>

            <div className="row my-4">
              <div className="col-md-2">
                <p className="text-white">Select Date</p>
              </div>
              <div className="col-md-9 row">
                <div className="col-md-3 timeLengthPicker">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <MobileDatePicker
                        label="Start Date"
                        inputFormat="MM/dd/yyyy"
                        value={dateValue}
                        onChange={handleStartDateChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </div>
                <div className="col-md-1 d-flex justify-content-center"><span className='fw-bold text-light mt-3'>To</span></div>
                <div className="col-md-3 timeLengthPicker">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <MobileDatePicker
                        label="End Date"
                        inputFormat="MM/dd/yyyy"
                        value={endDateValue}
                        onChange={handleEndDateChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </div>

              </div>
            </div>

            

            <div className="row my-4">
              <div className="col-md-2 text-white">
                <p>Members Limit</p>
              </div>

              <div className="col-md-5 row">
                <div className="col-md-5">
                  <input type="number" className="form-control input-gray" value={min_member} onChange={(event)=>{ setMinMember(event.target.value) }} />
                </div>
                <div
                  className="col-md-1 text-light
                                "
                >
                  To
                </div>
                <div className="col-md-5">
                  <input type="number" className="form-control input-gray" value={max_member} onChange={(event)=>{ setMaxMember(event.target.value) }} />
                </div>
              </div>
            </div>
{/* 
            <div className="row my-4">
              <div className="col-md-2">
                <p className="text-white">My Star</p>
              </div>
              <div className="col-md-6 input-graySelect">
                <select
                  className="form-select form-control input-gray text-light"
                  aria-label="Default select example"
                >
                  <option selected>Shahrukh Khan</option>
                  <option value="1">Shahrukh Khan</option>
                  <option value="2">Salman Khan</option>
                  <option value="3">Amir Khan</option>
                </select>
              </div>
            </div> */}

            {/* <div className="row my-4">
              <div className="col-md-2">
                <p className="text-white">Invite Star Admin</p>
              </div>
              <div className="col-md-6 input-graySelect">
                <select
                  className="form-select form-control input-gray text-light"
                  aria-label="Default select example"
                >
                  <option selected>Shahrukh Khan</option>
                  <option value="1">Shahrukh Khan</option>
                  <option value="2">Salman Khan</option>
                  <option value="3">Amir Khan</option>
                </select>
              </div>
            </div> */}

            {/* <div className="row my-4">
              <div className="col-md-2">
                <p className="text-white">Invite Star</p>
              </div>
              <div className="col-md-6 input-graySelect">
                <select
                  className="form-select form-control input-gray text-light"
                  aria-label="Default select example"
                >
                  <option selected>Nawazuddin Siddique</option>
                  <option value="1">Shahrukh Khan</option>
                  <option value="2">Salman Khan</option>
                  <option value="3">Amir Khan</option>
                </select>
              </div>
            </div> */}

            <div className="row my-4">
              <div className="col-md-2">
                <p className="text-white">Upload Banner</p>
              </div>
              <div className="col-md-3">
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="inputfile"  onChange={(event)=>{ setBanner(event.target.files[0]) }}
                />
                <label for="file">
                  <i class="fas fa-cloud-upload-alt"></i> Upload
                </label>
              </div>
              <div className="col-md-3">
                <img src={`http://localhost:8000/${fanDetails.banner}`} alt="" style={{ height: "80px", width: "180px", border: "3px solid #5ff711", borderRadius: "10px" }} />

              </div>
            </div>

            <div className="mt-3">
              <button
                className="btn btn-warning save-greetings-button py-2"
                type="submit"
              >
                <big>
                  <b>Confirm</b>
                </big>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPendingFanGroup;
