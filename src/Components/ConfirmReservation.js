import React, {Component} from "react";

class confirmReservation extends Component {
    render(){
        return (
            <div>
                <h1>Confirmation Details</h1>
                <h3>The confirmation code is {this.props.match.params.reservationId}</h3>
            </div>
            )
    }
}

export default confirmReservation;