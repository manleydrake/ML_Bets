import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
    const {
        buttonLabel = 'Show More',
        className,
    } = props;



    const [modal, setModal] = useState(false);


    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Odds per Book</ModalHeader>
                <ModalBody>
                    Home: {props.home}
                    <br />
                    Away: {props.away}
                    <br />
                    {props.data.map((site, i) => (
                        <div>
                            <p>Site: <a href={"https://www."+ site.site_key + ".com"}>{site.site_nice}</a></p>
                            <p>Odds for {props.home}:{site.odds.h2h[0] } </p>
                            <p>Odds for {props.away}:{site.odds.h2h[1]}</p>
                        </div>

                    ))}
                    <br />

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Go to Predictions</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Go to Team Stats</Button>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;