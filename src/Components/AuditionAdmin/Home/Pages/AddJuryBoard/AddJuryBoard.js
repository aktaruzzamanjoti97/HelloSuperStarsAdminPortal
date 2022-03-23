import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./";
import { Link } from "react-router-dom";
import AddUser from "../../../../../assets/images/AddUser/AddUser.png";
import avatarImage from "../../../../../assets/images/profileAvatar/Avater.png";
import "./AddJuryBoard.css";
import AddJuryBoardModal from "./AddJuryBoardModal/AddJuryBoardModal";
import axios from "axios";
import swal from "sweetalert";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";

const AddJuryBoard = () => {
  const [filem, setFilem] = useState([]);

  function deleteFile(e) {
    const s = filem.filter((item, index) => index !== e);
    setFilem(s);
    console.log(s);
  }

  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState("");
  const [starList, setStarList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [users, setUser] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [category, setCategory] = useState([]);
  const [imagedata, setImagedata] = useState("");

  const [registerInput, setRegister] = useState({
    first_name: "",
    last_name: "",
    subcategory_id: "",
    error_list: [],
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const selectState = (e) => {
    let value = e.target.value;
    var data = value;

    axios.get(`/api/fetch-subcategory/${data}`).then((res) => {
      // console.log(res.data.category);
      if (res.status === 200) {
        setSubcategory(res.data.category);
      }
      setLoading(false);
    });

    setCategory(data);
  };

  const handleChange = (file) => {
    setFile(URL.createObjectURL(file[0]));
    setImagedata(file[0]);

    console.log("image single", imagedata);
  };

  // Editor Funtionalities //
  const [convertedContent, setConvertedContent] = useState(null);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };
  // End Editor Functionalies //

  // Fetch Stars Added By Admin
  useEffect(() => {
    axios.get(`/api/admin/star_list`).then((res) => {
      if (res.status === 200) {
        setStarList(res.data.category);
        //console.log(res.data.category);
      }
      setLoading(false);
    });

    axios.get(`/api/view-category`).then((res) => {
      //   console.log(res.data.category);
      if (res.status === 200) {
        setUser(res.data.category);
      }
    });
  }, []);

  var stars = "";

  if (loading) {
    return <h1>...</h1>;
  } else {
    stars = starList.map((star, index) => (
      <span className="col-md-2">
        <Card.Body
          className="border border-warning mb-2"
          style={{ background: "#000000", borderRadius: "10px" }}
        >
          <div className="avatar-img my-3 text-center">
            <img
              src={`http://localhost:8000/${star.image}`}
              className="img-fluid avatar-img-src"
              alt="profile-pic"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="text-center my-2">
            <h5
              className="text-white text-center"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {star.first_name} {star.last_name}
            </h5>
            <p className="text-white">Actress</p>
            <div className="parent-div">
              <Link to={`/superstar-admin/agreement-paper/${star.id}`}>
                <button className="btn btn-warning btn-upload">
                  <i className="fas fa-calendar-day mx-2"></i>
                  Details
                </button>
              </Link>
            </div>
          </div>
        </Card.Body>
      </span>
    ));
  }

  const registerSubmit = (e) => {
    e.preventDefault();

    const fData = new FormData();

    fData.append("image", imagedata);
    fData.append("first_name", registerInput.first_name);
    fData.append("last_name", registerInput.last_name);
    fData.append("category_id", category);
    fData.append("subcategory_id", registerInput.subcategory_id);
    fData.append("terms&condition", convertedContent);

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/star_register`, fData).then((res) => {
        if (res.data.status === 200) {
          swal("Success", res.data.message, "success");
          setModalShow(false);
          setRegister([]);
          setImagedata("");

          axios.get(`/api/admin/star_list`).then((res) => {
            if (res.status === 200) {
              setStarList(res.data.category);
            }
          });
        } else {
          setRegister({
            ...registerInput,
            error_list: res.data.validation_errors,
          });
        }
      });
    });
  };

  return (
    <>
      <div>
        <Card
          className="border border-warning"
          style={{ width: "12rem", background: "#343434" }}
        >
          <Card.Body>
            <div className="avatar-img my-3 text-center">
              <img
                src={AddUser}
                className="img-fluid avatar-img-src"
                alt="profile-pic"
              />
            </div>
            <div className="text-center my-2">
              <div className="parent-div">
                <button
                  onClick={() => setModalShow(true)}
                  className="btn btn-warning btn-upload"
                >
                  Add New
                </button>
                {/* <input type="file" className="btn" onChange={handleChange} /> */}
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="modalBg">
            <div className="d-flex justify-content-end">
              <Button onClick={() => setModalShow(false)}>X</Button>
            </div>

            <div>
              <h1 className="text-center text-white">
                Star Profile Registration
              </h1>
            </div>
            <div className="">
              <form
                onSubmit={registerSubmit}
                id="input_form"
                encType="multipart/form-data"
              >
                <div className="row">
                  <div className="form-group mb-3">
                    <div className="row mx-auto mb-3">
                      <div className="d-flex justify-content-center">
                        <div className="col-md-10">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="my-2">
                                <big style={{ color: "#f5e445" }}>
                                  First Name
                                </big>
                                <input
                                  type="text"
                                  className="form-control reply-control input-overlay"
                                  onChange={handleInput}
                                  name="first_name"
                                  value={registerInput.first_name}
                                />
                              </div>

                              <div className="my-2">
                                <big style={{ color: "#f5e445" }}>
                                  Last Name
                                </big>
                                <input
                                  type="text"
                                  className="form-control reply-control input-overlay"
                                  onChange={handleInput}
                                  name="last_name"
                                  value={registerInput.last_name}
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="avatar-img my-3 text-center">
                                <img
                                  src={file === "" ? avatarImage : file}
                                  className="img-fluid avatar-img-src"
                                  alt="profile-pic"
                                />
                              </div>
                              <div className="upload-input text-center my-2">
                                <div className="parent-div">
                                  <button className="btn btn-dark btn-upload">
                                    Upload Profile Picture
                                  </button>
                                  <input
                                    type="file"
                                    className="btn"
                                    onChange={(e) =>
                                      handleChange(e.target.files)
                                    }
                                    id="image"
                                    name="image"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mx-auto mb-3">
                      <div className="d-flex justify-content-center">
                        <div className="col-md-10">
                          <div className="row">
                            <div className="col-md-6">
                              <big style={{ color: "#f5e445" }}>
                                Select Category
                              </big>

                              <select
                                onChange={selectState}
                                className="form-control reply-control input-overlay"
                                id="category_id"
                                name="category_id"
                                value={registerInput.category_id}
                              >
                                <option className="text-whaite" value="">
                                  Choose One
                                </option>
                                {users.map((user, index) => (
                                  <option
                                    className="text-whaite"
                                    value={user.id}
                                  >
                                    {user.name}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="col-md-6">
                              <big style={{ color: "#f5e445" }}>
                                Select Sub Category
                              </big>

                              <select
                                onChange={handleInput}
                                className="form-control reply-control input-overlay"
                                name="subcategory_id"
                                value={registerInput.subcategory_id}
                              >
                                <option className="text-whaite" value="">
                                  Choose One
                                </option>
                                {subcategory.map((user, index) => (
                                  <option
                                    className="text-white"
                                    value={user.id}
                                  >
                                    {user.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mx-auto my-3">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="col-md-10">
                          <big style={{ color: "#f5e445" }}>
                            Terms and Conditions
                          </big>
                          <Editor
                            editorState={editorState}
                            onEditorStateChange={handleEditorChange}
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            toolbarClassName="toolbar-class"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mx-auto my-3">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="col-md-10">
                          <big style={{ color: "#f5e445" }}>
                            Star Profile File
                          </big>
                          <input
                            type="file"
                            className="form-control reply-control input-overlay"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mx-auto my-3">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="col-md-10">
                          <big style={{ color: "#f5e445" }}>
                            Star Profile File
                          </big>
                          <input
                            type="file"
                            className="form-control reply-control input-overlay"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group preview">
                      {filem.length > 0 &&
                        filem.map((item, index) => {
                          return (
                            <div key={item}>
                              <img src={item} alt="" />
                              <button
                                type="button"
                                onClick={() => deleteFile(index)}
                              >
                                delete
                              </button>
                            </div>
                          );
                        })}
                    </div>




                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className=" btn btn-warning w-25">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      <div
        style={{ background: "#343434" }}
        className="border border-warning mt-4 row"
      >
        {/* <div className="row">
                   {
                       dummyData.map(star => <SuperstarList star={star}/>)d
                   }
               </div> */}
        <div className="p-4 row col-12">{stars}</div>
      </div>
    </>
  );
};

export default AddJuryBoard;
