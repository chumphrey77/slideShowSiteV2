import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComponentCSS/MonthBtnGrp.css'
import './ComponentCSS/ImageCSS.css';
const MonthBtnGrp = (props) => {
    var jan = '/Jan'.concat(props.year)
    var feb = '/Feb'.concat(props.year)
    var mar = '/Mar'.concat(props.year)
    var apr = '/Apr'.concat(props.year)
    var may = '/May'.concat(props.year)
    var jun = '/Jun'.concat(props.year)
    var jul = '/Jul'.concat(props.year)
    var aug = '/Aug'.concat(props.year)
    var sep = '/Sep'.concat(props.year)
    var oct = '/Oct'.concat(props.year)
    var nov = '/Nov'.concat(props.year)
    var dec = '/Dec'.concat(props.year)

    var janDis;
    var febDis;
    var marDis;
    var aprDis;
    var mayDis;
    var junDis;
    var julDis;
    var augDis;
    var sepDis;
    var octDis;
    var novDis;
    var decDis;

    if(props.year === '2018'){
        janDis = true;
        febDis = true;
        marDis = true;
        aprDis = true;
        mayDis = true;
        junDis = true;
        julDis = true;
        augDis = true;
        sepDis = true;
        octDis = true;
        novDis = true;
        decDis = false;
    }
    else if (props.year === '2020'){ // Add months here as they happen by marking as false
        janDis = false;
        febDis = false;
        marDis = false;
        aprDis = true;
        mayDis = true;
        junDis = true;
        julDis = true;
        augDis = true;
        sepDis = true;
        octDis = true;
        novDis = true;
        decDis = true;
    }
    else{
        janDis = false;
        febDis = false;
        marDis = false;
        aprDis = false;
        mayDis = false;
        junDis = false;
        julDis = false;
        augDis = false;
        sepDis = false;
        octDis = false;
        novDis = false;
        decDis = false;
    }

    return (
        <React.Fragment>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" href={jan} disabled={janDis}>Jan</Button>
            <Button variant="secondary" href={feb} disabled={febDis}>Feb</Button>
            <Button variant="secondary" href={mar} disabled={marDis}>Mar</Button>
            <Button variant="secondary" href={apr} disabled={aprDis}>Apr</Button>
            <Button variant="secondary" href={may} disabled={mayDis}>May</Button>
            <Button variant="secondary" href={jun} disabled={junDis}>June</Button>
            <Button variant="secondary" href={jul} disabled={julDis}>July</Button>
            <Button variant="secondary" href={aug} disabled={augDis}>Aug</Button>
            <Button variant="secondary" href={sep} disabled={sepDis}>Sept</Button>
            <Button variant="secondary" href={oct}disabled={octDis}>Oct</Button>
            <Button variant="secondary" href={nov} disabled={novDis}>Nov</Button>
            <Button variant="secondary" href={dec}disabled={decDis}>Dec</Button>
        </ButtonGroup>
        <div>
            <br/>
        </div>
    </React.Fragment>
    )
}
export default MonthBtnGrp