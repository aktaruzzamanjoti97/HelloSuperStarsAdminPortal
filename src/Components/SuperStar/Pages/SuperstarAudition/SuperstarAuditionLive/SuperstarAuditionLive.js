import React from 'react';
import LiveAuditionSliderStar from '../LiveAuditionSliderStar/LiveAuditionSliderStar';
import SuperstarAuditionNav from '../SuperstarAuditionNav/SuperstarAuditionNav';

const SuperstarAuditionLive = () => {
    
    return (
        <>
        <SuperstarAuditionNav />
        
        <div className="liveMeetupBorder my-5">
            <div className="d-flex px-4 pt-3">
                <div className="faTrophy"><i class="fas fa-trophy"></i></div>
                <h4 className="mx-3 text-white p-2">Pending Auditions</h4>
            </div>

            <div className="pb-3">
                {/* <CompleteAuditionSlider /> */}
                <LiveAuditionSliderStar/>
            </div>

        </div>
    </>
    );
};

export default SuperstarAuditionLive;