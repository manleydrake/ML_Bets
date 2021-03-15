import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Table } from 'reactstrap';

export class TeamStats extends Component {
    static displayName = TeamStats.name;

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
                <h1>Team Stats</h1>

                <Table dark>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
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
