import React, {Component} from "react";
import axios from 'axios';
import RowCreator from './RowCreator'
class displayFlights extends Component {

    state = {
        flightData : []
    }

    componentDidMount = () => {
        axios.get('http://localhost:8080/flights/?from='+this.props.match.params.from+'&to='+this.props.match.params.to+'&departureDate='+this.props.match.params.departureDate).then(
            res=>{
                this.setState({flightData : res.data})
            }
        )
    }
    //ID, FLIGHT_NUMBER, OPERATING_AIRLINES, DEPARTURE_CITY, ARRIVAL_CITY, DATE_OF_DEPARTURE, ESTIMATED_DEPARTURE_TIME
    render() {
            return (
                <div>
                    <h2>Matching Flights</h2>
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
                        {this.state.flightData.map((res, i) => <RowCreator flight={res} key={i}/>)}
                        </tbody>
                    </table>
                </div>
            )
        }
    }

export default displayFlights;