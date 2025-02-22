import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slides from '../../Components/Slides'
import im1 from './../../Components/pics/_DSC4395.png'
import StdImage from '../../Components/StdImage'
import Carousel from 'react-bootstrap/Carousel'
const Engagement = () => {
    return (
        <Slides>
            <Carousel.Item>
                <img
                    //className="d-block w-100"
                    src="asd"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <StdImage
                    imagePath={im1}
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Slides>
    )
}
export default Engagement


