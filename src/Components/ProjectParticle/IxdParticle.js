import React, { Component } from 'react';
import Particles from 'react-particles-js';

class IxdParticle extends Component {
    render () {
        let linkValue = this.props.isConnected
        console.log("particles linked:" + this.props.isConnected)

        return (
            <div>
                <Particles
                    params={
                        {
                            "particles": {
                                "number": {
                                    "value": 40,
                                    "density": {
                                        "enable": false,
                                        "value_area": 20
                                    }
                                },

                                "opacity": {
                                    "value": 1,
                                    "random": false,
                                    "anim": {
                                        "enable": true,
                                        "speed": 1,
                                        "opacity_min": 0.5,
                                        "sync": false
                                    }
                                },

                                "size": {
                                    "value": 10,
                                    "random": true,
                                    "anim": {
                                        "enable": true,
                                        "speed": 10,
                                        "size_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "move": {
                                    "direction": "none",
                                    "out_mode": "out",
                                    "bounce": false
                                },
                                "line_linked": {
                                    "enable": linkValue,
                                    "distance": 150,
                                    "opacity": 0.5,
                                    "width": .8
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                },
                                "modes": {
                                    "remove": {
                                        "particles_nb": 5
                                    }

                                }
                            }
                        }
                    }

                    style={
                        {
                            "background": "#E91E63"
                        }
                    }
                />
            </div>
        );
    }

}

export default IxdParticle;