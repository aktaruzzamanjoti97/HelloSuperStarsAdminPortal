import React, {useState} from 'react';
import {Modal,Button} from 'react-bootstrap';
import Iframe from 'react-iframe';


function EventLinkCreate(props){
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    return  <Modal
    {...props}
    size="xl"
    aria-labelledby="contained-modal-title-vcenter"
    centered

  >
    <Modal.Body >
    <Iframe url="https://star-meetup.herokuapp.com/"
                            width="100%"
                            height="600px"
                            id="myId"
                            allow="camera;microphone"
                            className="myClassname bg-dark"
                            display="initial"
                            position="relative" />
    </Modal.Body>
    <Modal.Footer className='bg-dark d-flex justify-content-center align-items-center'>
      <Button className='text-center' onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
//     return  <Modal dialogClassName="my-modal" style={{ height: '100vh' }} className="liveChatModalVideo" show={show} onHide={handleClose} size="lg"
//     aria-labelledby="contained-modal-title-vcenter"
//     centered>
        
//     <Modal.Body>
//         <Iframe url="https://superstar-livechat.herokuapp.com/?room=SuperStarLiveConversation_algdxhxmio8"
//             width="100%"
//             height="600px"
//             id="myId"
//             allow="camera;microphone"
//             className="myClassname"
//             display="initial"
//             position="relative" />
//         <Button variant="secondary" onClick={handleClose}>
//             Close
//         </Button>
//     </Modal.Body>
// </Modal>
}
export default EventLinkCreate;