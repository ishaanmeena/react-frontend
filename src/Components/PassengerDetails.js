import React, {Component} from "react";
import axios from 'axios';

class PassengerDetails extends Component {

    state = {
        flightData : [],
    }

    componentDidMount = () => {
        axios.get("http://localhost:8080/flights/"+this.props.match.params.flightId).then(
            res=>{
                this.setState({flightData : res.data})
            }
        )
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            flightId : this.props.match.params.flightId,
            passengerFirstName : this.passengerFirstName,
            passengerMiddleName : this.passengerMiddleName,
            passengerLastName : this.passengerLastName,
            passengerEmail : this.passengerEmail,
            passengerPhone : this.passengerPhone
        }
        axios.post("http://localhost:8080/reservation",data)
            .then(res=>{
            this.props.history.push('/confirmReservation/'+res.data.id)
        })
    }

    render () {
        return (
            <div>
                <h1>Flight Booking System</h1>
                <h3>Flight Details</h3>
                <center>
                <table>
                    <thead>
                    <tr>
                        <th>
                            OPERATING_AIRLINES
                        </th>
                        <th>
                            DEPARTURE_CITY
                        </th>
                        <th>
                            ARRIVAL_CITY
                        </th>
                        <th>
                            DATE_OF_DEPARTURE
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.flightData.operatingAirlines}</td>
                            <td>{this.state.flightData.departureCity}</td>
                            <td>{this.state.flightData.arrivalCity}</td>
                            <td>{this.state.flightData.dateOfDeparture}</td>
                            <td>{this.state.flightData.estimatedDepartureTime}</td>
                        </tr>
                    </tbody>
                </table>
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <label htmlFor="firstName">First Name</label>
                            </td>
                            <td>
                                <input id="firstName" type="text" onChange={(event) =>{this.passengerFirstName = event.target.value}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="middleName">Middle Name</label>
                            </td>
                            <td>
                                <input id="middleName" type="text" placeholder="Optional" onChange={(event) =>{this.passengerMiddleName = event.target.value}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="lastName">Last Name</label>
                            </td>
                            <td>
                                <input id="lastName" type="text" onChange={(event) =>{this.passengerLastName = event.target.value}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="email">Email</label>
                            </td>
                            <td>
                                <input id="email" type="text" onChange={(event) =>{this.passengerEmail = event.target.value}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="phone">Phone</label>
                            </td>
                            <td>
                                <input id="phone" type="text" onChange={(event) =>{this.passengerPhone = event.target.value}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="cardNumber">Card Number</label>
                            </td>
                            <td>
                                <input id="cardNumber" type="text" onChange={(event) =>{this.cardNumber = event.target.value}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="expDate">Expiry Date</label>
                            </td>
                            <td>
                                <input id="expDate" type="text" placeholder="MM/YY" onChange={(event) =>{this.expirationDate = event.target.value}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="cvv">CVV</label>
                            </td>
                            <td>
                                <input id="cvv" type="text" placeholder="XXX" onChange={(event) =>{this.securityCode = event.target.value}}/>
                            </td>
                        </tr>
                        <tr>
                            <td></td><td><button onClick={this.handleSubmit.bind(this)}>Submit</button></td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                </center>
            </div>
        )
    }
}

export default PassengerDetails;