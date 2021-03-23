import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Table } from 'reactstrap';
import { Form, Row, Col, Button } from "react-bootstrap";
import BookCard from './BookCards';

export class PlayerStats extends Component {
    static displayName = PlayerStats.name;

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
        
    }
    componentDidMount() {
        this.getPlayers();
    }


    render() {
        return (
            <>
                {
                    this.state.isLoaded &&
                    <div>
                        <BookCard />
                        <iframe className="align-right" src="https://veri.bet/x-ajax-events-carousel-x?ref=widget" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes" style={{ width: "320px", height: "540px", margin: "0px", padding: "0px", backgroundColor: "#3b3937" }}></iframe>

                        <h1 style={{color:"white"}}>Player Stats</h1>
                        <div>
                            <Form onSubmit={
                                e => {
                                    e.preventDefault()
                                    const formData = new FormData(e.target),
                                        formDataObj = Object.fromEntries(formData.entries())
                                    console.log(formDataObj.First)
                                    this.searchPlayers(formDataObj.First)


                                }}>
                                <Row>
                                    <Col>
                                        <Form.Control type="text" name="First" placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" name="Last" placeholder="Last name" />
                                    </Col>
                                </Row>
                                <Button type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>

                        <Table dark>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Team</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.Players.map((player, i) => (
                                    <tr key={player.id}>
                                        <th scope="row">{player.first_name + " " + player.last_name}</th>
                                        <td>{player.position}</td>
                                        <td>{player.team[0].full_name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>}
            </>
        );
    }



    async getPlayers() {
        const response = await fetch('players/AllPlayers');
        const data = await response.json();
        this.setState({ Players: data[0].data, isLoaded: true })
    }
    async searchPlayers(name) {
        const response = await fetch('players/SearchPlayer/'+ name);
        const data = await response.json();
        this.setState({Players: data[0].data})
    }

}
