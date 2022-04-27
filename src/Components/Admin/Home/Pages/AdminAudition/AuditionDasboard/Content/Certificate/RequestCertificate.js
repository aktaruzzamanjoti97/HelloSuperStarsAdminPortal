import React from 'react'
import CertificateAudition from './CertificateAudition'
import { MDBTable} from 'mdbreact';
import ImgPro from '../../../../../../../../assets/images/Avater.png'
import CertificateModal from './CertificateModal';
const RequestCertificate = (props) => {
const [modalShow, setModalShow] = React.useState(false);

return (
<>
    <CertificateAudition />
    <div className="row mx-1">
        <h4 className="tITLES py-2 mb-3">Certificate Content</h4>
        <div className="card ReImg " style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg)",
          }}></div>
    </div>

    <div className="row mx-1 mt-3">
        <div className="card top3 bg-dark pt-2">
            <h5>3 Request Pending</h5>
        </div>
        <div className="bg-dark text-light">
            <MDBTable responsive className='text-light'>
                <thead>
                    <tr>
                        <th scope="col">Photo</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Rank</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=''>
                        <td> <img src={ImgPro} alt=' ' className='ImhAs' /> </td>
                        <td className='pt-3 textPro'>Apinki Goshly</td>
                        <td className='pt-3 textPro'>+880 172320 xxxxx</td>
                        <td className='pt-3 textPro'>23</td>
                        <td className='pt-3 textPro'>2nd Round Qualified</td>
                        <td>
                            <button className='btn btnView text-success mx-1'><i class="fa-solid fa-eye"></i></button>
                            <button className='btn btnEdit text-info mx-1' onClick={()=> setModalShow(true)}><i
                                    class="fa-solid fa-pen-to-square"></i></button>
                            <button className='btn btnDel text-danger mx-1'><i
                                    class="fa-solid fa-trash-can"></i></button>
                        </td>
                    </tr>
                </tbody>
                {/*
                <MDBTableHead columns={data.columns} />
                <MDBTableBody rows={data.rows} /> */}
            </MDBTable>

            <CertificateModal show={modalShow} onHide={()=> setModalShow(false)} />

        </div>
    </div>
</>
)
}

export default RequestCertificate