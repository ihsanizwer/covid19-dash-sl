import React from 'react';
import logo from './virus.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Container, Row, Col, Card} from 'react-bootstrap';

const axios = require('axios');
var newCases =0, deaths=0, totalCases=0, investigating =0, recovered =0, activeCases =0;



function updateVars(newcase, death, totalCase, invest, recover, active){
  newCases = newcase;
  deaths = death;
  totalCases = totalCase;
  investigating = invest;
  recovered = recover;
  activeCases = active
}
function initParams() {
  axios.get('https://www.hpb.health.gov.lk/api/get-current-statistical').then(resp => {
    let {data: {local_new_cases, local_total_cases, local_total_number_of_individuals_in_hospitals, local_deaths, local_recovered, local_active_cases, global_total_cases, global_deaths, global_recovered}} = resp.data;
    //updateVars(local_new_cases, local_deaths, local_total_cases, local_total_number_of_individuals_in_hospitals, local_recovered, local_active_cases);
    document.getElementById("investigating").innerHTML = local_total_number_of_individuals_in_hospitals;
    document.getElementById("totalCases").innerHTML = local_total_cases;
    document.getElementById("newCases").innerHTML = local_new_cases;
    document.getElementById("recovered").innerHTML = local_recovered;
    document.getElementById("deaths").innerHTML = local_deaths;
    document.getElementById("activeCases").innerHTML = local_active_cases;
    document.getElementById("g-total").innerHTML = global_total_cases;
    document.getElementById("g-rec").innerHTML = global_recovered;
    document.getElementById("g-death").innerHTML = global_deaths;
  });
}
//alert(JSON.parse(raw));



function App() {
  setTimeout(initParams(),500);
  return (

    <div className="App">
      <div className="App-Content">
        <div className="container">
          <Row >
            <Col className="col-sm">
              <Card className="shadow-lg rounded investigating myCon">
                <Card.Body className="d-flex flex-column">
                  <Card.Subtitle className="Subtitle">
                    Investigating
                  </Card.Subtitle>
                  <Card.Text className="font-weight-bold MyTitle" id="investigating">

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-sm">
              <Card className="shadow-lg rounded confirmed myCon">
                <Card.Body className="d-flex flex-column">
                  <Card.Subtitle className="Subtitle">
                    Confirmed
                  </Card.Subtitle>
                  <Card.Text className="font-weight-bold MyTitle" id="totalCases">

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-sm">
              <Card className="shadow-lg rounded newCases myCon">
                <Card.Body className="d-flex flex-column">
                  <Card.Subtitle className="Subtitle">
                    New cases
                  </Card.Subtitle>
                  <Card.Text className="font-weight-bold MyTitle" id="newCases">

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-sm">
              <Card className="shadow-lg rounded recovered myCon">
                <Card.Body className="d-flex flex-column">
                  <Card.Subtitle className="Subtitle">
                    Recovered
                  </Card.Subtitle>
                  <Card.Text className="font-weight-bold MyTitle" id="recovered">

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-sm">
              <Card className="shadow-lg rounded deaths myCon">
                <Card.Body className="d-flex flex-column">
                  <Card.Subtitle className="Subtitle">
                    Deaths
                  </Card.Subtitle>
                  <Card.Text className="font-weight-bold MyTitle" id="deaths">

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-sm">
              <Card className="shadow-lg rounded active myCon">
                <Card.Body className="d-flex flex-column">
                  <Card.Subtitle className="Subtitle">
                    Active Cases
                  </Card.Subtitle>
                  <Card.Text className="font-weight-bold MyTitle" id="activeCases">

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


          </Row>
          <Row >

            <Col className="col-md">
              <Card className="shadow-lg rounded global myCon">
                <Card.Body className="d-flex flex-column">
                  <Card.Subtitle className="Subtitle">
                    Global Total
                  </Card.Subtitle>
                  <Card.Text className="font-weight-bold MyTitle" id="g-total">

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-md">
              <Card className="shadow-lg rounded global myCon">
                <Card.Body className="d-flex flex-column">
                  <Card.Subtitle className="Subtitle">
                    Global Deaths
                  </Card.Subtitle>
                  <Card.Text className="font-weight-bold MyTitle" id="g-death">

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-md">
              <Card className="shadow-lg rounded global myCon">
                <Card.Body className="d-flex flex-column">
                  <Card.Subtitle className="Subtitle">
                    Global Recovered
                  </Card.Subtitle>
                  <Card.Text className="font-weight-bold MyTitle" id="g-rec">

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


          </Row>
        </div>
      </div>

      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CoronaVirus Live Stats obtained from:       <a
            className="App-link"
            href="https://www.hpb.health.gov.lk/en"
            target="_blank"
            rel="noopener noreferrer"
        >
          Health Promotion Bureau
        </a>
        </p>

      </footer>
      <script type="text/javascript">

      </script>
    </div>


  );
}

export default App;
