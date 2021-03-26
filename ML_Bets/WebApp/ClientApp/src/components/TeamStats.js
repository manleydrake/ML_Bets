import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Table } from 'reactstrap';
import BookCard from "../components/BookCards";


export class TeamStats extends Component {
    static displayName = TeamStats.name;

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            currentCount: 0
        };

    }
    componentDidMount() {

        this.getStats();
        this.getTeamStats();
    }



    render() {
        return (
            <>
                {
                    this.state.isLoaded &&
                    <div>
                        <BookCard />
                        <div className="hide" >
                            <iframe className="align-right" src="https://veri.bet/x-ajax-events-carousel-x?ref=widget" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes" style={{ width: "320px", height: "540px", margin: "0px", padding: "0px", backgroundColor: "#3b3937" }}></iframe>
                        </div>
                        <Container style={{ backgroundColor: "#3b3937" }}>

                            <h1 style={{ color: "#ffffff" }}>Teams</h1>

                            <Table dark>
                                <thead>
                                    <tr>
                                        <th>Abr.</th>
                                        <th>Team Name</th>
                                        <th>City</th>
                                        <th>Conference</th>
                                        <th>Division</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.Team.map((team, i) => (
                                        <tr key={team.id}>
                                            <th scope="row">{team.abbreviation}</th>
                                            <td>{team.full_name}</td>
                                            <td>{team.city}</td>
                                            <td>{team.conference}</td>
                                            <td>{team.division}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Container>
                    </div>
                }
            </>
        );
    }


    async getTeamStats() {
        const response = await fetch('teamstats/AllTeams');
        const data = await response.json();
        this.setState({ Team: data[0].data, isLoaded: true })
    }

    async getStats() {
        const response = await fetch('allstats/AllStats');
        const data = await response.json();
        this.setState({ Stats: data })
    }
}
