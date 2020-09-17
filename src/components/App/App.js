import React, { Component } from 'react';
import './App.css';
import GuestForm from '../GuestForm/GuestForm';

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
    return (
      <div className="App">
        <header>
          <h1>Prim Proper Props</h1>
        </header>
        <h2>Party Leader</h2>
        {this.state.guestList[0] && <h3>{this.state.guestList[0].name}</h3>}
        <GuestForm 
          newGuest={this.state.newGuest}
          handleChangeFor={this.handleChangeFor}
          handleSumbit={this.handleSubmit}
        />
        <h2>Guest List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Kid's Meal</th>
            </tr>
          </thead>
          <tbody>
            {this.state.guestList.map(guest => (
              <tr key={guest.name}>
                <td>{guest.name}</td>
                <td>{guest.kidsMeal}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Dinner Supplies</h2>
        <div>
          Spoons: {this.state.guestList.length * 2}
        </div>
        <div>
          Forks: {this.state.guestList.length * 2}
        </div>
        <div>
          Knives: {this.state.guestList.length * 2}
        </div>
        <footer>
          <h3>Have fun!</h3>
          <p>Don't forget to mind your Ps and Qs!</p>
        </footer>
      </div>
    );
  }
}

export default App;
