import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooterCard, CardTitle,CardImg, CardBody, Card,ModalFooter, CardText, Row, Col } from 'reactstrap';
import { Table, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import Scoreboard from '../components/Scoreboard'


const PredictionModal = (props) => {
    const {
        buttonLabel = 'Show Scoreboard',
        className,
    } = props;

    //src="https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_80x64/" + {props.home}+".gif"

    const [modal, setModal] = useState(false);



    const toggle = () => setModal(!modal);
    const homeURL = "https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_80x64/" + props.home.toLowerCase() + ".gif";
    const awayURL = "https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_80x64/" + props.away.toLowerCase() + ".gif";
    return (
        <div>
            <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Our Score </ModalHeader>
                <ModalBody>
                    <Scoreboard home={ props.home} away={props.away} homeScore={props.homeScore} awayScore={props.awayScore} />
                    {/* /<Row>
                    //    <Col sm="5">
                    //        <Card>
                    //            <CardImg top width="100%" src={homeURL}  alt="Card image cap" />
                    //            <CardBody>
                    //                <CardTitle tag="h5">{props.home}</CardTitle>
                    //                <CardTitle tag="h5">{props.homeScore}</CardTitle>
                    //                <Button>See Team</Button>
                    //            </CardBody>
                    //        </Card>
                    //    </Col>
                    //    <Col sm='2'>
                    //        V.S
                    //    </Col>

                    //    <Col sm="5">
                    //        <Card>
                    //            <CardImg top width="100%" src={awayURL} alt="Card image cap" />
                    //            <CardBody>
                    //                <CardTitle tag="h5">{props.away}</CardTitle>
                    //                <CardTitle tag="h5">{props.awayScore}</CardTitle>
                    //                <Link to="/team" className="btn btn-primary">See Team</Link>
                    //            </CardBody>
                    //        </Card>
                    //    </Col>

                    //</Row> */}
                </ModalBody>
                <ModalFooter>
                    <Link to="/odds" className="btn btn-primary">See Odds</Link>
                   
                    <Button variant="danger" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default PredictionModal;