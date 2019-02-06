import React, { Component } from 'react';
import './App.css';
import HeaderBlock from './Components/HeaderBlock'
import ParticleController from './Components/ProjectParticle/ParticleController'

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className = 'block'>
              <HeaderBlock title='Shib S. Sahoo' description='<Particle.js exploration />' />
          </div>
            <ParticleController/ >
        </div>
    );
  }
}

export default App;
