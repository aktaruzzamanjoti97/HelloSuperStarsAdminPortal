import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Editor } from 'react-draft-wysiwyg'

function LiveCreateEvent() {

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
      //console.log(convertedContent);
    };

  return (
    <div>
            <div className="my-2">
        <form>
          <div className="row ms-5">
            <div class="form-group row mt-3">
              <label for="staticEmail" class="col-sm-2 col-form-label text-light ">
                Create Event
              </label>
              <div class="col-sm-8">
                <input type="text" class="form-control Frombtns" placeholder="Guitar for the beginners" />
              </div>
            </div>

            <div class="form-group row mt-3">
              <label for="inputPassword" class="col-sm-2 col-form-label text-light ">
                Description
              </label>
              <div class="col-sm-8">
                <Editor editorState={EditorState} onEditorStateChange={handleEditorChange}
                  wrapperClassName="wrapper-class" editorClassName="editor-class" toolbarClassName="toolbar-class" />
              </div>
            </div>

            <div class="form-group row mt-3">
              <label for="inputPassword" class="col-sm-2 col-form-label text-light "></label>
              <div class="col-sm-4 mb-2">
                <input type="text" class="form-control Frombtns" placeholder="SuperStar Name 01" />
              </div>
              <div class="col-sm-4 mb-2">
                <Form.Select aria-label="Default select example" className="Frombtns">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>

            <div class="form-group row mt-3">
              <label for="inputPassword" class="col-sm-2 col-form-label text-light "></label>
              <div class="col-sm-4 mb-2">
                <input type="text" class="form-control Frombtns" placeholder="SuperStar Name 01" />
              </div>
              <div class="col-sm-4 mb-2">
                <Form.Select aria-label="Default select example" className="Frombtns">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>

            <div class="form-group row mt-3">
              <label for="inputPassword" class="col-sm-2 col-form-label text-light "></label>
              <div class="col-sm-4 mb-2">
                <input type="text" class="form-control Frombtns" placeholder="SuperStar Name 01" />
              </div>
              <div class="col-sm-4 mb-2">
                <Form.Select aria-label="Default select example" className="Frombtns">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>

            <div class="form-group row mt-3">
              <label for="staticEmail" class="col-sm-2 col-form-label text-light ">
                Upload File
              </label>

              <div class="col-sm-4 mb-2">
                <div className="row my-4">
                  <div className="col-md-2 text-white">
                    <img src={file} className="img-fluid avatar-img-src" alt="" />
                  </div>
                  <div className="col-md-10">
                    <input type="file" name="file" id="file" className="inputfile w-25" onChange={(e)=>
                    handleChange(e.target.files)}
                    />
                    <label for="file">
                      <i class="fas fa-cloud-upload-alt"></i> Upload Banner
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 mb-2">
                <div className="row my-4">
                  <div className="col-md-2 text-white">
                    <img src={fileVideo} className="img-fluid avatar-img-src" alt="" />
                  </div>
                  <div className="col-md-10">
                    <input type="file" name="file" id="setFile" className="inputfile w-25" onChange={(e)=>
                    handleVideoChange(e.target.files)}
                    />
                    <label for="setFile">
                      <i class="fas fa-cloud-upload-alt"></i> Upload Video
                    </label>
                  </div>
                </div>
              </div>

            </div>

            <div className="row justify-content-end mb-4">
              <div className="col-md-3 text-left"><button className="btn btn-warning mx-4">Confirm</button></div>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default LiveCreateEvent
