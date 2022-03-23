import React, { useState, useEffect } from 'react';
import { Calendar } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import NewSchedule from '../NewSchedule';
import './EventScheduleDatePick.css';
import axios from "axios";
import swal from 'sweetalert';

const format = "YYYY-MM-DD";

const EventScheduleDatePick = () => {

    const [selectElement, setSelectElement] = useState(0);
    const [dates, setDates] = useState([]);
    const [newSchedule, setNewSchedule] = useState([])
    const [selectedSchedule, setSelectedSchedule] = useState([])
    const [pending,setPending]=useState(true);
   


    const handleRemoveClick = (date) => {


        const list = [...dates];
        const ar = list.filter(item => !(item === date));
        setDates(ar);

        // const list = [...dates];
        // list.splice(index, 1);
        // setDates(list);

        // console.log(dates);

       
        const scheduleList = [...newSchedule];
        const ar2 = scheduleList.filter(item => !(item === date));
        setNewSchedule(ar2)

        // schedule.splice(index, 1);
        // setNewSchedule(schedule);

        // console.log(schedule);
    }

    const handleNewSchedule = (index) => {
        
        if(!newSchedule.includes(dates[index])){
            setNewSchedule([...newSchedule, dates[index]])
        }
    }

 function handleCheck(event,day){
    setSelectElement(day);
setPending(event)
 }

 useEffect(() => {

    axios.get(`/api/admin/schedule`).then(res =>{
  
      if(res.status === 200)
      {
        
        setSelectedSchedule(res.data.schedule);
        // setDates(res.data.schedule)
      }
    });


    


  }, []);

  console.log('from database',dates);

    return (
        <>
            <h1 className="text-warning text-center ss-text my-4">Make SuperStar Schedule</h1>

            <div className="my-4 eventDatePicker d-flex justify-content-center">

                <Calendar
                //arrow={false}
                    value={dates}
                    onChange={setDates}
                    format="YYYY-MM-DD"
                    multiple
                    sort
                    //format={format}
                    // onChange={selected}
                    calendarPosition="bottom-center"
                    //plugins={[<DatePanel markFocused />]}
                />


                    {/* <DatePicker
                    multiple
                    sort
                    onFocusedDateChange={setFocusedDate}
                    onClose={() => setFocusedDate(undefined)}
                    plugins={[
                        <DatePanel markFocused focusedClassName="bg-red" />
                    ]}
                    mapDays={({ date, isSameDate }) => {
                        let props = {}
                        
                        if (!isSameDate(date, focusedDate)) return

                        props.style = { backgroundColor: "red" }
                        
                        return props
                    }}
                    /> */}

            </div>

            <div>
                <div className="d-flex flex-wrap my-5">
                    {dates.map((date, i) => {
                        return (
                            <div className="m-2">
                                <div className="cardContainer">
                                    <div className="face face1">
                                        <div key={i} className="eventDatePicked d-flex"  style={
                                                selectElement === date.day
                                                ? { background: "linear-gradient(90deg, rgb(233, 138, 29) 0%, rgb(153, 108, 50) 35%, rgb(202, 238, 245) 100%)" }
                                                : { background: "linear-gradient(90deg, rgb(144, 154, 236) 0%, rgb(101, 80, 197) 35%, rgb(18, 15, 167) 100%)" }
                                            }>
                                          
                                            {/* <div className="d-flex"> */}
                                            <div>
                                                {date.day} {date.month.shortName}, {date.year}
                                                {/* {date.format()} */}

                                            </div>
                                            <button className="removeDatePick ms-3" onClick={() => handleRemoveClick(date)} type="button"><i className="fas fa-times"></i></button>
                                            {/* </div> */}
                                        </div>
                                    </div>



                                    <div className="face face2">
                                        <div className="content">
                                            <h5 className="text-white"><i className="fas fa-calendar-week mx-1"></i> <span className="mx-3">Schedule</span></h5>
                                            <div className="d-flex">
                                                <div className="schedule-start-time">
                                                    4.00 pm
                                                </div>
                                                <span>To</span>
                                                <div className="schedule-end-time mx-2">
                                                    5.00 pm
                                                </div>
                                            </div>

                                            <button type="button" className="mt-2" onClick={() => handleNewSchedule(i)} >Create Schedule</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>


            {newSchedule.map((schedule, i) => {
                return (
                    <>  
                      <NewSchedule schedule={schedule} id={i} onClick={handleCheck}  />
                    </>
                )
            })}



        </>
    );
};

export default EventScheduleDatePick;