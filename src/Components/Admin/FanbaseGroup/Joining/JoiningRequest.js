import React, {useState} from 'react'
import { Table } from 'react-bootstrap'

import JoinImg from "../../../../assets/images/fanGroup/unknown.png";
import JoiningRequestModal from './JoiningRequestModal';

const JoiningRequest = () => {
const [modalShow, setModalShow] = React.useState(false);
return (
<>
  <div className="row my-3">
    <div className="container-fluid">
      <div className="card bg-dark">
        <div className="card-body">
          <h5 className="text-light">Warned</h5>

          <Table striped bordered hover variant="dark" style={{ fontSize:'12px' }}>
            <thead>
              <tr>
                <th>Members Name</th>
                <th>Own Star Name</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td><img src={JoinImg} className='img-fluid mx-1' alt="" /> Shoyib Mallick</td>
                <td className='pt-3'>Shakib All Hasan</td>
                <td className='text-center'> <i class="btn fa-solid fa-eye text-warning " onClick={()=>
                    setModalShow(true)} ></i> <i class="fa-solid fa-square-plus text-success btn "></i> <i
                    class="fa-solid fa-trash-can text-danger btn  "></i>
                  <JoiningRequestModal show={modalShow} onHide={()=> setModalShow(false)}
                    />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  </div>
</>
)
}

export default JoiningRequest