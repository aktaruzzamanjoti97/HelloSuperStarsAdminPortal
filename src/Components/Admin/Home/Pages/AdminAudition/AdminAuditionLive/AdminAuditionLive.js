import React from 'react';
import AdminAuditionSlider from '../AdminAuditionLiveSlider/AdminAuditionSlider';
import AdminAuditionNav from '../AdminAuditionNav/AdminAuditionNav';
import liveAuditionIcon from '../../../../../../assets/images/liveAudition.png'

const AdminAuditionLive = () => {
    return (
        <>
        <AdminAuditionNav/>
        <div className="liveMeetupBorder my-5">
            <div className="d-flex px-4 pt-3">
                <div className="faTrophy"><img src={liveAuditionIcon} alt="" /></div>
                <h4 className="mx-3 text-white p-2 mt-1">Live Auditions</h4>
            </div>

            <div className="pb-3">
                {/* <PendingAuditionSlider /> */}
                <AdminAuditionSlider />
            </div>

        </div>
        </>
    );
};

export default AdminAuditionLive;