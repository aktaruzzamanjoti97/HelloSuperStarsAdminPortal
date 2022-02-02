import React from 'react'
import person from "../../../../assets/images/srabanti.jpg";

const StarUserPortal = () => {
return (
<>

    <div className="my-3 ">
        <div className="bg-dark TabUsers">
            <div className='row mx-2 '>

                <div className="col-md-6 mt-3">
                    <div className="container-Tab-User d-flex">
                        <img src={person} alt="" className="UserTabImg" />
                        <div className="UserTextTab1"></div>
                        <div className="UserTextTab">Sahib All Hasan</div>
                </div>
            </div>

            <div className="col-md-6 mt-3">
                <div className="container-Tab-User d-flex">
                    <img src={person} alt="" className="UserTabImg" />
                    <div className="UserTextTab1"></div>
                    <div className="UserTextTab">Tumpa </div>

                </div>
            </div>

            <div className="col-md-6 mt-3">
                <div className="container-Tab-User d-flex">
                    <img src={person} alt="" className="UserTabImg" />
                    <div className="UserTextTab1"></div>
                    <div className="UserTextTab">Sharna Shaha</div>

                </div>
            </div>

            <div className="col-md-6 mt-3">
                <div className="container-Tab-User d-flex">
                    <img src={person} alt="" className="UserTabImg" />
                    <div className="UserTextTab1"></div>
                    <div className="UserTextTab">Kajol Roy</div>

                </div>
            </div>
        </div>
        <br />

    </div>
    </div>
</>
)
}

export default StarUserPortal