import React, { Component } from 'react';

export class Documentation extends Component {
    static displayName = Documentation.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
 
  }


  render() {
    return (
      <div>
        <h1>Documentation</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong></strong></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}
