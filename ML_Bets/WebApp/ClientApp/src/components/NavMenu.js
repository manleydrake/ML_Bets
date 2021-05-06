import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, DropdownToggle,DropdownItem, DropdownMenu, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom"
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <>

                <header style={{backgroundColor:"white", width:"100%"}}>
                    <Navbar style={{textAlign:"center"}}className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-2" light>
                        <Container>
                            <NavbarBrand tag={Link} to="/odds">
                                ML Bets{/*<img
                                    height='75'
                                    width='75'
                                    src="/MLBetsLogo.png"
                                    className="d-inline-block align-top"
                                    alt="ML Bets logo"
                                />*/}
                            </NavbarBrand>
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                                <ul className="navbar-nav flex-grow">
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/odds">Odds</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/predictions">Predictions</NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Stats
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <NavLink tag={Link} className="text-dark" to="/player">Player</NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink tag={Link} className="text-dark" to="/team">Team</NavLink>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </ul>
                            </Collapse>
                        </Container>
                    </Navbar>
                </header>
            </>
        );
    }
}
