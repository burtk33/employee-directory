import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col"

function EmployeeCard(props) {
    return (
        <Col>
            <Card style={{ width: '10rem' , margin: '15px'}}>
                <Card.Img variant="top" src={props.picture} />
                <Card.Body>
                    <Card.Title>{props.firstName} {props.lastName}</Card.Title>
                    <Card.Text>
                        Username: {props.login.username}
                        Email: {props.email}
                        Phone: {props.phone}
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default EmployeeCard;