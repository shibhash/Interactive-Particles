import React, { Component } from 'react'
import IxdParticle from './IxdParticle'

class ParticleController extends Component {
    constructor() {
        super();
        this.state = {
            isLinked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(state => ({
            isLinked: !state.isLinked
        }));
    }
    
    render() {
        let buttonText = this.state.isLinked === true ? 'Get alone' : 'Get together'
        return (
            <div className  = 'project-tray'>
                <IxdParticle isConnected = {this.state.isLinked}/>
              
                    <button className ='button' onClick={this.handleClick}>{buttonText}</button>
              
            </div>

        );
    }
}

export default ParticleController;
