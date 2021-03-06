import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import pendingBanner from "../../../../../assets/images/pendingBannerAudio.png";
import demo from "../../../../../assets/images/pendingIcons/demo.png";
import finish from "../../../../../assets/images/pendingIcons/finish.png";
import jury from "../../../../../assets/images/pendingIcons/jury.png";
import star from "../../../../../assets/images/pendingIcons/star.png";
import start from "../../../../../assets/images/pendingIcons/start.png";
import "./StarPendingAudition.css";

const StarPendingAudition = () => {
  return (
    <div className="container-fluid">
      <h2 className="text-white">Request for approval</h2>
      <div className="requestApprovalBottomLine mb-4"></div>

      <div className="mainBorderPending">
        <h3 className="text-primary my-2">Guitar Auditions</h3>
        <p className="text-light my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          dolore tenetur deleniti itaque impedit modi atque esse qui nam nihil
          enim sapiente ipsam laborum quaerat ea animi reiciendis, officia ullam
          provident perspiciatis accusamus quod velit quas quasi? Reprehenderit
          maiores quo dolores ipsa debitis magnam nobis sapiente, possimus qui
          blanditiis aliquam, at sit accusamus eius earum amet tempora impedit
          ad adipisci?
        </p>

        <img src={pendingBanner} className="img-fluid imgPending mt-3" alt="" />

        <div className="row">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <Card style={{ width: "18rem" }}>
              <ListGroup variant="flush">
                <ListGroup.Item className="juryFeatured text-center">
                  <img src={jury} alt="" /> Jury panel
                </ListGroup.Item>
                <ListGroup.Item className="d-flex juryItem justify-content-center">
                  <img className="demoStar" src={demo} alt="" />
                  <div className="mx-2">
                    <h6 className="text-light">Jury Name</h6>
                    <p className="text-light">Music</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex juryItem justify-content-center">
                  <img className="demoStar" src={demo} alt="" />
                  <div className="mx-2">
                    <h6 className="text-light">Jury Name</h6>
                    <p className="text-light">Music</p>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
          <div className="col-md-4  d-flex justify-content-center align-items-center">
            <Card style={{ width: "18rem" }} className="my-5">
              <ListGroup variant="flush">
                <ListGroup.Item className="juryFeatured text-center">
                  <img src={star} alt="" /> Star panel
                </ListGroup.Item>
                <ListGroup.Item className="d-flex juryItem justify-content-center">
                  <img className="demoStar" src={demo} alt="" />
                  <div className="mx-2">
                    <h6 className="text-light">Star Name</h6>
                    <p className="text-light">Music</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex juryItem justify-content-center">
                  <img className="demoStar" src={demo} alt="" />
                  <div className="mx-2">
                    <h6 className="text-light">Star Name</h6>
                    <p className="text-light">Music</p>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <Card style={{ width: "18rem" }}>
              <ListGroup variant="flush">
                <ListGroup.Item className="juryFeatured text-center">
                  <img src={star} alt="" /> Admin panel
                </ListGroup.Item>
                <ListGroup.Item className="d-flex juryItem justify-content-center">
                  <img className="demoStar" src={demo} alt="" />
                  <div className="mx-2">
                    <h6 className="text-light">Admin Name</h6>
                    <p className="text-light">Music</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex juryItem justify-content-center">
                  <img className="demoStar" src={demo} alt="" />
                  <div className="mx-2">
                    <h6 className="text-light">Admin Name</h6>
                    <p className="text-light">Music</p>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <Card style={{ width: "18rem" }} className='my-2'>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex juryItem justify-content-center">
                  <img className="demoStar" src={start} alt="" />
                  <div className="mx-2">
                    <p className="text-light">Starts</p>
                    <h5 className="text-light fw-bold">2 April 2022</h5>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <Card style={{ width: "18rem" }}  className='my-2'>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex juryItem justify-content-center">
                  <img className="demoStar" src={finish} alt="" />
                  <div className="mx-2">
                    <p className="text-light">Ends</p>
                    <h5 className="text-light fw-bold">16 April 2022</h5>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </div>

        <div className="d-flex justify-content-evenly my-5">
          <button className="text-primary btnPending rounded-3 p-2">
            Rejected
          </button>
          <button className="text-light btnApproved p-2 rounded-3">
            Approved
          </button>
        </div>
      </div>
    </div>
  );
};

export default StarPendingAudition;
