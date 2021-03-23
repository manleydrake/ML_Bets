import React, { Component } from 'react';
import {
    Table, Collapse, Spinner, Card, Button,Container
} from 'react-bootstrap';
import BookCard from "./BookCards"

export class Predictions extends Component {
    static displayName = Predictions.name;

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,

        };

    }



    render() {
        return (
            <>
                {this.state.isLoaded &&
                    <>
                    <BookCard />
                    <Container style={{ backgroundColor: "#3b3937" }}>
                        <iframe className="align-right" src="https://veri.bet/x-ajax-events-carousel-x?ref=widget" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes" style={{ width: "320px", height: "540px", margin: "0px", padding: "0px", backgroundColor: "#3b3937" }}></iframe>

                        <h1 style={{ color: "white" }}>Predictions</h1>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img top src="https://thumbor.forbes.com/thumbor/1920x1080/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60105eea27a5e0ffbf1a07e8%2F0x0.jpg%3Ffit%3Dscale" alt="Card image cap" />
                                <Card.Body>
                                    <Card.Title tag="h5">Team VS Team</Card.Title>
                                    <Card.Subtitle tag="h6" className="mb-2 text-muted">Tip Off Time: 10:30PM</Card.Subtitle>
                                    <Card.Text>Sportbooks reporting odds: 18</Card.Text>
                                </Card.Body>
                            </Card>
                    </Container>
                    </>
                   
                }
            </>
        );
    }
}
