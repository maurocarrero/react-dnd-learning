import React, { Component } from 'react';
import Board from './Board';
import { observe } from '../game';

export default class App extends Component {
  state = {
    knightPosition: [1,7]
  };

  componentDidMount() {
    observe(knightPosition => {
      this.setState({
        knightPosition
      })
    });
  };
  
  render() {
    return (
        <Board knightPosition={this.state.knightPosition} />
    )
  }
};