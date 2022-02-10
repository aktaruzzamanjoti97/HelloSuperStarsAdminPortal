import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import bat from "../../../../../../assets/images/Souvenir/bat.png";
import cricketJersy from "../../../../../../assets/images/Souvenir/footbal-jersey.png";
import Shoe from "../../../../../../assets/images/Souvenir/shoe.png";
import bal from "./../../../../../../assets/images/Souvenir/ball.png";
import DeleteProductModal from "./DeleteProductModal/DeleteProductModal";
import "./SoldProducts.css";
const SoldProducts = () => {
  const [modalShow, setModalShow] = useState(false);

  let history = useHistory();

  function handleClick() {
    history.push("/superstar-admin/souvenir/edit-marketplace");
  }


  return (
    <div className="container-fluid">
      <div className="container-lg">
        <h3 className="text-light my-3">Sold Products</h3>
        <div className="row">
          <div className="col-md-12 col-lg-6  my-2">
            <div className="card  product-card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center text-center mb-2 px-4">
                    <img src={bat} className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6 text-center">
                    <h5 className="text-light">Cricket Jersey</h5>
                    <small className="text-muted">Released on 12-12-2021</small>

                    <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit delectus, assumenda vitae iusto odio quibusdam.</p>
                    <div className="row">
                      <div className="col-md-11">
                        <div className="row">
                          <div className="row bg-gray">
                            <div className="col-4">
                              <small className="text-light">Released</small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">12-12-2021</small>
                            </div>
                          </div>

                          <div className="row  bg-gray mt-3">
                            <div className="col-4">
                              <small className="text-light">Sold</small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">19-12-2021</small>
                            </div>
                          </div>


                          <div className="row  bg-gray mt-3">
                            <div className="col-4">
                              <small className="text-light">Price</small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">$150</small>
                            </div>
                          </div>


                          <div className="row  bg-gray mt-3">
                            <div className="col-4">
                              <small className="text-light">Owner</small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">Shakib Al hasan</small>
                            </div>
                          </div>

                          <div className="row  bg-gray mt-3">
                            <div className="col-4">
                              <small className="text-light">Buyer </small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">Abdullah</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-1">
                        <div className="d-flex justify-content-center align-items-center mt-5">
                          <div className="">
                            <div className="d-flex mt-2">
                              <button type="button" onClick={handleClick} className="btn btn-warning"><i className="fa-solid fa-pencil icon-soldProduct"></i></button>

                            </div>
                            <div className="d-flex mt-5">
                              <button onClick={() => setModalShow(true)} className="btn btn-warning"> <i className="fa-solid fa-trash icon-soldProduct"></i></button>

                            </div>

                            <DeleteProductModal
                              show={modalShow}
                              onHide={() => setModalShow(false)}
                            />  
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>



          <div className="col-md-12 col-lg-6  my-2">
            <div className="card product-card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center text-center mb-2  px-4">
                    <img src={cricketJersy} className="img-fluid  img-style-sold" alt="" />
                  </div>
                  <div className="col-md-6 text-center">
                    <h5 className="text-light mb-3">Cricket Jersey</h5>
                    <small className="text-muted">Released on 12-12-2021</small>

                    <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit delectus, assumenda vitae iusto odio quibusdam.</p>
                    <div className="row">
                      <div className="col-md-11">
                        <div className="row">
                          <div className="row bg-gray">
                            <div className="col-4">
                              <small className="text-light">Released</small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">12-12-2021</small>
                            </div>
                          </div>

                          <div className="row  bg-gray mt-3">
                            <div className="col-4">
                              <small className="text-light">Sold</small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">19-12-2021</small>
                            </div>
                          </div>


                          <div className="row  bg-gray mt-3">
                            <div className="col-4">
                              <small className="text-light">Price</small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">$150</small>
                            </div>
                          </div>


                          <div className="row  bg-gray mt-3">
                            <div className="col-4">
                              <small className="text-light">Owner</small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">Shakib Al hasan</small>
                            </div>
                          </div>

                          <div className="row  bg-gray mt-3">
                            <div className="col-4">
                              <small className="text-light">Buyer </small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">Abdullah</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-1">
                        <div className="d-flex justify-content-center align-items-center mt-5">
                          <div className="d-flex flex-column">
                            <div className="d-flex mt-2">
                              <button className="btn btn-warning"><i class="fa-solid fa-pencil icon-soldProduct"></i></button>

                            </div>
                            <div className="d-flex mt-5">
                              <button className="btn btn-warning"> <i class="fa-solid fa-trash icon-soldProduct"></i></button>

                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6  mt-4">
            <div className="card product-card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center text-center mb-2 px-4">
                    <img src={Shoe} className="img-fluid  img-style-sold  img-style-sold" alt="" />
                  </div>
                  <div className="col-md-6 text-center">
                    <h5 className="text-light mb-3">Cricket Jersey</h5>
                    <small className="text-muted">Released on 12-12-2021</small>

                    <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit delectus, assumenda vitae iusto odio quibusdam.</p>
                    <div className="row">
                      <div className="col-md-11">
                        <div className="row">
                          <div className="row bg-gray">
                            <div className="col-4">
                              <small className="text-light">Released</small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">12-12-2021</small>
                            </div>
                          </div>

                          <div className="row  bg-gray mt-3">
                            <div className="col-4">
                              <small className="text-light">Sold</small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">19-12-2021</small>
                            </div>
                          </div>


                          <div className="row  bg-gray mt-3">
                            <div className="col-4">
                              <small className="text-light">Price</small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">$150</small>
                            </div>
                          </div>


                          <div className="row  bg-gray mt-3">
                            <div className="col-4">
                              <small className="text-light">Owner</small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">Shakib Al hasan</small>
                            </div>
                          </div>

                          <div className="row  bg-gray mt-3">
                            <div className="col-4">
                              <small className="text-light">Buyer </small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">Abdullah</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-1">
                        <div className="d-flex justify-content-center align-items-center mt-5">
                          <div className="d-flex flex-column">
                            <div className="d-flex mt-2">
                              <button className="btn btn-warning"><i class="fa-solid fa-pencil icon-soldProduct"></i></button>

                            </div>
                            <div className="d-flex mt-5">
                              <button className="btn btn-warning"> <i class="fa-solid fa-trash icon-soldProduct"></i></button>

                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6  mt-4">
            <div className="card  product-card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center text-center mb-2 px-4">
                    <img src={bal} className="img-fluid img-style-sold mt-2" alt="" />
                  </div>
                  <div className="col-md-6 text-center">
                    <h5 className="text-light mb-3">Cricket Jersey</h5>
                    <small className="text-muted">Released on 12-12-2021</small>

                    <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit delectus, assumenda vitae iusto odio quibusdam.</p>
                    <div className="row">
                      <div className="col-md-11">
                        <div className="row">
                          <div className="row bg-gray">
                            <div className="col-4">
                              <small className="text-light">Released</small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">12-12-2021</small>
                            </div>
                          </div>

                          <div className="row  bg-gray mt-3">
                            <div className="col-4">
                              <small className="text-light">Sold</small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">19-12-2021</small>
                            </div>
                          </div>


                          <div className="row  bg-gray mt-3">
                            <div className="col-4">
                              <small className="text-light">Price</small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">$150</small>
                            </div>
                          </div>


                          <div className="row  bg-gray mt-3">
                            <div className="col-4">
                              <small className="text-light">Owner</small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">Shakib Al hasan</small>
                            </div>
                          </div>

                          <div className="row  bg-gray mt-3">
                            <div className="col-4">
                              <small className="text-light">Buyer </small>
                            </div>
                            <div className="col-8">
                              <small className="text-light mx-4">Abdullah</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-1">
                        <div className="d-flex justify-content-center align-items-center mt-5">
                          <div className="d-flex flex-column">
                            <div className="d-flex mt-2">
                              <button className="btn btn-warning"><i class="fa-solid fa-pencil icon-soldProduct"></i></button>

                            </div>
                            <div className="d-flex mt-5">
                              <button className="btn btn-warning"> <i class="fa-solid fa-trash icon-soldProduct"></i></button>

                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoldProducts;
