import React from 'react';
import { Button } from 'react-bootstrap';
import './SuperstarList.css'

const SuperstarList = ({ star }) => {
    return (
        <div>
            <div className="rounded box-style" style={{}}>
                <img
                    style={{ height: "180px", width: "100%" }}
                    src={star.imageURL}
                    alt=""
                />
                <div style={{ margin: "15px", padding: "15px" }} className="w-60">
                    <h4>{star.name}</h4>
                    <p>Small Area: $ {star.occupation}</p>
                  
                    <Button variant="warning">Details</Button>
                </div>
            </div>
        </div>
    );
};

export default SuperstarList;