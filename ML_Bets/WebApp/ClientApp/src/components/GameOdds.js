import React, { useState } from 'react';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

const ModalExample = (props) => {
    const {
        buttonLabel = 'Show More',
        className,
    } = props;



    const [modal, setModal] = useState(false);

    const handleClick = (e) => {
        var site = e.target.firstChild.data

        site = 'https://www.' + site + '.com'
        site.replace(/\s+/g, "")
        window.location.replace(site);
    };


    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Odds per Book</ModalHeader>
                <ModalBody>
                    <Table dark hover className="table-main" >
                        <thead>
                            <tr >
                                <th>Book Name</th>
                                <th>{props.home} Odds</th>
                                <th>{props.away} Odds</th>
                            </tr>
                        </thead>
                        {props.data.map((site, i) => (
                            <tbody>
                                <tr onClick={handleClick} className="clickable-row" accessKey={site.site_key}>

                                    <th scope="row">{site.site_nice}</th>
                                    <td>{site.odds.h2h[0]}</td>
                                    <td>{site.odds.h2h[1]}</td>
                                </tr>
                            </tbody>))}
                    </Table>
                </ModalBody>
                <ModalFooter>
                    <Link to="/predictions" className="btn btn-primary">Go to Predictions</Link>
                    <Link to="/team" className="btn btn-primary">Go to Team Stats</Link>
                    <Button variant="danger" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;