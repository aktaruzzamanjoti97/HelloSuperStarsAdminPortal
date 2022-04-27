import React from 'react'
import {ListGroup } from "react-bootstrap";

function JuryJudgeTitle({data}) {
    return (
        <>
        <ListGroup.Item className="juryFeatured text-center">
        <img src="" alt="" /> {data.user.first_name+' '+data.user.last_name}
      </ListGroup.Item>
      </>
    )
}

export default JuryJudgeTitle
