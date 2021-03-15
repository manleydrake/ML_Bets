import React, { Component } from 'react';

export class Odds extends Component {
    static displayName = Odds.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
   
  }

  

  render() {
    return (
      <div>
        <h1>Odds</h1>

        <p>This is a simple example of a React component.</p>

       
      </div>
    );
  }
}
