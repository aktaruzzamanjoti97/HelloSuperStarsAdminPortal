import React from 'react';
// import CompletedEventSliders from '../AdminMeeupEvents/LiveMeetUp/CompletedEventSliders/CompletedEventSliders';

import AdminAuditionNav from './AdminAuditionNav/AdminAuditionNav';
import CompleteAuditionSlider from './CompleteAuditionSlider/CompleteAuditionSlider';

const AdminAudition2 = () => {
    return (
        <>
            <AdminAuditionNav />

            <div className="liveMeetupBorder my-5">
                <div className="d-flex px-4 pt-3">
                    <div className="faTrophy"><i class="fas fa-trophy"></i></div>
                    <h4 className="mx-3 text-white p-2">Complete Auditions</h4>
                </div>

                <div className="pb-3">
                    <CompleteAuditionSlider />
                </div>

            </div>
        </>
    );
};

export default AdminAudition2;