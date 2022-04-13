import React, { useEffect, useState } from "react";
import "./FanBaseHome.css";
import fan from "../../../../assets/images/Fanbase-img/unsplash_sYhUhse5uT8.png";
import meme from "../../../../assets/images/Fanbase-img/meme.png";
import meme2 from "../../../../assets/images/Fanbase-img/meme2.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from 'moment';
import ReactPlayer from "react-player";

const FanBaseHome = () => {

  let { slug } = useParams();

  const [allFanPost, setAllFanPost] = useState([]);
  console.log('allFanPost ', allFanPost)

  useEffect(() => {
    axios.get(`/api/admin/fan/group/show/${slug}`).then((res) => {
      if (res.status === 200) {
        setAllFanPost(res.data.allFanPost);
      }
    });
  }, [slug]);
  
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

            {allFanPost.map((post, i) => (
              <div className="card bg-dark postFancard my-4">
                <div className="card-body">
                  <div className="d-flex">
                    <img src={`http://localhost:8000/${post.user?.image}`} className="img-fluid mx-2 hasImg" alt="" />
                    <div className=" w-75">
                      <h6 className="m-0">{post.user?.first_name} {post.user?.last_name}</h6>
                      <small style={{ color: "#A7A7A7" }}>
                        <span>{moment(post.created_at).format('LT')} </span> <span className="mx-2">{moment(post.created_at).format('LL')}</span>{" "}
                        <span>{ post.star_name }</span>
                      </small>
                    </div>
                  </div>

                  <div className="container my-2">
                    <img src={`http://localhost:8000/${post.image}`} className="img-fluid w-100" alt="" />
                    <center>
                <ReactPlayer className='form-control VideoPlays'
                  url="https://www.youtube.com/watch?v=LRtEJPSj2-8"
                  autoplay
                  controls="true"
                />
              </center>
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
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default FanBaseHome;
