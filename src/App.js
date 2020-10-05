import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import FindFlights from "./Components/FindFlights";
import PassengerDetails from "./Components/PassengerDetails";
import DisplayFlights from "./Components/DisplayFlights";
import ConfirmReservation from "./Components/ConfirmReservation";
import CheckIn from "./Components/CheckIn";
import CheckInResults from "./Components/CheckInResults";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={FindFlights}/>
          <Route exact path="/passengerDetails/:flightId" component={PassengerDetails}/>
          <Route exact path="/displayFlights/:from/:to/:departureDate" component={DisplayFlights}/>
          <Route exact path="/confirmReservation/:reservationId" component={ConfirmReservation}/>
          <Route exact path="/checkIn/" component={CheckIn}/>
          <Route exact path="/checkInResults/:id" component={CheckInResults}/>
      </Switch>
    </div>
  );
}

export default App;
