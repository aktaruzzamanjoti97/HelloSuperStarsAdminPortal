import React from "react";
// import Card from "../../Shared/Card/Card.component";
import { faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Participant.css";
import CardVideoCall from "../../Shared/Card/CardVideoCall.component";

export const Participant = (props) => {
  const {
    curentIndex,
    currentParticipant,
    hideVideo,
    videoRef,
    showAvatar,
    currentUser,
  } = props;
  if (!currentParticipant) return <></>;
  return (
    // className={`${currentParticipant.name === "star"? `${currentUser?'flex-item-video':'flex-item-video-star'}` :"flex-item-video"}`}
    <div  >
      <CardVideoCall>
        <video
        style={currentParticipant.name==='star'?{height:'70vh'}:currentParticipant.name==='admin'?{height:'30vh'}:null}
          ref={videoRef}
          className="video"
          id={`participantVideo${curentIndex}`}
          autoPlay
          playsInline
        ></video>
        {!currentParticipant.audio && (
          <FontAwesomeIcon
            className="muted"
            icon={faMicrophoneSlash}
            title="Muted"
          />
        )}
        {showAvatar && (
          <div
            style={{ background: currentParticipant.avatarColor }}
            className="avatar"
          >
            {currentParticipant.name[0]}
          </div>
        )}
        <div className="name">
          {currentParticipant.name}
          {currentUser ? "(You)" : ""}
        </div>
      </CardVideoCall>
    </div>
  );
};
