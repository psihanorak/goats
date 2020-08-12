import React from 'react';

import GoatCorral from '../components/GoatCorral/GoatCorral';

import goatData from '../helpers/data/goatData';

import './App.scss';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  takeAGoat = (goatId) => {
    // call helper/data function
    goatData.takeGoat(goatId);
    // get all updated goats
    const goats = goatData.getGoats();
    // update state
    this.setState({ goats });
  }

  freeAGoat = (goatId) => {
    // call helper/data function
    goatData.freeGoat(goatId);
    // get all updated goats
    const goats = goatData.getGoats();
    // update state
    this.setState({ goats });
  }

  render() {
    const { goats } = this.state;

    return (
      <div className="App">
        <h1>APP COMPONENT HERE!!!</h1>
        <GoatCorral goats={goats} takeAGoat={this.takeAGoat} freeAGoat={this.freeAGoat} />
      </div>
    );
  }
}

export default App;
