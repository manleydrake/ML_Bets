import React, { Component } from 'react';
import {
    Table, Collapse, Spinner, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container } from "react-bootstrap"
import ModalExample from '../components/GameOdds';
import BookCard from './BookCards';

export class Odds extends Component {
    static displayName = Odds.name;

    constructor(props) {
        super(props);
        this.state = {
            currentCount: 0,
            odds: [],
            isLoaded: false,
            isOpen: false
        };
        this.formatDate = this.formatDate.bind(this);

    }
    async componentDidMount() {

        const response = await fetch('gameodds');
        const data = await response.json();
        this.setState({
            odds: data.data,
            isLoaded: true
        })

    }

    formatDate(time) {

        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(time * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return (formattedTime)
    }

    render() {
        return (
            <>
                {this.state.isLoaded &&
                    <div>
                    <BookCard />
                    <Container style={{ backgroundColor: "#3b3937" }}>
                        <iframe className="align-right" src="https://veri.bet/x-ajax-events-carousel-x?ref=widget" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes" style={{ width: "320px", height: "540px", margin: "0px", padding: "0px", backgroundColor: "#3b3937" }}></iframe>

                        <h1 style={{color: "white"}}>Odds</h1>
                            {this.state.odds.map((game, i) => (
                                <div className="row justify-content-center">
                                    <Card style={{ width: '40rem' }}>
                                        <CardImg top src="https://clutchpoints.com/wp-content/uploads/2020/06/Greatest-NBA-Players-Best-NBA-Players-Ranking-NBA-Players-NBA-Goat.-Who-Is-The-Best-Player-Ever-1.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle tag="h5">{game.teams[0]} VS {game.teams[1]}</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">Tip Off Time: {this.formatDate(game.commence_time)}</CardSubtitle>
                                            <CardText>Sportbooks reporting odds: {game.sites_count}</CardText>
                                            <ModalExample home={game.teams[0]} away={game.teams[1]} data={game.sites} />
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </Container>
                    </div>
                }
            </>
        );
    }
}
