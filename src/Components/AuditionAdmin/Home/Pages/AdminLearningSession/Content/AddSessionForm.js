import React, { useState } from 'react';
import Nav from '../Nav';
import AddSession from './AddSession';

const AddSessionForm = () => {

    const [data, setData] = useState([
        <AddSession />
    ])

    const singleInput = (
        <AddSession />
    )

    const handleAddClick = () => {
        setData([...data, singleInput])
    }

    return (
        <>
        <Nav></Nav>
            <div className="d-flex justify-content-end">
                <label className="col-sm-2 col-form-label col-form-label-sm input-text-lv-ch ">
                    <button onClick={handleAddClick} className="btn btn-info w-100 text-dark con-text-bfo" type="submit">
                        <i class="fas fa-plus mx-2"></i> Add New Post
                    </button>
                </label>
            </div>
            {
                data.map((single, i) => {
                    return (
                        <div>
                            <div key={i}>
                                {single}
                            </div>
                        </div>
                    )
                })
            }


        </>
    );
};

export default AddSessionForm;