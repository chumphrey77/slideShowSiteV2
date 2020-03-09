import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComponentCSS/ImageCSS.css';
const MonthBtnGrp = (props) => {
    var dec = '/Dec'.concat(props.year)
    var jan = '/Jan'.concat(props.year)

    return (
        <React.Fragment>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" href={jan}>Jan</Button>
            <Button variant="secondary" href={props.feb}>Feb</Button>
            <Button variant="secondary" href={props.mar}>Mar</Button>
            <Button variant="secondary" href={props.apr}>Apr</Button>
            <Button variant="secondary" href={props.may}>May</Button>
            <Button variant="secondary" href={props.june}>June</Button>
            <Button variant="secondary" href={props.july}>July</Button>
            <Button variant="secondary" href={props.aug}>Aug</Button>
            <Button variant="secondary" href={props.sept}>Sept</Button>
            <Button variant="secondary" href={props.oct}>Oct</Button>
            <Button variant="secondary" href={props.nov}>Nov</Button>
            <Button variant="secondary" href={dec}>Dec</Button>
        </ButtonGroup>
        <div>
            <br/>
        </div>
    </React.Fragment>
    )
}
export default MonthBtnGrp