import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { PlayerStats } from './components/PlayerStats';
import { Odds } from './components/Odds';
import { Predictions } from './components/Predictions';
import { Documentation } from './components/Documentation';
import { TeamStats } from './components/TeamStats';
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/odds' component={Odds} />
                <Route path='/predictions' component={Predictions} />
                <Route path='/team' component={TeamStats} />
                <Route path='/player' component={PlayerStats} />
                <Route path='/documentation' component={Documentation} />
            </Layout>
        );
    }
}
