import React from 'react'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComponentCSS/ImageCSS.css'
import  Container from 'react-bootstrap/Container';
const StdImage = ({imagePath}) => {
    return (
        <Container>
            <Image src={imagePath} rounded fluid/>
        </Container>
    )
}
export default StdImage