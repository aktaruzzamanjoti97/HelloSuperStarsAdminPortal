import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import bat from "../../../../../../assets/images/Souvenir/bat.png";
import cricketJersy from "../../../../../../assets/images/Souvenir/footbal-jersey.png";
import Shoe from "../../../../../../assets/images/Souvenir/shoe.png";
import bal from "./../../../../../../assets/images/Souvenir/ball.png";
import DeleteProductModal from "../DeleteProductModal/DeleteProductModal";
import "./ProductList.css";
import axios from "axios";
import { Markup } from "interweave";
import moment from 'moment';

const ProductList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [type, setType] = useState('');

  const [product, setProduct] = useState([]);
  const [allstatus, setStatus] = useState('');
  console.log("All ", product);

  let history = useHistory();
  const location = useLocation();

  // function handleClick() {
  //   history.push("/superstar-admin/souvenir/edit-marketplace");
  // }


  useEffect(() => {

    console.log(location.pathname);

    if(location.pathname === '/superstar-admin/souvenir/product-list/approved')
    {
      axios.get(`/api/admin/marketplace/product-list/approved`).then(res => {
        console.log('res ', res.data.approved);
        if(res.data.status === 200)
        {
          setProduct(res.data.approved);
          setStatus('approved');
        }
      });
    }
    if(location.pathname === '/superstar-admin/souvenir/product-list/pending')
    {
      axios.get(`/api/admin/marketplace/product-list/pending`).then(res => {
        if(res.data.status === 200)
        {
          setProduct(res.data.pending);
          setStatus('pending');
        }
      });
    }
    


}, [location]);


  return (
    <div className="container-fluid">
      <div className="">
        {console.log(allstatus)}
        <h3 className="text-light my-3">{(allstatus === 'approved') ? "Approved" :"Pending"} Product List</h3>
        <div className="row">

        {product.map((product, index) => (
          <div className="col-md-12 col-lg-6  my-4">
            <div className="border-warning product-card">
              <div className="">
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center text-center">
                    <div className="div-img d-flex justify-content-center align-items-center">
                      <img src={`http://localhost:8000/${product.image}`} className="img-fluid img-style-sold" alt="" />
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="p-4">
                      <h5 className="text-light">{product.title}</h5>
                      <small className="text-muted">Released on {moment(product.created_at).format('LL')} - {moment(product.created_at).format('LT')}
                      </small>

                      <p className='text-white'>
                      <Markup content= {product.description}/>
                      </p>
                      <div className="row eleven-one-parents">
                        <div className="col-md-9 ms-3">
                          <div className="row text-sold-font">
                            <div className="row bg-gray">
                              <div className="col-4">
                                <small className="text-light">Units</small>
                              </div>
                              <div className="col-8 d-flex justify-content-end">
                                <small className="text-light mx-4">{product.total_items}</small>
                              </div>
                            </div>

                            <div className="row  bg-gray mt-3">
                              <div className="col-4">
                                <small className="text-light">Price</small>
                              </div>
                              <div className="col-8 d-flex justify-content-end">
                                <small className="text-light mx-4"><span>$</span>{product.unit_price}</small>
                              </div>
                            </div>


                            <div className="row  bg-gray mt-3">
                              <div className="col-4">
                                <small className="text-light">Sold</small>
                              </div>
                              <div className="col-8 d-flex justify-content-end">
                                <small className="text-light mx-4">{product.total_selling}</small>
                              </div>
                            </div>


                            <div className="row  bg-gray mt-3">
                              <div className="col-4">
                                <small className="text-light">Left</small>
                              </div>
                              <div className="col-8 d-flex justify-content-end">
                                <small className="text-light mx-4">{ product.total_items - product.total_selling }</small>
                              </div>
                            </div>


                          </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center">
                          {/* <div className="d-flex justify-content-center align-items-center"> */}
                          <div className="div-img d-flex justify-content-center align-items-center ">
                            <div className="pt-3">
                              {/* <div className="my-3">
                                <button type="button" onClick={handleClick} className="btn btn-warning"><i className="fa-solid fa-pencil icon-soldProduct"></i></button>

                              </div> */}

                              <div className="my-3">
                                <Link to={`/superstar-admin/souvenir/edit-marketplace/${product.id}`} className='btn btn-success me-2'>
                                <i className="fa-solid fa-pencil icon-soldProduct"></i>
                                                    </Link>

                              </div>

                              <div className="">
                                <Link to={`/superstar-admin/souvenir/confirm-or-edit-marketplace/${product.id}`} className='btn btn-danger'>
                                <i className="fa-solid fa-eye icon-soldProduct"></i>
                                                    </Link>

                              </div>

                              {/* <div className="">
                                <button onClick={() => setModalShow(true)} className="btn btn-light"> <i className="fa-solid fa-eye icon-deleteProduct"></i></button>

                              </div> */}
                            </div>


                            <DeleteProductModal
                              show={modalShow}
                              onHide={() => setModalShow(false)}
                            />
                          </div>

                          {/* </div> */}
                        </div>

                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}


       
        </div>
      </div>
    </div>
  );
};

export default ProductList;