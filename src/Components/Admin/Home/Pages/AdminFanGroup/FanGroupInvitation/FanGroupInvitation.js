import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import invitationImg from "../../../../../../assets/images/iconFan/invitation2.png";
import starImg from "../../../../../../assets/images/starImg/shah-rukh-khan-01.webp";
import "./FanGroupInvitation.css";

function FanGroupInvitationModal(props) {
  const [convertedContent, setConvertedContent] = useState("");

  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="modalBg roundModalBody">
        <div className="d-flex justify-content-end">
          <Button className="continue-button" onClick={props.onHide}>
            <span className="fw-bold text-black">X</span>
          </Button>
        </div>
        <div className="m-2">
          {/* <div className="greetingsFormBorder"> */}
          <div className="greetingsPadding ">
            <form>
              <div className="row my-4">
                <div className="col-md-3">
                  <p className="text-white">Group Name</p>
                </div>
                <div className="col-md-8">
                  <input className="form-control input-gray" type="text" />
                </div>
              </div>

              <div className="row my-4">
                <div className="col-md-3 text-white">
                  <p>Group Motive</p>
                </div>

                <div className="col-md-9 row">
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
                <div className="col-md-3">
                  <p className="text-white">Time Length</p>
                </div>
                <div className="col-md-9 row">
                  <div className="col-md-5 timeLengthPicker">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Stack spacing={3}>
                        <MobileDatePicker
                          label="Start Date"
                          inputFormat="MM/dd/yyyy"
                          value={value}
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider>
                  </div>
                  <div className="col-md-1 d-flex justify-content-center">
                    <span className="fw-bold text-light mt-3">To</span>
                  </div>
                  <div className="col-md-5 timeLengthPicker">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Stack spacing={3}>
                        <MobileDatePicker
                          label="End Date"
                          inputFormat="MM/dd/yyyy"
                          value={value}
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider>
                  </div>
                </div>
              </div>

              <div className="row my-4">
                <div className="col-md-3">
                  <p className="text-white">Members Limit</p>
                </div>
                <div className="col-md-9 row">
                  <div className="col-md-4">
                    <input type="number" className="input-gray form-control" />
                  </div>
                  <div className="col-md-1 d-flex justify-content-center">
                    <span className="fw-bold text-light mt-1">To</span>
                  </div>
                  <div className="col-md-4">
                    <input type="number" className="input-gray form-control" />
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center py-4 fanBtn">
                <button className="btn btnDlt text-warning fw-bold">
                  Dismiss
                </button>
                <button className="btn btnDlt text-warning fw-bold">
                  Save
                </button>
                <button className="btn actDlt text-dark fw-bold">
                  Save & Accept
                </button>
              </div>
            </form>
          </div>
          {/* </div> */}
        </div>
      </Modal.Body>
    </Modal>
  );
}

const FanGroupInvitation = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="container">
        <div className="d-flex my-3">
          <img width="36px" src={invitationImg} alt="" />
          <h3 className="text-light mx-2">Fan Group Invitation</h3>
        </div>

        <div className="invitationBg d-flex justify-content-center align-items-center">
          <div>
            <h1 className="invitationHeader text-center fw-bold py-4">
              Invitation
            </h1>

            <div className="">
              <div className="d-flex justify-content-center">
                <img className="img-fluid starImg me-4" src={starImg} alt="" />
                <div className="vertical-line"></div>
                <div className="ms-4">
                  <p className="shahrukhTxt text-light">Shahrukh Khan</p>
                  <p className="bollywoodTxt text-light">Bollywood</p>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                {/* <div className="col-md-3"></div> */}
                <div className="g-5 starDummy">
                  <div className="text-light">
                    <h3 className="fw-bold">Shahrukh fanbase VS Star Name</h3>
                    <p className="loremDammy">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aspernatur sunt dolore nemo tenetur, cumque sequi itaque
                      voluptatibus? Eveniet, molestias corrupti maiores, dolorum
                      culpa, similique a ea quo eos error ipsum?
                    </p>
                  </div>
                </div>
                {/* <div className="col-md-3"></div> */}
              </div>
              <div className="text-center my-4 px-4">
                <p className="loremDammy">
                  Starts at <span>12 Feb 2022</span>{" "}
                  <span className="vertical-line2 mx-3"></span> Ends at{" "}
                  <span>12 April 2022</span>
                </p>
              </div>

              <div className="d-flex justify-content-center py-4 fanBtn">
                <button className="btn btnDlt text-warning fw-bold">
                  Ignore
                </button>
                <button
                  onClick={() => setModalShow(true)}
                  className="btn btnDlt text-warning fw-bold"
                >
                  Edit
                </button>
                <button className="btn actDlt text-dark fw-bold">Accept</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FanGroupInvitationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default FanGroupInvitation;
