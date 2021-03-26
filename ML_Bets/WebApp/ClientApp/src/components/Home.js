import React, { Component } from 'react';
import { Card, Button, CardGroup,Container, Image } from 'react-bootstrap';
import BookCard from "../components/BookCards";

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <>
                <BookCard/>
                <div className="hide" >

                    <iframe className="align-right" src="https://veri.bet/x-ajax-events-carousel-x?ref=widget" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes" style={{ width: "320px", height: "540px", margin: "0px", padding: "0px", backgroundColor: "#3b3937"}}></iframe>

                </div>
            </>


        );
    }
}
