import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { ScoreBoardBanner } from './ScoreboardBanner';
export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
        <div>
        <ScoreBoardBanner/>
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
