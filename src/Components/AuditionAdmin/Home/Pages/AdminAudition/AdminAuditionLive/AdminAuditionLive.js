import React from 'react';
import AdminAuditionSlider from '../AdminAuditionLiveSlider/AdminAuditionSlider';


const AdminAuditionLive = () => {
    return (
        <div className="liveMeetupBorder my-5">
            <div className="d-flex px-4 pt-3">
                <div className="faTrophy"><i class="fas fa-trophy"></i></div>
                <h4 className="mx-3 text-white p-2">Live Auditions</h4>
            </div>

            <div className="pb-3">
                {/* <PendingAuditionSlider /> */}
                <AdminAuditionSlider />
            </div>

        </div>
    );
};

export default AdminAuditionLive;