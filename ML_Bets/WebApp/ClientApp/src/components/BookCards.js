import React, { Component } from 'react';
import { Card, Button, CardGroup, Container, Image } from 'react-bootstrap';


const BookCard = (props) => {



    return (
        <>
            <div id="DIV_2">
                <h1 style={{ color:"#ffffff"}}>
                    Top Sports Betting Sites
        		</h1>
            </div>
            <CardGroup>
                <Card className="bg-dark text-white" border='success'>
                    <Card.Img src="https://cdn.sportsbettingdime.com/app/uploads/media/top-book-background-365x179-draftkings-m-2.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                        <Image src="https://cdn.sportsbettingdime.com/app/uploads/media/logo-draftkings-dark-2.svg" />
                    </Card.ImgOverlay>
                    <Card.ImgOverlay style={{ marginTop: "50%" }}>
                        <Card.Title>Draft Kings</Card.Title>
                        <Card.Text>
                            Bonus: Up to $1,050 Free
                            </Card.Text>
                        <Button variant="success" href="https://www.draftkings.com/">Bet Now</Button>
                    </Card.ImgOverlay>
                </Card>


                <Card className="bg-dark text-white" border='primary' text='white'>
                    <Card.Img variant="top" src="https://cdn.sportsbettingdime.com/app/uploads/media/top-book-background-365x179-fanduel-m-2.jpg" />
                    <Card.ImgOverlay>
                        <Image src="https://cdn.sportsbettingdime.com/app/uploads/media/logo-fanduel-dark-2.svg" />
                    </Card.ImgOverlay>
                    <Card.ImgOverlay style={{ marginTop: "50%" }}>
                        <Card.Title>FanDuel</Card.Title>
                        <Card.Text>
                            Bonus: $1,000 Risk-Free Bet
                        </Card.Text>
                        <Button variant="success" href="https://www.fanduel.com/">Bet Now</Button>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" border='warning' text='white'>
                    <Card.Img variant="top" src="https://cdn.sportsbettingdime.com/app/uploads/media/top-book-background-365x179-betmgm-m-2.jpg" />
                    <Card.ImgOverlay>
                        <Image src="https://cdn.sportsbettingdime.com/app/uploads/media/logo-betmgm-dark-2.svg" />
                    </Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>BetMGM</Card.Title>
                        <Card.Text>
                            Bonus: $600 Risk-Free Bet
                        </Card.Text>
                        <Button variant="success" href="https://promo.nj.betmgm.com/en/promo/geolocator?orh=sports.betmgm.com">Bet Now</Button>
                    </Card.Body>
                </Card>
            </CardGroup>

        </>
    );
}
export default BookCard