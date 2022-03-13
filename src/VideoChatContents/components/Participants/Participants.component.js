import React, { useEffect, useRef } from "react";
import "./Participants.css";
import { connect } from "react-redux";
import { Participant } from "./Participant/Participant.component";
import { useState } from "react";

const Participants = (props) => {
  let customHideVedio = "";
  const videoRef = useRef(null);

  let customkey = "";
  let customcurrentParticipant = "";
  let customcurentIndex = "";
  let customhideVideo = "";
  let customshowAvatar = "";

//------------- admin cutom 

  let Admincustomkey = "";
  let AdmincustomcurrentParticipant = "";
  let AdmincustomcurentIndex = "";
  let AdmincustomhideVideo = "";
  let AdmincustomshowAvatar = "";
//------------- admin cutom 


  let participantKey = Object.keys(props.participants);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = props.stream;
      videoRef.current.muted = true;
    }
  }, [props.currentUser, props.stream]);

  const currentUser = props.currentUser
    ? Object.values(props.currentUser)[0]
    : null;

  let gridCol =
    participantKey.length === 1 ? 1 : participantKey.length <= 4 ? 2 : 4;
  const gridColSize = participantKey.length <= 4 ? 1 : 2;
  let gridRowSize =
    participantKey.length <= 4
      ? participantKey.length
      : Math.ceil(participantKey.length / 2);

  const screenPresenter = participantKey.find((element) => {
    const currentParticipant = props.participants[element];
    return currentParticipant.screen;
  });

  if (screenPresenter) {
    gridCol = 1;
    gridRowSize = 2;
  }
  const participants = participantKey.map((element, index) => {
    const currentParticipant = props.participants[element];
    const isCurrentUser = currentParticipant.currentUser;
    if (isCurrentUser) {
      return null;
    }
    const pc = currentParticipant.peerConnection;
    const remoteStream = new MediaStream();
    let curentIndex = index;
    if (pc) {
      pc.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
          remoteStream.addTrack(track);
        });
        const videElement = document.getElementById(
          `participantVideo${curentIndex}`
        );
        if (videElement) videElement.srcObject = remoteStream;
      };
    }


    if (currentParticipant?.name === "admin") {
      Admincustomkey = curentIndex;
      AdmincustomcurrentParticipant = currentParticipant;
      AdmincustomcurentIndex = curentIndex;
      AdmincustomhideVideo = `${screenPresenter && screenPresenter !== element}`;
      AdmincustomshowAvatar = `${
        !currentParticipant.video &&
        !currentParticipant.screen &&
        currentParticipant.name
      }`;
    }

    if (currentParticipant?.name === "star") {
      customkey = curentIndex;
      customcurrentParticipant = currentParticipant;
      customcurentIndex = curentIndex;
      customhideVideo = `${screenPresenter && screenPresenter !== element}`;
      customshowAvatar = `${
        !currentParticipant.video &&
        !currentParticipant.screen &&
        currentParticipant.name
      }`;
    }

    return (
      <>
        {currentParticipant?.name === "star" ||currentParticipant?.name === "admin" ? (
          <></>
        ) : (
          <>
            <div className="col-6  my-2">
              <Participant
                key={curentIndex}
                currentParticipant={currentParticipant}
                curentIndex={curentIndex}
                hideVideo={screenPresenter && screenPresenter !== element}
                showAvatar={
                  !currentParticipant.video &&
                  !currentParticipant.screen &&
                  currentParticipant.name
                }
              />
            </div>
          </>
        )}
      </>
    );
  });
  return (
    <div>
      <div className="vedio-container">
        <div className="row">
          <div className="col-md-8 img-fluid">
            {customcurrentParticipant?.name !== "star" ? (
              <div>
                <Participant
                  currentParticipant={currentUser}
                  curentIndex={participantKey.length}
                  hideVideo={screenPresenter && !currentUser.screen}
                  videoRef={videoRef}
                  showAvatar={
                    currentUser && !currentUser.video && !currentUser.screen
                  }
                  currentUser={true}
                />
              </div>
            ) : (
              ""
            )}
            <Participant
              style={{ height: "100px" }}
              key={customkey}
              currentParticipant={customcurrentParticipant}
              curentIndex={customcurentIndex}
              hideVideo={customhideVideo}
              //showAvatar={customshowAvatar}
            />
          </div>

          <div className="col-md-4 " style={{ maxHeight: "100%" }}>
            <div className="row">
              <div className="col-md-12">
                <div>
                   <Participant
            
              key={Admincustomkey}
              currentParticipant={AdmincustomcurrentParticipant}
              curentIndex={AdmincustomcurentIndex}
              hideVideo={AdmincustomhideVideo}
              //showAvatar={customshowAvatar}
            />
                </div>
            
              </div>

              {customcurrentParticipant?.name === "star" ? (
                <div className="col-6 my-2">
                  <Participant
                    currentParticipant={currentUser}
                    curentIndex={participantKey.length}
                    hideVideo={screenPresenter && !currentUser.screen}
                    videoRef={videoRef}
                    showAvatar={
                      currentUser && !currentUser.video && !currentUser.screen
                    }
                    currentUser={true}
                  />
                </div>
              ) : (
                ""
              )}

              {participants}
            </div>
          </div>
        </div>
      </div>

      <div className="vedio-container">
        <div className="flex-item-video "></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    participants: state.participants,
    currentUser: state.currentUser,
    stream: state.mainStream,
  };
};

export default connect(mapStateToProps)(Participants);
