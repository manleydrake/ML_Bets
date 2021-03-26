import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import './NavMenu.css';

export class ScoreBoardBanner extends Component {
    static displayName = ScoreBoardBanner.name;

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
    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://scorestream.com/apiJsCdn/widgets/embed.js";
        this.div.appendChild(script);
    }

    /*<div class="scorestream-widget-container" data-ss_widget_type="horzScoreboard" data-user-widget-id="41607"></div>
    <script async="async" type="text/javascript" src="https://scorestream.com/apiJsCdn/widgets/embed.js"></script> */
    render() {
        return (
            <div className="scoreboard" ref={el => (this.div = el)}>
                <div className="scorestream-widget-container" data-ss_widget_type="horzScoreboard" data-user-widget-id="41607"></div>
            </div>
        );
    }
}
