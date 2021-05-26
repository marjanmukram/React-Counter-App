import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 2 },
    ]
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }

  handleSubstitution = (counter) => {
    const counters = this.state.counters;
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters })
  }

  handleReset = () => {
    this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    console.log(this.state);
  }

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length} />
        <Counters counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onSubstitution={this.handleSubstitution}
          onReset={this.handleReset}
          onDelete={this.handleDelete} />
      </React.Fragment>
    );
  }
}

export default App;
