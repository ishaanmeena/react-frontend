import React, {Component} from "react";

class findFlights extends Component {

    handleSubmit = (event) => {
        this.props.history.push('displayFlights'+'/'+this.from+'/'+this.to+'/'+this.departureDate)
    }
    render() {
        return (
            <div>
                <h1>Flight Booking System</h1>
                <h3>Find Flights</h3>
                <center>
                    <form>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="from">From</label></td>
                                    <td><input id="from" type="text" onChange={(event => {this.from = event.target.value})}/></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="to">To</label></td>
                                    <td><input id="to" type="text" onChange={(event => {this.to = event.target.value})}/></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="departureDate">Departure Date</label></td>
                                    <td><input id="departureDate" type="text" onChange={(event => {this.departureDate = event.target.value})}/></td>
                                </tr>
                                <tr>
                                    <td>

                                    </td>
                                    <td>
                                        <center><button type="submit" name="Search" onClick={this.handleSubmit.bind(this)}>Search</button></center>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </center>
            </div>
        )
    }
}

export default findFlights;