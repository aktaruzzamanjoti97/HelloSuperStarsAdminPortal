import React from 'react';
import { Modal } from 'react-bootstrap';
import DeleteMarketImg from '../../../../../../assets/images/MarketplaceDelete.png';


const DeleteSuperstarProductModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="deleteModalProduct"
        >

            <Modal.Body className="bg-dark modalBorderDelete">

                <div className=" py-3 mx-5 my-2 text-center">
                    <div>
                        <img src={DeleteMarketImg} alt="" />
                        <h4 className="text-white my-3">Delete Product List</h4>
                        <p className="text-white  my-2 pb-3">
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </p>
                        <div className="d-flex justify-content-around  mt-4">
                            <button className="btn btn-outline-warning">Delete</button>
                            <button className="btn btn-warning" onClick={props.onHide}>Go Back</button>
                        </div>
                    </div>
                </div>


            </Modal.Body>

        </Modal>
    );
};

export default DeleteSuperstarProductModal;