import React,{useState,useEffect,useHistory} from "react";
import unplash from "../../../assets/images/Auditions/unsplash.png";
import decline from "../../../assets/images/declined.png";
import sign from "../../../assets/images/sign.png";
import "./AdminSelectJury.css";
import axios from "axios";

const AdminSelectJury = (props) => {

  let history = useHistory();
  // const [audition, setAudition] = useState([]);

  var aud_id = props.match.params.id;

  // useEffect(() => {
  //   axios.get(`/api/audition-admin/jury-selected-videos/${aud_id}`).then((res) => {
  //     if (res.data.status === 200) {
  //       let audition = res.data.audition_juries;
  //       console.log("Single Audition:", audition);
  //     }
  //   });
  // }, [aud_id]);


  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-4 my-3 d-flex justify-content-center">
          <div className="bg-dark cardBox">
            <div className="px-3 d-flex justify-content-start nameBg rounded-3">
              <img className="img-fluid arafatPic py-2" src={unplash} alt="" />
              <div className="d-flex align-items-center">
                <h6 className="mx-3 text-black juryName">Arafat Hossain</h6>
              </div>
            </div>
            <div className="threeF m-3  p-2 rounded-3">
              <div className="d-flex ">
                <button className="">
                  <i className="fa-solid fa-video text-warning iconJuryText"></i>
                </button>

                <span className="mx-3">
                  <span>Total Videos</span>
                  <h5>
                    <big className="text-warning">200</big>
                  </h5>
                </span>
              </div>
            </div>
            <div className="cFour m-3  p-2 rounded-3">
              <div className="d-flex">
                <button>
                  <img src={sign} className="img-fluid iconJury" alt="" />
                </button>
                <span className="mx-3">
                  <span>Selected Videos</span>
                  <h5>
                    <big className="text-warning">200</big>
                  </h5>
                </span>
              </div>
            </div>
            <div className="ffdNine m-3  p-2 rounded-3">
              <div className="d-flex">
                <button>
                  <img src={decline} className="img-fluid iconJury" alt="" />
                </button>
                <span className="mx-3">
                  <span>Rejected Videos</span>
                  <h5>
                    <big className="text-warning">100</big>
                  </h5>
                </span>
              </div>
            </div>
            <div className="m-3">
              <button className="w-100 btn nameBg p-2">
                <big className="text-dark fw-bold">Details</big>
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 my-3 d-flex justify-content-center">
          <div className="bg-dark cardBox">
            <div className="px-3 d-flex justify-content-start nameBg rounded-3">
              <img className="img-fluid arafatPic py-2" src={unplash} alt="" />
              <div className="d-flex align-items-center">
                <h6 className="mx-3 text-black juryName">Arafat Hossain</h6>
              </div>
            </div>
            <div className="threeF m-3  p-2 rounded-3">
              <div className="d-flex ">
                <button className="">
                  <i className="fa-solid fa-video text-warning iconJuryText"></i>
                </button>

                <span className="mx-3">
                  <span>Total Videos</span>
                  <h5>
                    <big className="text-warning">200</big>
                  </h5>
                </span>
              </div>
            </div>
            <div className="cFour m-3  p-2 rounded-3">
              <div className="d-flex">
                <button>
                  <img src={sign} className="img-fluid iconJury" alt="" />
                </button>
                <span className="mx-3">
                  <span>Selected Videos</span>
                  <h5>
                    <big className="text-warning">200</big>
                  </h5>
                </span>
              </div>
            </div>
            <div className="ffdNine m-3  p-2 rounded-3">
              <div className="d-flex">
                <button>
                  <img src={decline} className="img-fluid iconJury" alt="" />
                </button>
                <span className="mx-3">
                  <span>Rejected Videos</span>
                  <h5>
                    <big className="text-warning">100</big>
                  </h5>
                </span>
              </div>
            </div>
            <div className="m-3">
              <button className="w-100 btn nameBg p-2">
                <big className="text-dark fw-bold">Details</big>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-3 d-flex justify-content-center">
          <div className="bg-dark cardBox">
            <div className="px-3 d-flex justify-content-start nameBg rounded-3">
              <img className="img-fluid arafatPic py-2" src={unplash} alt="" />
              <div className="d-flex align-items-center">
                <h6 className="mx-3 text-black juryName">Arafat Hossain</h6>
              </div>
            </div>
            <div className="threeF m-3  p-2 rounded-3">
              <div className="d-flex ">
                <button className="">
                  <i className="fa-solid fa-video text-warning iconJuryText"></i>
                </button>

                <span className="mx-3">
                  <span>Total Videos</span>
                  <h5>
                    <big className="text-warning">200</big>
                  </h5>
                </span>
              </div>
            </div>
            <div className="cFour m-3  p-2 rounded-3">
              <div className="d-flex">
                <button>
                  <img src={sign} className="img-fluid iconJury" alt="" />
                </button>
                <span className="mx-3">
                  <span>Selected Videos</span>
                  <h5>
                    <big className="text-warning">200</big>
                  </h5>
                </span>
              </div>
            </div>
            <div className="ffdNine m-3  p-2 rounded-3">
              <div className="d-flex">
                <button>
                  <img src={decline} className="img-fluid iconJury" alt="" />
                </button>
                <span className="mx-3">
                  <span>Rejected Videos</span>
                  <h5>
                    <big className="text-warning">100</big>
                  </h5>
                </span>
              </div>
            </div>
            <div className="m-3">
              <button className="w-100 btn nameBg p-2">
                <big className="text-dark fw-bold">Details</big>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark my-3">
        <div className="nameBg p-2 rounded-3">
          <h5 className="text-black p-1 mx-2">Selection for Next Round</h5>
        </div>

        <div className="row p-4">
          <p className="text-light">
            <big>Select top</big>
          </p>
          <div className="col-md-3">
            <input type="text" className="my-2 form-control input-gray border border-warning" />
          </div>
          <div className="col-md-2">
            <button className="btn nameBg my-2 fw-bold">Apply</button>
          </div>
        </div>

        <div className="row p-4">
          <div className="col-md-12">
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              className="form-control input-gray mx-1 border border-warning"
            ></textarea>
          </div>
        </div>

        <div className="row p-4">
          <div className="col-md-6">
            <button className="btn nameBg fw-bold w-100">Send</button>
          </div>
        </div>
      </div>

      <div className="bg-dark my-5">
        <div className="nameBg p-2 rounded-3">
          <h5 className="text-black p-1 mx-2">Rejected</h5>
        </div>

        <div className="row p-4">
          <div className="col-md-12">
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              className="form-control input-gray mx-2 border border-warning"
            ></textarea>
          </div>

          <div className="row p-4">
            <div className="col-md-4">
              <button className="btn nameBg fw-bold w-100">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSelectJury;
