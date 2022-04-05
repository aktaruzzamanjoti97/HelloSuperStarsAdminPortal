import React from "react";
import "./FanBaseHome.css";
import fan from "../../../../assets/images/Fanbase-img/unsplash_sYhUhse5uT8.png";
import meme from "../../../../assets/images/Fanbase-img/meme.png";
import meme2 from "../../../../assets/images/Fanbase-img/meme2.png";

const FanBaseHome = () => {
  return (
    <>
      {/* <div className="card bg-dark mt-4">
        <div className="card-body">
          <div class=" row">
            <label class="col-sm-2 col-form-label">Create post</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control fan-input"
                id="inputPassword"
                placeholder="type here for create post ...."
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="parent-divFan">
          <div className="child-divFan">
          <div className="card bg-dark postFancard my-4">
          <div className="card-body">
            <div className="d-flex">
              <img src={fan} className="img-fluid mx-2" alt="" />
              <div className=" w-75">
                <h6 className="m-0">Ajgar Ali</h6>
                <small style={{ color: "#A7A7A7" }}>
                  <span>5:10pm </span> <span className="mx-2">15 Feb 2022</span>{" "}
                  <span>Salman khan</span>
                </small>
              </div>
            </div>

            <div className="container my-2">
              <img src={meme} className="img-fluid w-100" alt="" />
              <div className="my-3">
                <small className="chekfan">
                  <i class="fa-solid fa-thumbs-up mx-1"></i>1.5k Likes
                </small>
                <small className="mx-4 chekfan">
                  <i class="fa-solid fa-comment mx-1"></i>200 Comments
                </small>
                <small className="chekfan">
                  <i class="fa-solid fa-share mx-1"></i>10 Share
                </small>
              </div>
            </div>

            <div className="container my-2">
              <button className="btn text-warning btn-secondary fan-button mx-2">
                <i class="fa-solid fa-heart mx-1"></i>Like
              </button>
              <button className="btn  btn-secondary fan-button mx-2">
                <i class="fa-solid fa-comment mx-1"> </i>Comments
              </button>
              <button className="btn  btn-secondary  fan-button mx-2">
                <i class="fa-solid fa-share mx-1"></i>Share
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-dark postFancard my-4">
          <div className="card-body">
            <div className="d-flex">
              <img src={fan} className="img-fluid mx-2" alt="" />
              <div className=" w-75">
                <h6 className="m-0">Ajgar Ali</h6>
                <small style={{ color: "#A7A7A7" }}>
                  <span>5:10pm </span> <span className="mx-2">15 Feb 2022</span>{" "}
                  <span>Salman khan</span>
                </small>
              </div>
            </div>

            <div className="container my-2">
              <img src={meme2} className="img-fluid w-100" alt="" />
              <div className="my-3">
                <small className="chekfan">
                  <i class="fa-solid fa-thumbs-up mx-1"></i>1.5k Likes
                </small>
                <small className="mx-4 chekfan">
                  <i class="fa-solid fa-comment mx-1"></i>200 Comments
                </small>
                <small className="chekfan">
                  <i class="fa-solid fa-share mx-1"></i>10 Share
                </small>
              </div>
            </div>

            <div className="container my-2">
              <button className="btn text-warning btn-secondary fan-button mx-2">
                <i class="fa-solid fa-heart mx-1"></i>Like
              </button>
              <button className="btn  btn-secondary fan-button mx-2">
                <i class="fa-solid fa-comment mx-1"> </i>Comments
              </button>
              <button className="btn  btn-secondary  fan-button mx-2">
                <i class="fa-solid fa-share mx-1"></i>Share
              </button>
            </div>
          </div>
        </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default FanBaseHome;
