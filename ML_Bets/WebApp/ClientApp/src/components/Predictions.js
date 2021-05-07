import React, { Component } from 'react';
import {
    Table, Collapse, Spinner, Card, Button, Container, Col, Row, Image
} from 'react-bootstrap';
import moment from 'moment'
import BookCard from "./BookCards"
import PredictionModal from '../components/PredictionModal'
import Scoreboard from '../components/Scoreboard'
import { useHistory, Link } from "react-router-dom";
const dataFrame = require('./Yesterday_Predictions.json');


const { data } = dataFrame;

export class Predictions extends Component {
    static displayName = Predictions.name;

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
            predData: data
        };


    }

    componentDidMount() {

        this.setState({ predData: data })
    }



    render() {
        return (
            <>
                {this.state.isLoaded &&
                    <>
                        <BookCard />
                        <Container style={{ backgroundColor: "#3b3937" }}>
                            <div className="hide" >
                                <iframe className="align-right " src="https://veri.bet/x-ajax-events-carousel-x?ref=widget" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes" style={{ width: "320px", height: "540px", margin: "0px", padding: "0px", backgroundColor: "#3b3937" }}></iframe>
                            </div>
                            <div className="row justify-content-center">
                                <h1 style={{ color: "white" }}>Predictions</h1>
                            </div>
                            {this.state.predData.map(game =>
                                <div className="row justify-content-center">
                                    <Card >
                                        <Card.Body>
                                            <Scoreboard home={game.Home} away={game.Away} homeScore={game.HomeScore} awayScore={game.AwayScore} />
                                            <Card.Title tag="h5"> {game.Away} At  {game.Home}</Card.Title>
                                            <Card.Subtitle tag="h6" className="mb-2 text-muted">Tip Time : {moment.utc(game.start_time).local().format('Z z')}</Card.Subtitle>
                                            <Link to="/odds" className="btn btn-primary">See Odds</Link>
                                        </Card.Body>



                                    </Card>
                                </div>
                            )}
                        </Container>
                    </>
                }
            </>
        );
    }
}
