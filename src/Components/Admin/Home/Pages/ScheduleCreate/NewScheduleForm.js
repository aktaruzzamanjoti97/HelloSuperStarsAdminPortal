import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewSchedule.css'
import axios from "axios";
import swal from 'sweetalert';


const NewScheduleForm = ({schedule}) => {

    //console.log('sonet', schedule);


const [inputFieldList, setInputFieldList] = useState([
    { event_type: '', from: '', to: '', date: schedule.format()},
])


const handleChangeInput = (index, event) => {
    const values = [...inputFieldList];
    values[index][event.target.name] = event.target.value;
    setInputFieldList(values);
}

// const handleSubmit = (e) =>
// {
//     e.preventDefault();
//     console.log("InputFields", inputFieldList);
//     console.log(schedule.format());
// }

const handleSubmit = (e) => {
    e.preventDefault();


    // const fData = new FormData();

    // fData.append('event_type', inputFieldList.event_type);
    // fData.append('from[]', inputFieldList.from);



    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`/api/admin/add_schedule`, inputFieldList).then(res => {
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                console.log(res.data.result);
            }
            else{
                setInputFieldList({ ...inputFieldList,error_list: res.data.validation_errors });
            }
        });
    });      
}

const handleAddClick = (index) => {
    setInputFieldList([...inputFieldList, { event_type: '', from: '', to: '', date: schedule.format() }]);
}


const handleRemoveClick = (index) => {
const fieldList = [...inputFieldList];
fieldList.splice(index, 1);
setInputFieldList(fieldList);
}

return (
<>

<form className="row" onSubmit={handleSubmit}>

    {
    inputFieldList.map((inputField, i) => {
    return (
    <>
                <div className="col-md-4">
                            <div className=" mb-2 text-black">
                                <div className="d-flex">
                                    <h5 className="mt-2 text-warning col-md-3 Width-Ms">Event Type</h5>
                                    <select className='col-md-9 ScheduleCreateBg' name="event_type" onChange={event => handleChangeInput(i, event)} value={inputField.event_type} >
                                        <option value="livechat">Live Chat</option>
                                        <option value="learning">Learning Session</option>
                                        <option value="meetup">Meetup Event</option>
                                    </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                            <div className=" mb-2 text-black">
                                <div className="d-flex">
                                    <h5 className="mt-2 text-warning col-md-3 Width-Ms">From</h5>
                                    <input className='col-md-9 ScheduleCreateBg' type="time" name='from' onChange={event => handleChangeInput(i, event)} value={inputField.from} />
                                </div>
                            </div>
                    </div>



                    <div className="col-md-3">
                            <div className=" mb-2 text-black">
                                <div className="d-flex">
                                    <h5 className="mt-2 text-warning col-md-3 Width-Ms">To</h5>
                                    <input className='col-md-9 ScheduleCreateBg' type="time" name='to' onChange={event => handleChangeInput(i, event)} value={inputField.to} />
                                </div>
                            </div>
                    </div>


                    <div className="col-md-2">
                            <div className=" mb-2 text-black">
                                <div className="d-flex">
                                <button onClick={()=> handleRemoveClick(i)} className="btn btn-danger px-4 mx-4"><i class="fas fa-trash-alt"></i></button>
                                </div>
                            </div>
                    </div>




                    
 
    </>
    )

    })
    }


    <div className="d-flex mt-4 mb-5 pb-4 justify-content-center">
        <button type="submit" onClick={handleSubmit} className="btn btn-primary  bntTSC">Save</button>
        <button onClick={()=> handleAddClick()} type="button" className="btn btn-success mx-3 bntTSC "><i class="fas fa-plus"></i> &nbsp;New Schedule</button>
    </div>

    </form>

    

</>

);
};

export default NewScheduleForm;