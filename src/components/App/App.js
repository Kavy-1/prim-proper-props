import React, { Component } from 'react';
import './App.css';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies'
=======
import GuestList from '../GuestList/GuestList';

import GuestForm from '../GuestForm/GuestForm';

=======
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
 feature-guest-list
        <h2>Add a new guest</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            value={this.state.newGuest.name}
            onChange={this.handleChangeFor('name')}
          />
          <div>
            Would this guest like a kid's meal?
            <div onChange={this.handleChangeFor('kidsMeal')}>
              <div>
                <label>
                  <input
                    type="radio"
                    value="yes"
                    name="kidsMeal"
                  />
                  Yes, this guest would like a Kid's Meal
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="no"
                    defaultChecked
                    name="kidsMeal"
                  />
                  No, this guest would not like a Kid's Meal
                </label>
              </div>
            </div>
          </div>
          <button type="submit">Add Guest</button>
        </form>
        <GuestList guests={this.state.guestList} />


        <h2>Dinner Supplies</h2>

        <DinnerSupplies count={this.state.guestList.length}/>
        <footer>
          <h3>Have fun!</h3>
          <p>Don't forget to mind your Ps and Qs!</p>
        </footer>

        <div>
          Spoons: {this.state.guestList.length * 2}
        </div>
        <div>
          Forks: {this.state.guestList.length * 2}
        </div>
        <div>
          Knives: {this.state.guestList.length * 2}
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;
