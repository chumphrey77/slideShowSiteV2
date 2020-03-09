import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComponentCSS/ImageCSS.css';
import YearBtnGrp from './MonthBtnGrp'

const CalAccordion = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    January
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <YearBtnGrp month='Jan'/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    February
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <YearBtnGrp month='Feb'/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                    March
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <YearBtnGrp month='Mar'/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                    April
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        <YearBtnGrp month='Apr'/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                    May
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                    <Card.Body>
                        <YearBtnGrp month='May'/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                    June
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                    <Card.Body>
                        <YearBtnGrp month='June'/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="6">
                    July
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                    <Card.Body>
                        <YearBtnGrp month='July'/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="7">
                    August
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                    <Card.Body>
                        <YearBtnGrp month='Aug'/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="8">
                    September
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="8">
                    <Card.Body>
                        <YearBtnGrp month='Sept'/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="9">
                    October
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="9">
                    <Card.Body>
                        <YearBtnGrp month='Oct'/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="10">
                    November
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="10">
                    <Card.Body>
                        <YearBtnGrp month='Nov'/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="11">
                    December
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="11">
                    <Card.Body>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
export default CalAccordion