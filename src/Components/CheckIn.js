import React, {Component} from 'react';
import axios from 'axios';

class CheckIn extends Component {

    handleClick(event) {
        this.props.history.push('checkInResults'+'/'+this.id)
    }


    render() {
        return (
            <div>
                <h1>Flight CheckIn</h1>
                <h3>Enter the Reservation ID</h3>
                <form>
                    <input type="text" onChange={(event) => {this.id = event.target.value}}/>
                    <button onClick={() => this.handleClick()}>Submit</button>
                </form>
            </div>
        )
    }
}

export default CheckIn;