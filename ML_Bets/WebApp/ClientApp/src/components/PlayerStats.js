import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Table } from 'reactstrap';
import { Form, Row, Col, Button, DropdownButton, Dropdown, Pagination } from "react-bootstrap";
import BookCard from './BookCards';
import BootstrapTable from "react-bootstrap-table-next";

export class PlayerStats extends Component {
    static displayName = PlayerStats.name;

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            rowLoaded: false,
            years: 2020,
            yearOptions:
                [
                    1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020
                ],
            activeNumber: 1,
            visibleNumber: 1,
            visibleNumber2: 2,
            visibleNumber3: 3,
            isLastNum: false
        };

    }
    componentDidMount() {
        this.getPlayers();
        this.setPaginationValues();
    }
    setYear(event) {
        this.setState({ years: event.target.value })
    }

    setPaginationValues() {
        let active = 1;
        let items = [];
        for (let numbers = 1; numbers <= 138; numbers++) {
            items.push(
                numbers
            );
        }

        this.setState({ pages: items })
    }
    handlePageClick(event) {
        var num = parseInt(event.target.text)
        if (num !== 136 || num !== 137 || num !== 138) {
            this.setState({ visibleNumber: num, visibleNumber2: num + 1, visibleNumber3: num + 2,isLastNum: false })
            this.getPlayerPage(num)
        }
    }
    handleFirstClick() {
        this.setState({ visibleNumber: 1, visibleNumber2: 2, visibleNumber3: 3,isLastNum:false })
        this.getPlayerPage(1)
    }
    handleBackClick(event) {
        var num = this.state.visibleNumber;
        if (this.state.visibleNumber !== 1) {
            this.setState({ visibleNumber: num -1, visibleNumber2: num, visibleNumber3: num + 1 })
            this.getPlayerPage(num-1)
        } 
    }
    handleForwardClick(event) {
        var num = this.state.visibleNumber;
        if (this.state.visibleNumber !== 138) {
            this.setState({ visibleNumber: num + 1, visibleNumber2: num+2, visibleNumber3: num + 3 })
            this.getPlayerPage(num - 1)
        }
    }
    handleLastClick() {
        this.setState({ visibleNumber:136,visibleNumber2:137, visibleNumber3: 138, isLastNum:true })
    }


    render() {

        const columns = [
            {
                dataField: "first_name",
                text: "First Name"
            },
            {
                dataField: "last_name",
                text: "Last Name"
            },
            {
                dataField: "position",
                text: "Position"
            }
        ];
        const TableRows = [
            {
                dataField: "ast",
                text: "AST"

            },
            {
                dataField: "blk",
                text: "BLK"

            },
            {
                dataField: "dreb",
                text: "DREB"

            },
            {
                dataField: "fg3_pct",
                text: "FG3%"

            },
            {
                dataField: "fg3a",
                text: "FG3A"

            },
            {
                dataField: "fg3m",
                text: "FG3M"

            },
            {
                dataField: "fg_pct",
                text: "FG%"

            },
            {
                dataField: "fga",
                text: "FGA"

            },
            {
                dataField: "fgm",
                text: "FGM"

            },
            {
                dataField: "ft_pct",
                text: "FT%"

            },
            {
                dataField: "fta",
                text: "FTA"

            },
            {
                dataField: "ftm",
                text: "FTM"

            },
            {
                dataField: "games_playes",
                text: "GP"

            },
            {
                dataField: "min",
                text: "MIN"

            },
            {
                dataField: "oreb",
                text: "OREB"

            },
            {
                dataField: "pf",
                text: "PF"

            },
            {
                dataField: "pts",
                text: "PTS"

            },
            {
                dataField: "reb",
                text: "REB"

            },
            {
                dataField: "season",
                text: "YR"

            },
            {
                dataField: "stl",
                text: "STL"

            },
            {
                dataField: "turnover",
                text: "TO"

            },


        ]
        const rowEvents = {
            onClick: (e, row, rowIndex) => {
                this.GetPlayerStats(row.id, this.state.years)
            }

        };

        const expandRow = {
            onlyOneExpanding: true,
            renderer: row => (
                <div className="table-main">
                    {this.state.rowLoaded && <BootstrapTable className="table-main" keyField="first_name" data={this.state.Players[this.state.playerIndex].stats} columns={TableRows} expandRow={expandRow} rowEvents={rowEvents} />
                    }
                    {!this.state.rowLoaded && <h1>Data Loading...</h1>}
                </div>
            )

        };
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
                            <h1 style={{ color: "white" }}>Player Stats</h1>
                            <Form style={{ paddingBottom: "16px" }}>
                                <Form.Label>Year Select</Form.Label>
                                <Form.Control onChange={this.setYear.bind(this)} as="select">
                                    {this.state.yearOptions.map((year, i) => (
                                        <option value={year}>{year}</option>
                                    ))}

                                </Form.Control>
                            </Form>
                            <div>
                                <Pagination>

                                    <Pagination.First  onClick={this.handleFirstClick.bind(this)} />
                                    <Pagination.Prev onClick={this.handleBackClick.bind(this)} />

                                    <Pagination.Item active={!this.state.isLastNum} value={this.state.visibleNumber}>{this.state.visibleNumber}</Pagination.Item>
                                    <Pagination.Item onClick={this.handlePageClick.bind(this)} value={this.state.visibleNumber2}>{this.state.visibleNumber2}</Pagination.Item>
                                    <Pagination.Item active={this.state.isLastNum} onClick={this.handlePageClick.bind(this)} value={this.state.visibleNumber3}>{this.state.visibleNumber3}</Pagination.Item>


                                    <Pagination.Ellipsis />
                                    <Pagination.Next onClick={this.handleForwardClick.bind(this)} />
                                    <Pagination.Last  onClick={this.handleLastClick.bind(this)} />


                                </Pagination>
                            </div>






                            <div style={{ paddingBottom: "15px" }}>
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
                                        <Col>
                                            <Button type="submit">
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>

                                </Form>
                            </div>
                            <BootstrapTable style={{ backgroundColor: "rgb(59, 57, 55)", color: "white" }} keyField="first_name" data={this.state.Players} columns={columns} expandRow={expandRow} rowEvents={rowEvents} />
                        </Container>
                    </div>
                }
            </>
        );
    }



    async getPlayers() {
        const response = await fetch('players/AllPlayers');
        const data = await response.json();
        this.setState({ Players: data[0].data, isLoaded: true })
    }
    async searchPlayers(name) {
        const response = await fetch('players/SearchPlayer/' + name);
        const data = await response.json();
        this.setState({ Players: data[0].data })
    }
    async GetPlayerStats(id, years) {
        const response = await fetch('players/GetPlayerStats/' + id + "/" + years);
        const data = await response.json();
        const player = [...this.state.Players]
        console.log(player)
        const player_id = player.map(a => a.id)
        console.log(player_id)
        const i = player_id.indexOf(id)
        player[i].stats = data[0].data;
        console.log(player[i])

        this.setState({ Players: player, PlayerStats: data[0].data, rowLoaded: true, playerIndex: i })
    }
    async getPlayerPage(num) {
        const response = await fetch('players/GetNextPage/' + num);
        const data = await response.json();
        this.setState({ Players: data[0].data })
    }

}
