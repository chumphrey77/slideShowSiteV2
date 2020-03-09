import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const Slides = (props) => {
    return(
        <Carousel>
           {props.children}
        </Carousel>
    );
}
export default Slides