import React from "react";
import { Card, ListGroup } from "react-bootstrap";
// import demo from "../../../../../assets/images/pendingIcons/demo.png";
import demo from "../../assets/images/pendingIcons/demo.png";

function JuryJudgeListItem({ data, type = null }) {
  return (
    <>
      {type === "admin" ? (
        <ListGroup.Item className="d-flex juryItem justify-content-center">
          <img
            className="demoStar"
            src={
              data.admin?.image != null
                ? `http://localhost:8000/${data.admin?.image}`
                : demo
            }
            alt=""
          />
          <div className="mx-2">
            <h6 className="text-light">
              {data.admin?.first_name} {data.admin?.last_name}
            </h6>
            <p className="text-light">{data.admin?.category?.name}</p>
          </div>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item className="d-flex juryItem justify-content-center">
          <img
            className="demoStar"
            src={
              data.user?.image != null
                ? `http://localhost:8000/${data.user?.image}`
                : demo
            }
            alt=""
          />
          <div className="mx-2">
            <h6 className="text-light">
              {data.user?.first_name} {data.user?.last_name}
            </h6>
            <p className="text-light">{data.user?.category?.name}</p>
          </div>
        </ListGroup.Item>
      )}
    </>
  );
}

export default JuryJudgeListItem;
