import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col"

function EmployeeCard(props) {
    return (
        <Col>
            <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" src={props.picture} />
                <Card.Body>
                    <Card.Title>{props.firstName} {props.lastName}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default EmployeeCard;