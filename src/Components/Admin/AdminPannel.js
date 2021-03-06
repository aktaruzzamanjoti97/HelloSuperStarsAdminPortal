import React from 'react'
import Logo from '../../assets/images/helloSuperStar.png'
import { Link} from 'react-router-dom'

function AdminPannel () {
return (
<>
    <div className="Container SuperStarAuth justify-content-center aligns-items-center">

        <div className="Card row d-flex Super-body">
            <div className="superStar-Auth col-md-4"> <br /><br />
                <img src={Logo} alt="" className="Super-star-img" />
            </div>

            <div className="superStar-Auth col-md-6">
                <ul className="Ul-super">
                    <br /><br /> <br />
                    <li className="li-super"><Link to='/superstar/qr'><button className='btn-super-star'>Registration</button></Link></li>
                    <li className="li-super"><Link to='/superstar-admin/login'><button className='btn-super-star'>Log in</button></Link></li>
                </ul>
            </div>
        </div>

    </div>
</>
)
}

export default AdminPannel;