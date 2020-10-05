import React from 'react';
import { Link } from 'react-router-dom';
const rowCreator = (props) =>{
    return (
        <tr>
            <td>{props.flight.flightNumber}</td>
            <td>{props.flight.operatingAirlines}</td>
            <td>{props.flight.departureCity}</td>
            <td>{props.flight.arrivalCity}</td>
            <td>{props.flight.dateOfDeparture}</td>
            <td>{props.flight.estimatedDepartureTime}</td>
            <td><Link to={'/passengerDetails/'+props.flight.id}>SELECT</Link></td>
        </tr>
    )
}

export default rowCreator;