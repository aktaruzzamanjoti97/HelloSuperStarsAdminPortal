import React from 'react';
import { Link } from 'react-router-dom';
import './AdminGreetingsForm.css'

const AdminGreetingsForm = () => {
    return (
        <div className="greetingsFormBorder">
            <div className="greetingsPadding">
                <div className="d-flex">
                    <div className="addIconGreetings">
                        <i style={{ color: '#ffc107' }} class="far fa-plus-square mx-2"></i>
                    </div>
                    <h3 className="text-warning text-bold">Create default greetings profile</h3>
                </div>
                <form action="">
                    <div className="row my-4">
                        <div className="col-md-2 text-white">
                            <p><big>Title</big></p>
                        </div>
                        <div className="col-md-10">
                            <input className="form-control input-gray" type="text" />
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-md-2 text-white">
                            <p><big>Description</big></p>
                        </div>
                        <div className="col-md-10">
                            <textarea className="form-control input-gray" type="text" />
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-2 text-white">
                            <p><big>Cost</big></p>
                        </div>
                        <div className="col-md-2">
                            <input className="form-control input-gray" type="text" />
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-2 text-white">
                            <p><big>Upload Banner</big></p>
                        </div>
                        <div className="col-md-10">
                            <input type="file" name="file" id="file" className="inputfile" />
                            <label for="file"><i class="fas fa-cloud-upload-alt"></i> Upload</label>

                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-2 text-white">
                            <p><big>Upload Video</big></p>
                        </div>
                        <div className="col-md-10">
                            <input type="file" name="file" id="file" className="inputfile" />
                            <label for="file"><i class="fas fa-cloud-upload-alt"></i> Upload</label>
                        </div>
                    </div>

                    <div className="my-3">
                    <Link to="/superstar-admin/greetings/details">
                        <button className="btn btn-warning save-greetings-button">Save</button>
                    </Link>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminGreetingsForm;