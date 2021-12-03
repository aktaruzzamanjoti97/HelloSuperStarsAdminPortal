import React from 'react'
import Logo from '../../assets/images/helloSuperStar.png'
import './CSS/SuperStarHome.css'

function SuperStarHome () {
return (
<>
    <div className="Container SuperStarAuth justify-content-center aligns-items-center">

        <div className="Card row d-flex Super-body">
            <div className="superStar-Auth col-md-4"> <br /><br />
                <img src={Logo} alt="" className="Super-star-img" />
            </div>

            <div className="superStar-Auth col-md-6">
                <ul className="Ul-super">
                    <br /><br /> <br /><br />
                    <li className="li-super"><button className='btn-super-star'>Registration</button></li>
                    <li className="li-super"><button className='btn-super-star'>Log in</button></li>
                </ul>
            </div>
        </div>

    </div>
</>
)
}

export default SuperStarHome