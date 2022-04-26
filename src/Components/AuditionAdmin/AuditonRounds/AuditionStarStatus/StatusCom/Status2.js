import React from "react";
import momotaz from "../../../../../assets/images/Rounds/momotaz.png";
import james from "../../../../../assets/images/Rounds/james.png";
import singer from "../../../../../assets/images/Rounds/singer.png";
import star from "../../../../../assets/images/Rounds/Star.png";
import topBanner from "../../../../../assets/images/Rounds/statusTopBanner.png";
import topvideoBanner from "../../../../../assets/images/Rounds/unsplash_IeTLKtzbLNo.png";
import icon1 from "../../../../../assets/images/Rounds/icons/Group 975.png";
import icon2 from "../../../../../assets/images/Rounds/icons/finish 1.png";
import icon3 from "../../../../../assets/images/Rounds/icons/flag 1.png";

const Status2 = (props) => {
  const {data,setData}=props;
  return (
    <div className="container my-3">
      <div style={{ border: "2px solid gold", borderRadius: "10px" }}>
        <div className="p-4">
          <h5 className="text-warning">Guiter Audition Discription</h5>
          <section className="card star-cardColor2">
            <div className="card-body ">
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                unde est quis porro quod, dicta quasi commodi labore provident
                cum repudiandae nemo asperiores sunt quae consequatur enim
                expedita ea libero?
              </p>
            </div>
          </section>

          <section className="mt-4">
            <h5 className="text-warning">
              Guiter Audition Instruction for 1st round
            </h5>
            <div
              className="star-cardColor2 my-2"
              style={{ borderRadius: "3px" }}
            >
              <p className="text-light p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                quibusdam?
              </p>
            </div>
            <div
              className="star-cardColor2 my-2"
              style={{ borderRadius: "3px" }}
            >
              <p className="text-light p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                quibusdam?
              </p>
            </div>
            <div
              className="star-cardColor2 my-2"
              style={{ borderRadius: "3px" }}
            >
              <p className="text-light p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                quibusdam?
              </p>
            </div>
            <div
              className="star-cardColor2 my-2"
              style={{ borderRadius: "3px" }}
            >
              <p className="text-light p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                quibusdam?
              </p>
            </div>
          </section>

          <section className="container topBannerVideoRound my-2">
            <img src={topBanner} alt="" className="img-fluid w-100" />
          </section>

          <section
            className=" my-3 container star-cardColor d-flex justify-content-between flex-wrap p-2"
            style={{ borderRadius: "3px" }}
          >
            <div className="d-flex align-items-center">
              <h3 className="text-light">Uploaded Video Instruction</h3>
            </div>
            <div className="d-flex align-items-center">
              <input type="file" placeholder="upload Video" />
            </div>
          </section>

          <section className="container d-sm-block d-md-flex justify-content-between">
            <div className="status-start d-flex mb-2">
              <div className="img-icon-status  d-flex justify-content-center align-items-center ms-3">
                <div>
                  <img src={icon3} className="statusImg" alt="" />
                </div>
              </div>
              <div className="img-icon-status  d-flex justify-content-center align-items-center mx-3">
                <div>
                  <small className="text-light">Starts</small>
                  <h5 className="text-light fontSizeStatus">2 April 2022</h5>
                </div>
              </div>
            </div>

            <div className="status-start2 d-flex mb-2">
              <div className="img-icon-status  d-flex justify-content-center align-items-center ms-3">
                <div>
                  <img src={icon2} className="statusImg" alt="" />
                </div>
              </div>
              <div className="img-icon-status  d-flex justify-content-center align-items-center mx-3">
                <div>
                  <small className="text-light">Ends</small>
                  <h5 className="text-light fontSizeStatus">2 April 2022</h5>
                </div>
              </div>
            </div>

            <div className="status-start d-flex mb-2">
              <div className="img-icon-status  d-flex justify-content-center align-items-center ms-3">
                <div>
                  <img src={icon1} className="statusImg" alt="" />
                </div>
              </div>
              <div className="img-icon-status  d-flex justify-content-center align-items-center mx-3">
                <div>
                  <small className="text-light">Uploaded Slot</small>
                  <h5 className="text-light fontSizeStatus">2 April 2022</h5>
                </div>
              </div>
            </div>
          </section>

          <section
            className="star-cardColor my-3 p-2"
            style={{ borderRadius: "3px" }}
          >
            <div className="d-flex align-items-center">
              <h3 className="text-light">Who will judge you?</h3>
            </div>
          </section>

          <section className="d-sm-block d-md-flex justify-content-between">
            <div className="status-start2 d-flex mb-2">
              <div className="img-icon-status  d-flex justify-content-center align-items-center ms-3">
                <div>
                  <img
                    src={james}
                    height={"80px"}
                    width={"80px"}
                    className="statusImg"
                    alt=""
                  />
                </div>
              </div>
              <div className="img-icon-status  d-flex justify-content-center align-items-center mx-3">
                <div>
                  <small className="text-light">Starts</small>
                  <h5 className="text-light fontSizeStatus">james</h5>
                </div>
              </div>
            </div>

            <div className="status-start2 d-flex mb-2">
              <div className="img-icon-status  d-flex justify-content-center align-items-center ms-3">
                <div>
                  <img
                    src={momotaz}
                    height={"80px"}
                    width={"80px"}
                    className="statusImg"
                    alt=""
                  />
                </div>
              </div>
              <div className="img-icon-status  d-flex justify-content-center align-items-center mx-3">
                <div>
                  <small className="text-light">Starts</small>
                  <h5 className="text-light fontSizeStatus">Momotaz Begum</h5>
                </div>
              </div>
            </div>

            <div className="status-start2 d-flex mb-2">
              <div className="img-icon-status  d-flex justify-content-center align-items-center ms-3">
                <div>
                  <img
                    src={singer}
                    height={"80px"}
                    width={"80px"}
                    className="statusImg"
                    alt=""
                  />
                </div>
              </div>
              <div className="img-icon-status  d-flex justify-content-center align-items-center mx-3">
                <div>
                  <small className="text-light">Starts</small>
                  <h5 className="text-light fontSizeStatus">Protik Hasan</h5>
                </div>
              </div>
            </div>
          </section>

          <section className="my-3">
            <h6 className="text-light">Mark Distribution</h6>
            <div style={{ borderTop: "2px solid black " }}></div>

            <div style={{ border: "1px solid gray" }} className="my-2">
              <div className="p-2 d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label text-warning"
                      for="flexCheckDefault"
                    >
                      User Vote
                    </label>
                  </div>
                </div>

                <div className=" d-flex justify-content-end">
                  <input className="form-control bg-warning  w-25 text-light" placeholder="30"/>
                </div>
              </div>
            </div>

            <div style={{ border: "1px solid gray" }} className="my-2">
              <div className="p-2 d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label text-warning"
                      for="flexCheckDefault"
                    >
                      Jury Mark
                    </label>
                  </div>
                </div>

                <div className=" d-flex justify-content-end">
                  <input className="form-control bg-warning  w-25 text-light" placeholder="30"/>
                </div>
              </div>
            </div>

            <div style={{ border: "1px solid gray" }} className="my-2">
              <div className="p-2 d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label text-warning"
                      for="flexCheckDefault"
                    >
                      Star Mark
                    </label>
                  </div>
                </div>

                <div className=" d-flex justify-content-end">
                  <input className="form-control bg-warning  w-25 text-light" placeholder="30"/>
                </div>
              </div>
            </div>
          </section>


          <section>
              <button className='w-100 btn btn-warning fw-bold' onClick={()=>setData(1)} >Approval Request for manager Admin</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Status2;
