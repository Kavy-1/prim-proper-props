import React, { Component } from 'react';
import './App.css';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies'
import GuestList from '../GuestList/GuestList';
import GuestForm from '../GuestForm/GuestForm';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

class App extends Component {
  state = {
    guestList: [],
    newGuest: {
      name: '',
      kidsMeal: 'no',
    },
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newGuest: {
        ...this.state.newGuest,
        [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.newGuest.name) {
        this.setState({
        guestList: [...this.state.guestList, this.state.newGuest],
        newGuest: {
            name: '',
            kidsMeal: 'no',
        },
        });
    } else {
        alert('The new guest needs a name!');
    }
  }

  render() {
    console.log(this.state.guestList);
    return (
      <div className="App">
        <Header />
        <h2>Party Leader</h2>
        {this.state.guestList[0] && <h3>{this.state.guestList[0].name}</h3>}
        <GuestForm 
          newGuest={this.state.newGuest}
          handleChangeFor={this.handleChangeFor}
          handleSubmit={this.handleSubmit}
        />
        <GuestList guests={this.state.guestList} />
        <DinnerSupplies count={this.state.guestList.length}/>
        <Footer />

      </div>
    );
  }
}

export default App;
