import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AdminAuditionNav from "../AdminAuditionNav/AdminAuditionNav";

const ParticipantList = () => {

const [participantList, setParticipantList] = useState([]);

useEffect(()=>{
    axios.get("/api/audition-admin/participant/list").then((res)=>{
        if(res.data.status === 200){
            console.log('list',res.data.participantList)
            setParticipantList(res.data.participantList)
        }
    })
},[])
    
  return (
    <>
      <AdminAuditionNav />
      <div className="liveMeetupBorder my-5">
        <div className="d-flex px-4 pt-3">
          <div className="faTrophy">
            <i class="fas fa-trophy"></i>
          </div>
          <h4 className="mx-3 text-white p-2">Participant List</h4>
        </div>

        <div className="pb-3">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#SL</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Audition Title</th>
                <th>Start - End</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            {participantList.map((participant,index)=>(
                <tr>
                <td>{index+1}</td>
                <td>{participant.user.first_name} {participant.user.last_name}</td>
                <td>{participant.user.phone}</td>
                <td>{participant.user.email}</td>
                <td>{participant.auditions.title}</td>
                <td>{moment(participant.auditions.start_time).format('LL')} - {moment(participant.auditions.end_time).format('LL')} </td>
                <td>{participant.accept_status == 1?"Accepted":"Rejected"}</td>
              </tr>
            ))}
              
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ParticipantList;
