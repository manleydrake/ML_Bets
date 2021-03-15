import React, { Component } from 'react';

export class PlayerStats extends Component {
    static displayName = PlayerStats.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    
    }
    componentDidMount() {
        this.getPlayers();
        this.getStats();
        this.getTeamStats();
    }



  render() {
    return (
      <div>
        <h1>Player Stats</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
      </div>
    );
    }


    async getTeamStats() {
        const response = await fetch('teamstats/AllTeams');
        const data = await response.json();
        this.setState({ Team: data })
    }
    async getPlayers() {
        const response = await fetch('players/AllPlayers');
        const data = await response.json();
        this.setState({ Players: data })
    }
    async getStats() {
        const response = await fetch('allstats/AllStats');
        const data = await response.json();
        this.setState({ Stats: data })
    }
}
