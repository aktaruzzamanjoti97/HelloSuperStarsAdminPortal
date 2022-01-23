import React, { useState } from 'react';
import { Calendar } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import './EventScheduleDatePick.css';

const format = "MM/DD/YYYY";

const EventScheduleDatePick = () => {

    const [dates, setDates] = useState([]);

    console.log(dates);

    const handleRemoveClick = (index) => {
        // console.log(index);
        const list = [...dates];
        list.splice(index, 1);
        console.log(list);
        setDates(list);
    }

    return (
        <>
            <h1 className="text-warning text-center ss-text my-4">Select Schedule Dates From Here</h1>

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

                        )
                    }
                    )}
                </div>

                {/* <ul>
                    {dates.map((date, index) => (
                        <li key={index}>{date.format()}</li>
                    ))}
                </ul> */}
            </div>
        </>
    );
};

export default EventScheduleDatePick;