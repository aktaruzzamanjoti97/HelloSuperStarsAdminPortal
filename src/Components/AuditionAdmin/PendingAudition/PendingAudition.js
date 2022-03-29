import React from 'react';
import PendingAuditionSlider from '../PendingAuditionSlider/PendingAuditionSlider';
import { useHistory } from "react-router-dom";
import AdminAuditionNav from '../AdminAuditionNav/AdminAuditionNav';


const PendingAudition = () => {
   

    return (
        <>
        <AdminAuditionNav/>
        <div className="liveMeetupBorder my-5">
            <div className="d-flex px-4 pt-3">
                <div className="faTrophy"><i class="fas fa-trophy"></i></div>
                <h4 className="mx-3 text-white p-2">Pending Auditions</h4>
            </div>

            <div className="pb-3">
                <PendingAuditionSlider />
            </div>

        </div>
    </>
    );
};

export default PendingAudition;