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
      <div className="">
        <h3 className="text-light my-3">Sold Products</h3>
        <div className="row">
          <div className="col-md-12 col-lg-6  my-4">
            <div className="border-warning product-card">
              <div className="">
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center text-center">
                    <div className="div-img d-flex justify-content-center align-items-center">
                      <img src={bat} className="img-fluid img-style-sold" alt="" />
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="p-4">
                      <h5 className="text-light">Cricket Jersey</h5>
                      <small className="text-muted">Released on 12-12-2021</small>

                      <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit delectus, assumenda vitae iusto odio quibusdam.</p>
                      <div className="row eleven-one-parents">
                        <div className="col-md-9 ms-3">
                          <div className="row text-sold-font">
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
                        <div className="col-md-2 d-flex justify-content-center">
                          {/* <div className="d-flex justify-content-center align-items-center"> */}
                          <div className="div-img d-flex justify-content-center align-items-center ">
                            <div className="pt-5">
                              <div className="my-3">
                                <button type="button" onClick={handleClick} className="btn btn-warning"><i className="fa-solid fa-pencil icon-soldProduct"></i></button>

                              </div>
                              <div className="">
                                <button onClick={() => setModalShow(true)} className="btn btn-light"> <i className="fa-solid fa-trash icon-deleteProduct"></i></button>

                              </div>
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



          <div className="col-md-12 col-lg-6  my-4">
            <div className="border-warning product-card">
              <div className="">
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center text-center">
                    <div className="div-img d-flex justify-content-center align-items-center">
                      <img src={cricketJersy} className="img-fluid img-style-sold" alt="" />
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="p-4">
                      <h5 className="text-light">Cricket Jersey</h5>
                      <small className="text-muted">Released on 12-12-2021</small>

                      <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit delectus, assumenda vitae iusto odio quibusdam.</p>
                      <div className="row eleven-one-parents">
                        <div className="col-md-9 ms-3">
                          <div className="row text-sold-font">
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
                        <div className="col-md-2 d-flex justify-content-center">
                          {/* <div className="d-flex justify-content-center align-items-center"> */}
                          <div className="div-img d-flex justify-content-center align-items-center ">
                            <div className="pt-5">
                              <div className="my-3">
                                <button type="button" onClick={handleClick} className="btn btn-warning"><i className="fa-solid fa-pencil icon-soldProduct"></i></button>

                              </div>
                              <div className="">
                                <button onClick={() => setModalShow(true)} className="btn btn-light"> <i className="fa-solid fa-trash icon-deleteProduct"></i></button>

                              </div>
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


          <div className="col-md-12 col-lg-6  my-4">
            <div className="border-warning product-card">
              <div className="">
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center text-center">
                    <div className="div-img d-flex justify-content-center align-items-center">
                      <img src={Shoe} className="img-fluid img-style-sold" alt="" />
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="p-4">
                      <h5 className="text-light">Cricket Jersey</h5>
                      <small className="text-muted">Released on 12-12-2021</small>

                      <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit delectus, assumenda vitae iusto odio quibusdam.</p>
                      <div className="row eleven-one-parents">
                        <div className="col-md-9 ms-3">
                          <div className="row text-sold-font">
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
                        <div className="col-md-2 d-flex justify-content-center">
                          {/* <div className="d-flex justify-content-center align-items-center"> */}
                          <div className="div-img d-flex justify-content-center align-items-center ">
                            <div className="pt-5">
                              <div className="my-3">
                                <button type="button" onClick={handleClick} className="btn btn-warning"><i className="fa-solid fa-pencil icon-soldProduct"></i></button>

                              </div>
                              <div className="">
                                <button onClick={() => setModalShow(true)} className="btn btn-light"> <i className="fa-solid fa-trash icon-deleteProduct"></i></button>

                              </div>
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


          <div className="col-md-12 col-lg-6  my-4">
            <div className="border-warning product-card">
              <div className="">
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center text-center">
                    <div className="div-img d-flex justify-content-center align-items-center">
                      <img src={bal} className="img-fluid img-style-sold" alt="" />
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="p-4">
                      <h5 className="text-light">Cricket Jersey</h5>
                      <small className="text-muted">Released on 12-12-2021</small>

                      <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit delectus, assumenda vitae iusto odio quibusdam.</p>
                      <div className="row eleven-one-parents">
                        <div className="col-md-9 ms-3">
                          <div className="row text-sold-font">
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
                        <div className="col-md-2 d-flex justify-content-center">
                          {/* <div className="d-flex justify-content-center align-items-center"> */}
                          <div className="div-img d-flex justify-content-center align-items-center ">
                            <div className="pt-5">
                              <div className="my-3">
                                <button type="button" onClick={handleClick} className="btn btn-warning"><i className="fa-solid fa-pencil icon-soldProduct"></i></button>

                              </div>
                              <div className="">
                                <button onClick={() => setModalShow(true)} className="btn btn-light"> <i className="fa-solid fa-trash icon-deleteProduct"></i></button>

                              </div>
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
        </div>
      </div>
    </div>
  );
};

export default SoldProducts;
