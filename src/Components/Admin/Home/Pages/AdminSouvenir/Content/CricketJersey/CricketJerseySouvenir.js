import React from 'react'
import Fly from '../../../../../../../assets/images/Souvenir/unsplash_Z4RYz52ljts.png'
const CricketJerseySouvenir = () => {
return (
<div>
    <div className="row my-3">
        <div className="col-md-8 mb-4 ">
            <div className="card event-card2 shadow">
                <div className="card-body">
                    <h5 className="text-light mb-3">
                        Cricket jersey
                    </h5>
                    <p className="text-light">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.
                    </p>
                    <p className="text-light ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>

            <div className="card event-card2 shadow mt-3">
                <div className="card-body">

                </div>
            </div>

        </div>

        <div className="col-md-4">
            <img src={Fly} alt="Pineapple" className='img-fluid' />
        </div>
        
    </div>
</div>
)
}

export default CricketJerseySouvenir