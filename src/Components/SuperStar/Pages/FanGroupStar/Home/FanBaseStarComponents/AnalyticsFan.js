import React from "react";
// import "./Analytics.css";
import vectior1 from "../../../../../../assets/images/fanGroup/Vector.png";
import vectior2 from "../../../../../../assets/images/fanGroup/Vector (1).png";
import vectior3 from "../../../../../../assets/images/fanGroup/unknown.png";
import chart from "../../../../../../assets/images/fanGroup/chart.png";
import fan from '../../../../../../assets/images/Fanbase-img/1.png'
import { Table } from "react-bootstrap";
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart }            from 'react-chartjs-2';
import { Line } from "react-chartjs-2";

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       label: "First dataset",
//       data: [33, 53, 85, 41, 44, 65],
//       fill: true,
//       backgroundColor: "rgba(75,192,192,0.2)",
//       borderColor: "rgba(75,192,192,1)"
//     },
//     {
//       label: "Second dataset",
//       data: [33, 25, 35, 51, 54, 76],
//       fill: false,
//       borderColor: "#742774"
//     }
//   ]
// };


const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  bezierCurve: false,
  datasets: [
    {
      label: "dataset",
      data: [0, 53, 85, 41, 44, 65],
      fill: true,
      // backgroundColor: "#7E1D9C",
      borderColor: "#FEF40B"
    },
       {
      label: "Second dataset",
      data: [0, 25, 35, 51, 54, 76],
      fill: true,
      borderColor: "#742774"
    }
  ]
};

const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 14
  }
};

const options = {
  title: {
    display: true,
    text: "Chart Title"
  },
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    ]
  }
};

const AnalyticsFan = () => {

return (
<div className="container my-3">
  <div className="row">
    <div className="col-md-6">
      <div className="card bg-dark mb-2">
        <div className="card-body">
          <div className="d-flex ">
            <div className="fanGroupicon  d-flex align-items-center">
              <i class="fa-solid fa-user-group fan-icon"></i>
            </div>
            <div className="graph-content w-50 mx-3">
              <small className="text-light m-0 p-0">Salman group</small>
              <h2 className="text-light m-0 p-0">150</h2>
            </div>
            <div>
              <img  type='line' src={vectior1} alt="" className="img-fluid" />
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card bg-dark">
        <div className="card-body">
          <div className="d-flex ">
            <div className="fanGroupicon  d-flex align-items-center">
              <i class="fa-solid fa-user-group fan-icon2"></i>
            </div>
            <div className="graph-content w-50 mx-3">
              <small className="text-light m-0 p-0">
                Shrukh khan group
              </small>
              <h2 className="text-light m-0 p-0">150</h2>
            </div>
            <div>
              <img src={vectior2} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="row my-3">
    <div className="container">
      <div className="card " style={{ border: "none" }}>

      {/* <Line data={data} /> */}
      <Line data={data} legend={legend} options={options} />
   
      </div>
    </div>
  </div>

  <div className="row my-3">
    <div className="container-fluid">
      <div className="card bg-dark">
        <div className="card-body">
          <h5 className="text-light">Top members</h5>

          {/* table content here */}
          <Table striped bordered hover variant="dark" style={{ fontSize:'12px' }}>
            <thead>
              <tr>
                <th>Members Name</th>
                <th>Post</th>
                <th>Comments</th>
                <th>Reactions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src={vectior3} className='img-fluid mx-1' alt="" /> Shoyib Mallick</td>
                <td>24 <i class="fa-solid fa-arrow-down text-danger mx-1"></i><span className="text-danger">21</span>
                </td>
                <td>102 <i class="fa-solid fa-arrow-up mx-1 text-success"></i> <span className="text-success">12</span>
                </td>
                <td>240 <i class="fa-solid fa-arrow-down text-danger mx-1"></i><span className="text-danger">21</span>
                </td>
              </tr>
              <tr>
                <td><img src={vectior3} className='img-fluid mx-1' alt="" /> Shoyib Mallick</td>
                <td>24

                  <i class="fa-solid fa-arrow-up mx-1 text-success"></i> <span className="text-success">12</span>

                </td>
                <td>102 <i class="fa-solid fa-arrow-up mx-1 text-success"></i> <span className="text-success">2</span>
                </td>
                <td>240
                  <i class="fa-solid fa-arrow-down text-danger mx-1"></i><span className="text-danger">12</span>

                </td>
              </tr>

              <tr>
                <td><img src={vectior3} className='img-fluid mx-1' alt="" /> Shoyib Mallick</td>
                <td>24

                  <i class="fa-solid fa-arrow-up mx-1 text-success"></i> <span className="text-success">12</span>

                </td>
                <td>102 <i class="fa-solid fa-arrow-up mx-1 text-success"></i> <span className="text-success">2</span>
                </td>
                <td>240
                  <i class="fa-solid fa-arrow-down text-danger mx-1"></i><span className="text-danger">12</span>

                </td>
              </tr>

            </tbody>
          </Table>
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export default AnalyticsFan;