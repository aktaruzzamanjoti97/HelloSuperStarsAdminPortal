import React from 'react'
import { Button, Modal } from 'react-bootstrap'

import Profile from '../../../../../../assets/images/fanGroup/unknown.png'
const JoiningRequestModalStar = (props) => {
  return (
    <>
      <Modal
      {...props}
      size="ml"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     
     <div className="row BGIJoin pb-3">
         <center>
             <img src={Profile} alt="" className='proJoin mb-3 mt-4'/>
         </center>
         <center><h4 className='fw-bold text-warning'> Apurbo Roy</h4></center>
         <div className="main mx-5">
            <div className="row text-light">
                <td className='d-flex'>
                    <tr className='TDwith'>Owner Star Name </tr>
                    <tr>: Shakib Al Hasan</tr>
                </td>
                <td className='d-flex'>
                    <tr className='TDwith'>Email </tr>
                    <tr>: apurbo@gmail.com</tr>
                </td>
                <td className='d-flex'>
                    <tr className='TDwith'>Phone </tr>
                    <tr>: 01732-xxxxxxx</tr>
                </td>

            </div>
            
        </div>
        <center><button className='btnJoin btn mt-3 border-success text-success px-5 fw-bold'>Profile</button></center>
     </div>
    </Modal>
    </>
  )
}
export default JoiningRequestModalStar
