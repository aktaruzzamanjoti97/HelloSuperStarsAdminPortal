import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React from "react";
import './RoundOneAppealModal.css'
import { Button, Modal } from "react-bootstrap";

const RoundOneAppealModal = (props) => {
  const [value, setValue] = React.useState(new Date());
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className='modalBg roundModalBody'>
        <div className="d-flex justify-content-end">
          <Button className="continue-button" onClick={props.onHide}><span className='fw-bold text-black'>X</span></Button>
        </div>
        <div className="d-flex justify-content-around videoDeadline my-3">
          <h5 className='text-light mt-2'>Video Submission Deadline</h5>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DatePicker
                disableFuture
                label="Select Deadline"
                openTo="year"
                views={["year", "month", "day"]}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          
          </LocalizationProvider>
        </div>
        <div className="row my-3">
          <div className="col-md-12 px-5 my-3 textareaColor">
            <textarea
              name=""
              placeholder="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, laborum incidunt dicta est adipisci consequatur dolorum neque cumque inventore molestias quia porro dolor minus exercitationem suscipit facilis facere doloremque maxime. Sapiente reprehenderit voluptate illo tenetur, totam ipsa dolorem cupiditate corrupti inventore, qui accusamus! Minus soluta neque iure doloribus placeat laboriosam."
              className="form-control input-gray border border-warning"
              id=""
            //   cols="30"
              rows="6"
            ></textarea>
          </div>
        </div>
        <div className="d-flex justify-content-end my-3">
          <button className="nameBg sendBtn px-5 py-3 rounded-3">Send</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RoundOneAppealModal;
