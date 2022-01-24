import React, { useState } from 'react';
import { Calendar } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import NewSchedule from '../NewSchedule';
import './EventScheduleDatePick.css';

const format = "MM/DD/YYYY";

const EventScheduleDatePick = () => {

    const [dates, setDates] = useState([]);
    const [newSchedule, setNewSchedule] = useState(false)

    console.log(dates);

    const handleRemoveClick = (index) => {
        const list = [...dates];
        list.splice(index, 1);
        console.log(list);
        setDates(list);
    }

    const handleNewSchedule = () => {
        setNewSchedule(true)
    }

    return (
        <>
            <h1 className="text-warning text-center ss-text my-4">Make SuperStar Schedule</h1>

            <div className="my-4 eventDatePicker d-flex justify-content-center">

                <Calendar
                    value={dates}
                    onChange={setDates}
                    multiple
                    sort
                    format={format}
                    // onChange={selected}
                    calendarPosition="bottom-center"
                    plugins={[<DatePanel />]}
                />



            </div>

            <div>
                <div className="d-flex flex-wrap my-5">
                    {dates.map((date, i) => {
                        return (
                            <div className="m-2">
                                <div className="cardContainer">
                                    <div className="face face1">
                                        <div key={i} className="eventDatePicked d-flex">
                                            {/* {console.log(date)} */}
                                            {/* <div className="d-flex"> */}
                                            <div>
                                                {date.day} {date.month.shortName}
                                                {console.log(i)}
                                            </div>
                                            <button className="removeDatePick ms-3" onClick={() => handleRemoveClick(i)} type="button"><i className="fas fa-times"></i></button>
                                            {/* </div> */}
                                        </div>
                                    </div>

                                    <div class="face face2">
                                        <div class="content">
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

                                            <button onClick={() => handleNewSchedule()} >Create Schedule</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>


            {dates.map((date, i) => {
                return (
                    <>
                        {
                            newSchedule ? (
                                <NewSchedule date={date} i={i} />
                            ) : null
                        }
                    </>
                )
            })}



        </>
    );
};

export default EventScheduleDatePick;