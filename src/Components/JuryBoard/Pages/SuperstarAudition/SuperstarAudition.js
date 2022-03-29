import React from 'react';
import CompleteAuditionSlider from '../../../Admin/Home/Pages/AdminAudition/CompleteAuditionSlider/CompleteAuditionSlider';
import CompleteAuditionSliderStar from './CompleteAuditionSliderStar/CompleteAuditionSliderStar';
import SuperstarAuditionNav from './SuperstarAuditionNav/SuperstarAuditionNav';

const SuperstarAudition = () => {
    return (
        <>
            <SuperstarAuditionNav />
            
            <div className="liveMeetupBorder my-5">
                <div className="d-flex px-4 pt-3">
                    <div className="faTrophy"><i class="fas fa-trophy"></i></div>
                    <h4 className="mx-3 text-white p-2">Complete Auditions</h4>
                </div>

                <div className="pb-3">
                    {/* <CompleteAuditionSlider /> */}
                    <CompleteAuditionSliderStar />
                </div>

            </div>
        </>
    );
};

export default SuperstarAudition;