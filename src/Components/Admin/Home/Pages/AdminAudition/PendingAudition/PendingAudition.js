import React from 'react';
import PendingAuditionSlider from '../PendingAuditionSlider/PendingAuditionSlider';

const PendingAudition = () => {
    return (
        <div className="liveMeetupBorder my-5">
            <div className="d-flex px-4 pt-3">
                <div className="faTrophy"><i class="fas fa-trophy"></i></div>
                <h4 className="mx-3 text-white p-2">Complete Auditions</h4>
            </div>

            <div className="pb-3">
                <PendingAuditionSlider />
            </div>

        </div>
    );
};

export default PendingAudition;