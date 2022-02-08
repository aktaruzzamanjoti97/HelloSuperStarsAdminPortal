import React from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import LearningSessionNave from '../LearningSessionNave';
import ScheduleLearn from './Content/ScheduleLearn';

const LearningAddSession = () => {

    return (
        <div className="AS ">
            <LearningSessionNave/>

            <ScheduleLearn/>

        </div>
    );
};

export default LearningAddSession;

