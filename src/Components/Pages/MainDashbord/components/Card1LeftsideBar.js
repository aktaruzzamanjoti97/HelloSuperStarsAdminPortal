import React from 'react';

const Card1LeftsideBar = () => {
    return (
        <div
              className="accordion accordion-card bg-dark p-3 my-3"
              id="accordionExample"
            >
              <div className="accordion-item mt-1 left-bottom-accorion">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button profile-accordion-button left-bottom-accorion collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span>
                      <i className="fas fa-layer-group mx-2 profile-font-color fa-2x"></i>
                    </span>{" "}
                    <span className="mx-2 profile-font-color fw-bold">
                      Category <br></br>
                      <small className="category-size "> 50000 Selected</small>
                    </span>
                  </button>
                </h2>
              </div>

              <div className="accordion-item mt-1 left-bottom-accorion">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button profile-accordion-button left-bottom-accorion collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span>
                      <i className="fas fa-star mx-2 profile-font-color fa-2x"></i>
                    </span>{" "}
                    <span className="mx-2 profile-font-color fw-bold">
                      Followers <br></br>
                      <small className="category-size ">
                        {" "}
                        20,305 followers
                      </small>
                    </span>
                  </button>
                </h2>
              </div>

              <div className="accordion-item mt-1 left-bottom-accorion">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button profile-accordion-button left-bottom-accorion collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span>
                      <i className="fas fa-wallet mx-2 profile-font-color fa-2x"></i>
                    </span>{" "}
                    <span className="mx-2 profile-font-color fw-bold">
                      Wallet <br></br>
                      {/* <small className="category-size"> 200 star</small> */}
                    </span>
                  </button>
                </h2>
              </div>

              <div className="accordion-item mt-1 left-bottom-accorion">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button profile-accordion-button left-bottom-accorion collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span>
                      <i className="fas fa-cog mx-2 profile-font-color fa-2x"></i>
                    </span>{" "}
                    <span className="mx-2 profile-font-color fw-bold">
                      Creator Studio
                    </span>
                  </button>
                </h2>
              </div>

              <div className="accordion-item mt-1 left-bottom-accorion">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button profile-accordion-button left-bottom-accorion collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span>
                      <i class="fas fa-user-cog mx-2 profile-font-color fa-2x"></i>
                    </span>{" "}
                    <span className="mx-2 profile-font-color fw-bold">
                      Setting
                    </span>
                  </button>
                </h2>
              </div>
            </div>
    );
};

export default Card1LeftsideBar;