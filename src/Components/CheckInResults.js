import React, {Component} from 'react';
import axios from 'axios';
import CheckIn from "./CheckIn";

class CheckInResults extends Component {

    state = {
        flightData : [],
        passengerData : []
    }

    componentDidMount = () => {
        axios.get("http://localhost:8080/reservation/"+this.props.match.params.id).then(
            res=>{
                this.setState({flightData : res.data.flight, passengerData : res.data.passenger})
                console.log(this.state.flightData)
                console.log(this.state.passengerData)
            }
        )
    }


    render() {
        return (
            <div>
                <h1>Passenger Details</h1>
                <center>
                <table>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>{this.state.passengerData.firstName}</td>
                        </tr>
                        <tr>
                            <td>Middle Name</td>
                            <td>{this.state.passengerData.lastName}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{this.state.passengerData.lastName}</td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td>{this.state.passengerData.email}</td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td>{this.state.passengerData.phone}</td>
                        </tr>
                    </tbody>
                </table>
                <h1>Flight Details</h1>
                <table>
                    <tbody>
                    <tr>
                        <td>Operating Airline</td>
                        <td>{this.state.flightData.operatingAirlines}</td>
                    </tr>
                    <tr>
                        <td>Flight Number</td>
                        <td>{this.state.flightData.flightNumber}</td>
                    </tr>
                    <tr>
                        <td>Departure City</td>
                        <td>{this.state.flightData.departureCity}</td>
                    </tr>
                    <tr>
                        <td>Arrival City</td>
                        <td>{this.state.flightData.arrivalCity}</td>
                    </tr>
                    <tr>
                        <td>Departure Date</td>
                        <td>{this.state.flightData.dateOfDeparture}</td>
                    </tr>
                    <tr>
                        <td>Departure Time</td>
                        <td>{this.state.flightData.estimatedDepartureTime}</td>
                    </tr>
                    </tbody>
                </table>
                </center>
            </div>
        )
    }
}

export default CheckInResults;