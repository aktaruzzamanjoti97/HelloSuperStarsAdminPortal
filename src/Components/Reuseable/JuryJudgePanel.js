import React from 'react';
import { Card, ListGroup } from "react-bootstrap";
// import star from "../../../../../assets/images/pendingIcons/star.png";
import star from "../../assets/images/pendingIcons/star.png";
import JuryJudgeListItem from './JuryJudgeListItem';

function JuryJudgePanel({img,title,data,type =null}) {
    console.log('--------',data)
    return (
       <>
             <div className="col-md-4  d-flex justify-content-center align-items-center">
                <Card style={{ width: "18rem" }} className="my-5">
                  <ListGroup variant="flush">

                    <ListGroup.Item className="juryFeatured text-center">
                      <img src={img} alt="" /> {title}
                    </ListGroup.Item>

                    {data && data.map((judge)=>(
                      <JuryJudgeListItem type={type} data={judge}/>
                    ))}

                  
                  
                  </ListGroup>
                </Card>
              </div>
       </> 
    )
}

export default JuryJudgePanel
