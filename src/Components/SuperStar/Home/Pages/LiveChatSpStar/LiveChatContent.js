import React from 'react'
import { Tabs,Tab,} from 'react-bootstrap'
import AddSession from './Content/AddSession'
import LiveNow from './Content/LiveNow'
import PendingSessions from './Content/PendingSession'
import Star from '../../../../../assets/images/star.png'

const LiveChatContent = () => {
return (
<>
    <div className="row">
        <Tabs defaultActiveKey="LiveNow" transition={false} id="noanim-tab-example" className="mb-3">

            <Tab eventKey="LiveNow" title="Live Now">

                <div eventKey="LiveNow" title="Live Now" className="col-md-3 align-items-center justify-content-center ">
                    <div className="card ad-card SH-CARD-TSX">
                        <div className="card-body  align-items-center">
                            <center>
                                <tr>
                                    <td className="ad-card-td">
                                        <img src={Star} className="ad-card-img-top"
                                            alt="..." />
                                    </td>
                                    <td className="ad-card-td">
                                        <small className="ad-card-small">01</small>
                                    </td>
                                </tr>
                            </center>
                        </div>
                        <button className="card-footer ad-card-footer" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Live Now
                        </button>
                    </div>
                </div>
                <br />
                <LiveNow/>
            </Tab>

            <Tab eventKey="PendingSession" title="Pending Session">
                <div className="col-md-3 align-items-center justify-content-center ">
                    <div className="card ad-card SH-CARD-TSX">
                        <div className="card-body  align-items-center">
                            <center>
                                <tr>
                                    <td className="ad-card-td">
                                        <img src={Star} className="ad-card-img-top"
                                            alt="..." />
                                    </td>
                                    <td className="ad-card-td">
                                        <small className="ad-card-small">10</small>
                                    </td>
                                </tr>
                            </center>
                        </div>
                        <button className="card-footer ad-card-footer" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Pending Session
                        </button>
                    </div>
                </div>
                <br />
                <PendingSessions/>
            </Tab>

            <Tab eventKey="AddSession" title="Add Session">

                <div className="col-md-3 align-items-center justify-content-center ">
                    <div className="card ad-card SH-CARD-TSX">
                        <div className="card-body  align-items-center">
                            <center>
                                <tr>
                                    <td className="ad-card-td">
                                        <img src={Star} className="ad-card-img-top"
                                            alt="..." />
                                    </td>
                                    <td className="ad-card-td">
                                        <small className="ad-card-small">100</small>
                                    </td>
                                </tr>
                            </center>
                        </div>
                        <button className="card-footer ad-card-footer" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Add
                            Session</button>
                    </div>
                </div>
                <br />
                <AddSession/>

            </Tab>

        </Tabs>
    </div>
</>
)
}

export default LiveChatContent