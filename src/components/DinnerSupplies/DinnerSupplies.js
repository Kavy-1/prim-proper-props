import React, { Component } from 'react';
class DinnerSupplies extends Component{
    state = {
        guestList: []
    }
    render() {
        console.log(this.state.guestList);
        return (

<div>
    <div>
    Spoons: {this.props.count * 2}
    </div>
    <div>
    Forks: {this.props.count * 2}
    </div>
    <div>
    Knives: {this.props.count * 2}
    </div>
 </div>
                    
        );
    } 
}

export default DinnerSupplies;